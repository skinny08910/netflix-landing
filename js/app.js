/*********** FAQ Section *********/
let faqQuestion = document.querySelectorAll(".faq-q");
let faqIcons = document.querySelectorAll(".fa-plus");
let faqAnswers = document.querySelectorAll(".faq-a");

faqQuestion[0].addEventListener("click", () => {
  faqQuestion[0].classList.toggle("open");
  faqQuestion[1].classList.remove("open");
  faqQuestion[2].classList.remove("open");
  faqQuestion[3].classList.remove("open");
  faqQuestion[4].classList.remove("open");
  faqQuestion[5].classList.remove("open");
});

faqQuestion[1].addEventListener("click", () => {
  faqQuestion[0].classList.remove("open");
  faqQuestion[1].classList.toggle("open");
  faqQuestion[2].classList.remove("open");
  faqQuestion[3].classList.remove("open");
  faqQuestion[4].classList.remove("open");
  faqQuestion[5].classList.remove("open");
});

faqQuestion[2].addEventListener("click", () => {
  faqQuestion[0].classList.remove("open");
  faqQuestion[1].classList.remove("open");
  faqQuestion[2].classList.toggle("open");
  faqQuestion[3].classList.remove("open");
  faqQuestion[4].classList.remove("open");
  faqQuestion[5].classList.remove("open");
});

faqQuestion[3].addEventListener("click", () => {
  faqQuestion[0].classList.remove("open");
  faqQuestion[1].classList.remove("open");
  faqQuestion[2].classList.remove("open");
  faqQuestion[3].classList.toggle("open");
  faqQuestion[4].classList.remove("open");
  faqQuestion[5].classList.remove("open");
});

faqQuestion[4].addEventListener("click", () => {
  faqQuestion[0].classList.remove("open");
  faqQuestion[1].classList.remove("open");
  faqQuestion[2].classList.remove("open");
  faqQuestion[3].classList.remove("open");
  faqQuestion[4].classList.toggle("open");
  faqQuestion[5].classList.remove("open");
});

faqQuestion[5].addEventListener("click", () => {
  faqQuestion[0].classList.remove("open");
  faqQuestion[1].classList.remove("open");
  faqQuestion[2].classList.remove("open");
  faqQuestion[3].classList.remove("open");
  faqQuestion[4].classList.remove("open");
  faqQuestion[5].classList.toggle("open");
});
