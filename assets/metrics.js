/* Per-level cost & time metrics, mined from the raw session transcripts.
   Cost = API-equivalent at list price: Fable 5 $10/$50 per MTok in/out,
   Opus 4.8 $5/$25; cache reads 0.1x input, cache writes 2x (1-hour TTL,
   as recorded in every session's usage blocks). Time is machine time only:
   the sum of prompt-to-last-response intervals, excluding human think-time
   between follow-up prompts. */
window.SEVEN_LEVELS_METRICS = {
  1: { fable: { prompts: 1, calls: 27, cost: 5.26,  mins: 6.6,  time: "6m 33s"  },
       opus:  { prompts: 1, calls: 2,  cost: 0.72,  mins: 1.4,  time: "1m 26s"  } },
  2: { fable: { prompts: 2, calls: 32, cost: 8.97,  mins: 10.1, time: "10m 08s" },
       opus:  { prompts: 2, calls: 18, cost: 3.18,  mins: 6.7,  time: "6m 40s"  } },
  3: { fable: { prompts: 1, calls: 69, cost: 22.05, mins: 17.1, time: "17m 05s" },
       opus:  { prompts: 2, calls: 41, cost: 4.35,  mins: 9.8, time: "9m 47s"  } },
  4: { fable: { prompts: 3, calls: 51, cost: 22.68, mins: 15.7, time: "15m 42s" },
       opus:  { prompts: 2, calls: 62, cost: 8.54,  mins: 11.8, time: "11m 46s" } },
  5: { fable: { prompts: 1, calls: 15, cost: 4.93,  mins: 5.3,  time: "5m 20s"  },
       opus:  { prompts: 1, calls: 16, cost: 3.50,  mins: 4.3,  time: "4m 15s"  } },
  6: { fable: { prompts: 1, calls: 25, cost: 9.51,  mins: 10.9, time: "10m 51s" },
       opus:  { prompts: 2, calls: 37, cost: 8.94,  mins: 10.4, time: "10m 24s" } },
  7: { fable: { prompts: 4, calls: 92, cost: 28.73, mins: 30.7, time: "30m 40s" },
       opus:  { prompts: 2, calls: 53, cost: 6.69,  mins: 16.9, time: "16m 51s" } },
};

window.SEVEN_LEVELS_METRIC_NOTES = {
  7: "Fable's level-7 time includes the level-6 overwrite investigation and recovery.",
};

(function () {
  function strip(level) {
    var m = window.SEVEN_LEVELS_METRICS[level];
    if (!m) return "";
    function row(name, d) {
      return '<div class="metric-row"><span class="metric-model">' + name + "</span>" +
        '<span class="metric"><b>$' + d.cost.toFixed(2) + "</b> API-equiv. cost</span>" +
        '<span class="metric"><b>' + d.time + "</b> machine time</span>" +
        '<span class="metric"><b>' + d.prompts + "</b> prompt" + (d.prompts > 1 ? "s" : "") + "</span>" +
        '<span class="metric"><b>' + d.calls + "</b> API calls</span></div>";
    }
    var note = window.SEVEN_LEVELS_METRIC_NOTES[level];
    return '<div class="metrics-strip">' + row("Fable 5", m.fable) + row("Opus", m.opus) +
      '<p class="metric-foot">Cost at API list price with prompt caching (1-hour TTL), mined from the session transcripts. Time is machine time only (AI thinking + tool use); human think-time between prompts is excluded.' +
      (note ? " " + note : "") + "</p></div>";
  }
  window.renderLevelMetrics = strip;
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-metrics-level]").forEach(function (el) {
      el.innerHTML = strip(parseInt(el.getAttribute("data-metrics-level"), 10));
    });
  });
})();
