$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // fetch live GitHub star counts for publication "code" badges
  const STAR_CACHE_TTL = 6 * 60 * 60 * 1000; // 6 hours
  document.querySelectorAll(".repo-stars[data-repo]").forEach(function (el) {
    const repo = el.getAttribute("data-repo");
    const countEl = el.querySelector(".repo-stars-count");
    if (!repo || !countEl) return;

    const cacheKey = "gh-stars:" + repo;
    let cached = null;
    try {
      cached = JSON.parse(localStorage.getItem(cacheKey));
    } catch (e) {
      cached = null;
    }
    if (cached && cached.ts && Date.now() - cached.ts < STAR_CACHE_TTL) {
      countEl.textContent = cached.stars;
      return;
    }

    fetch("https://api.github.com/repos/" + repo)
      .then(function (response) {
        return response.ok ? response.json() : null;
      })
      .then(function (data) {
        if (data && typeof data.stargazers_count === "number") {
          countEl.textContent = data.stargazers_count;
          try {
            localStorage.setItem(cacheKey, JSON.stringify({ stars: data.stargazers_count, ts: Date.now() }));
          } catch (e) {
            /* ignore storage errors */
          }
        } else if (cached && typeof cached.stars !== "undefined") {
          countEl.textContent = cached.stars;
        }
      })
      .catch(function () {
        if (cached && typeof cached.stars !== "undefined") {
          countEl.textContent = cached.stars;
        }
      });
  });
});
