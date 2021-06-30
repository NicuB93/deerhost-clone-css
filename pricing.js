// Elements
const activeBtn = document
  .querySelector(".monthlyearly")
  .querySelectorAll("button");
const yearly = document.querySelector(".year-plan");
const monthly = document.querySelector(".month-plan");

// Functions
const removeActive = () => {
  activeBtn.forEach((b) => b.classList.remove("active"));
};

// Event handlers
activeBtn.forEach((b) => {
  b.addEventListener("click", () => {
    removeActive();
    b.classList.toggle("active");
    if (b.classList.contains("active") && b.classList.contains("monthly")) {
      yearly.classList.add("disable");
      monthly.classList.remove("disable");
    } else {
      yearly.classList.remove("disable");
      monthly.classList.add("disable");
    }
  });
});
// console.log(activeBtn);
