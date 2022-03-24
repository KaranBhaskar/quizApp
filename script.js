// selecting elements
const form = document.querySelector(".form");
const input = Array.from(document.querySelectorAll("input"));
const alert1 = document.querySelector(".alert");
const correct = document.querySelectorAll("[data=correct]");
const list = document.querySelectorAll(".form__li");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // To check which is selected(checked)
//   // const question1 = document.querySelector('input[name="question1"]:checked');
//   // const question2 = document.querySelector('input[name="question2"]:checked');
//   // const question3 = document.querySelector('input[name="question3"]:checked');

//   const question = document.querySelectorAll("input[type=radio]:checked");
//   // to compare between if they are correct of not
//   if (question[0] == correct[0]) {
//     list[0].classList.add("correct");
//   } else {
//     list[0].classList.add("wrong");
//   }
//   if (question[1] == correct[1]) {
//     list[1].classList.add("correct");
//   } else {
//     list[1].classList.add("wrong");
//   }
//   if (question[2] == correct[2]) {
//     list[2].classList.add("correct");
//   } else {
//     list[2].classList.add("wrong");
//   }

//   // adding overlay if all correct
//   if (
//     question[0] == correct[0] &&
//     question[1] == correct[1] &&
//     question[2] == correct[2]
//     // question == correct
//   ) {
//     alert1.classList.add("show");
//     setTimeout(() => {
//       alert1.classList.remove("show");
//     }, 1000);
//   }
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  list.forEach((element) => element.classList.add("wrong"));

  const checked = input.filter((check) => check.checked);

  // console.log(checked);

  checked.forEach((item) => {
    const isCorrect = item.dataset.value === "correct";
    // console.log(isCorrect);

    const parentItem = item.closest(".form__li");

    if (isCorrect) {
      parentItem.classList.add("correct");
      parentItem.classList.remove("wrong");
    } else {
      parentItem.classList.remove("correct");
      parentItem.classList.add("wrong");
    }
  });
  const allTrue = checked.every((item) => item.dataset.value === "correct");
  // console.log(typeof allTrue);
  const allTrueLength = checked.length === list.length;

  if (allTrue && allTrueLength) {
    alert1.classList.add("show");
    setTimeout(() => {
      alert1.classList.remove("show");
    }, 1000);
  }
});
