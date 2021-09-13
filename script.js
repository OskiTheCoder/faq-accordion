// simple solution to open and close accordion

let openh3Ele = null;
let openArrowImgEle = null;
let openFaqAnswer = null;

const handleQuestionClick = (event) => {
  const h3Ele = event.target;
  if (openh3Ele && openArrowImgEle && openFaqAnswer) {
    let returnAfterReset = false;
    // already open?
    if (h3Ele.classList.contains("open")) {
      returnAfterReset = true;
    }
    openh3Ele.classList = "";
    openArrowImgEle.classList = "arrow-down";
    openFaqAnswer.classList = "faq-answer";
    if (returnAfterReset) return;
  }
  // apply styles
  h3Ele.classList = "open";
  const arrowImgEle = h3Ele.nextElementSibling;
  arrowImgEle.classList = "arrow-down open";
  const faqAnswer = h3Ele.parentElement.nextElementSibling;
  faqAnswer.classList = "faq-answer open";
  openh3Ele = h3Ele;
  openArrowImgEle = arrowImgEle;
  openFaqAnswer = faqAnswer;
};

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((faqquestion) => {
  faqquestion.addEventListener("click", handleQuestionClick);
});
