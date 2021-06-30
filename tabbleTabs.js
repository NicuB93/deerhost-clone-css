// Elements
const tabs = document.querySelector(".plantabs").querySelectorAll("div");
const tabsImg = document.querySelectorAll(".tab-img");
const tableContent = document.querySelector(".sharepar");

// Functions
const removeActiveTab = (tabs, tabImg) => {
  tabs.forEach((t) => t.classList.remove("active"));
  tabImg.forEach((img) => (img.style.color = "rgba(63, 54, 187, 0.815)"));
};

tabs[0].classList.add("active");
tabsImg[0].style.color = "white";

// Events
tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveTab(tabs, tabsImg);
    t.classList.toggle("active");
    tabsImg[i].style.color = "white";
    tableContent.textContent =
      i == 0
        ? "All Shared Hosting Features"
        : i == 1
        ? "All Servers Hosting Features"
        : i == 2
        ? "All VPS Hosting Features"
        : i == 3
        ? "All Dedicated Hosting Features"
        : "All Reseller Hosting Features";
  });
});
