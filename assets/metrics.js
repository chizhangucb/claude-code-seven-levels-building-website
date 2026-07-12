/* Per-level cost & time metrics, mined from the raw session transcripts.
   Cost = API-equivalent at list price: Fable 5 $10/$50 per MTok in/out,
   Opus 4.8 $5/$25; cache reads 0.1x input, cache writes 2x (1-hour TTL,
   as recorded in every session's usage blocks). Time is wall-clock from
   the level's first prompt to the last activity, so it includes human
   think-time between follow-ups. */
window.SEVEN_LEVELS_METRICS = {
  1: { fable: { prompts: 1, calls: 27, cost: 5.26,  mins: 6.6,  time: "6m 35s"  },
       opus:  { prompts: 1, calls: 2,  cost: 0.72,  mins: 1.5,  time: "1m 29s"  } },
  2: { fable: { prompts: 2, calls: 32, cost: 8.97,  mins: 15.8, time: "15m 46s" },
       opus:  { prompts: 2, calls: 18, cost: 3.18,  mins: 7.1,  time: "7m 05s"  } },
  3: { fable: { prompts: 1, calls: 69, cost: 22.05, mins: 17.1, time: "17m 08s" },
       opus:  { prompts: 2, calls: 41, cost: 4.35,  mins: 10.0, time: "9m 59s"  } },
  4: { fable: { prompts: 3, calls: 51, cost: 22.68, mins: 18.2, time: "18m 10s" },
       opus:  { prompts: 2, calls: 62, cost: 8.54,  mins: 15.5, time: "15m 27s" } },
  5: { fable: { prompts: 1, calls: 15, cost: 4.93,  mins: 5.4,  time: "5m 24s"  },
       opus:  { prompts: 1, calls: 16, cost: 3.50,  mins: 4.3,  time: "4m 16s"  } },
  6: { fable: { prompts: 1, calls: 25, cost: 9.51,  mins: 10.9, time: "10m 51s" },
       opus:  { prompts: 2, calls: 37, cost: 8.94,  mins: 22.7, time: "22m 44s" } },
  7: { fable: { prompts: 4, calls: 92, cost: 28.73, mins: 69.4, time: "69m 23s" },
       opus:  { prompts: 2, calls: 53, cost: 6.69,  mins: 18.8, time: "18m 50s" } },
};

window.SEVEN_LEVELS_METRIC_NOTES = {
  7: "Fable's level-7 wall-clock includes the level-6 overwrite investigation and recovery.",
  6: "Opus's level-6 time includes an interrupted and re-sent Firecrawl prompt.",
};

(function () {
  function strip(level) {
    var m = window.SEVEN_LEVELS_METRICS[level];
    if (!m) return "";
    function row(name, d) {
      return '<div class="metric-row"><span class="metric-model">' + name + "</span>" +
        '<span class="metric"><b>$' + d.cost.toFixed(2) + "</b> API-equiv. cost</span>" +
        '<span class="metric"><b>' + d.time + "</b> wall-clock</span>" +
        '<span class="metric"><b>' + d.prompts + "</b> prompt" + (d.prompts > 1 ? "s" : "") + "</span>" +
        '<span class="metric"><b>' + d.calls + "</b> API calls</span></div>";
    }
    var note = window.SEVEN_LEVELS_METRIC_NOTES[level];
    return '<div class="metrics-strip">' + row("Fable 5", m.fable) + row("Opus", m.opus) +
      '<p class="metric-foot">Cost at API list price with prompt caching (1-hour TTL), mined from the session transcripts. Time includes human think-time between follow-up prompts.' +
      (note ? " " + note : "") + "</p></div>";
  }
  window.renderLevelMetrics = strip;
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-metrics-level]").forEach(function (el) {
      el.innerHTML = strip(parseInt(el.getAttribute("data-metrics-level"), 10));
    });
  });
})();
