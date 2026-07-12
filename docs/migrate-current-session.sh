#!/bin/bash
# Run AFTER the Claude Code session 2cbfdd25 has ended (close the session first).
# Moves the tutorial-building session transcript from the fable-trials project dir
# to the consolidated design-yellow-iphone-web project dir and updates its cwd paths.
set -euo pipefail

P=~/.claude/projects
SRC="$P/-Users-chizhang-experimental-design-yellow-iphone-web-fable-trials"
DEST="$P/-Users-chizhang-experimental-design-yellow-iphone-web"
SID="2cbfdd25-3847-4f41-a06f-008b4bd07bf1"

# refuse to run if the session looks active (modified in the last 2 minutes)
if [ -n "$(find "$SRC/$SID.jsonl" -mmin -2 2>/dev/null)" ]; then
  echo "Transcript was modified <2 min ago — is the session still open? Aborting."; exit 1
fi

mv -n "$SRC/$SID.jsonl" "$DEST/"
[ -d "$SRC/$SID" ] && mv -n "$SRC/$SID" "$DEST/"

python3 - <<'EOF'
import json, os
f=os.path.expanduser('~/.claude/projects/-Users-chizhang-experimental-design-yellow-iphone-web/2cbfdd25-3847-4f41-a06f-008b4bd07bf1.jsonl')
old={'/Users/chizhang/experimental/design-yellow-iphone-web/fable-trials',
     '/Users/chizhang/experimental/design-yellow-iphone-web/opus-trials'}
new='/Users/chizhang/experimental/design-yellow-iphone-web'
lines=[json.loads(l) for l in open(f) if l.strip()]
n=0
for e in lines:
    for k,v in e.items():
        if isinstance(v,str) and v in old: e[k]=new; n+=1
open(f,'w').write('\n'.join(json.dumps(e,ensure_ascii=False) for e in lines)+'\n')
print(f'{n} path fields updated')
EOF

rmdir "$SRC" 2>/dev/null && echo "removed empty $SRC" || echo "note: $SRC not empty, left in place"
rmdir /Users/chizhang/experimental/design-yellow-iphone-web/fable-trials 2>/dev/null || true
echo "Done — session $SID migrated."
