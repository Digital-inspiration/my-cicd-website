// This little script looks at the website's address (URL) and shows a
// colored banner so you instantly know if you are on dev, staging, or prod.
(function () {
  var host = window.location.hostname;
  var banner = document.getElementById("env-banner");

  var env = "production";
  var color = "#16a34a"; // green
  var label = "🟢 PRODUCTION — the real website everyone sees";

  if (host.indexOf("-dev") !== -1) {
    env = "development";
    color = "#dc2626"; // red
    label = "🔴 DEVELOPMENT — my playground, things may be broken";
  } else if (host.indexOf("-staging") !== -1) {
    env = "staging";
    color = "#f59e0b"; // orange
    label = "🟠 STAGING — almost ready, final check before going live";
  } else if (host === "localhost" || host === "127.0.0.1") {
    env = "local";
    color = "#6366f1"; // indigo
    label = "🟣 LOCAL — running on my own computer";
  }

  banner.textContent = label;
  banner.style.background = color;
  document.title = "[" + env.toUpperCase() + "] My CI/CD Website";
})();
