const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".a");
const plusMinusButtons = document.querySelectorAll(".plus-minus");

// Functions
const hideAnswers = (q) => {
  answers.forEach((a) => {
    if (q != a) {
      a.classList.add("hidden");
    }
  });
};
const plusMinusBtn = () =>
  plusMinusButtons.forEach((p) => {
    p.textContent = "+";
  });

plusMinusBtn();

// Events
questions.forEach((q, i) => {
  q.addEventListener("click", () => {
    hideAnswers(answers[i]);
    plusMinusBtn();
    answers[i].classList.toggle("hidden");
    plusMinusButtons[i].textContent = answers[i].classList.contains("hidden")
      ? "+"
      : "-";
  });
});
