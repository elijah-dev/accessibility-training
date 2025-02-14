(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("#" + burger.dataset.target);
  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
})();

const live = document.getElementById("live");

setInterval(() => live.innerText = "Current number: " + Math.floor(Math.random() * 100), 10000)

const tabList = document.querySelector("[role=tablist]");
const tabs = document.querySelectorAll("[role=tab]");
const tabPanels = document.querySelectorAll("[role=tabpanel]");

function switchTab(event) {
  const tab = event.currentTarget;
  if (!tab.classList.contains("is-active")) {
    const prevTab = tabList.querySelector(".is-active");
    prevTab.classList.remove("is-active");
    prevTab.ariaSelected = false;
    tab.classList.add("is-active");
    tab.ariaSelected = true;
    tabPanels.forEach((panel) => {
      if (panel.classList.contains("is-active")) {
        panel.classList.remove("is-active");
      }
      if (
        panel.id ===
        tab.attributes.getNamedItem("aria-controls").value
      ) {
        panel.classList.add("is-active");
      }
    });
  }
}

tabs.forEach((tab) => tab.addEventListener("click", switchTab));


