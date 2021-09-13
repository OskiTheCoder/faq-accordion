// simple solution to open and close accordion using vanilla js
let openElements = [];

const getFaqQuestionElement = (ele) => {
  if (ele.classList.contains("faq-question")) {
    return ele;
  }
  return ele.parentElement;
};

const toggleOpenStyles = (faqQuestionEle) => {
  Array.from(faqQuestionEle.children).forEach((childEle) => {
    childEle.classList.add("open");
    openElements.push(childEle);
  });
  //show answer element
  faqQuestionEle.nextElementSibling.classList.add("open");
  openElements.push(faqQuestionEle.nextElementSibling);
};

const handleQuestionClick = (event) => {
  const faqQuestionEle = getFaqQuestionElement(event.target);
  if (openElements && openElements.length > 0) {
    let returnAfterReset = false;
    // already open?
    if (faqQuestionEle.nextElementSibling.classList.contains("open")) {
      returnAfterReset = true;
    }
    openElements.forEach((openElement) => {
      openElement.classList.remove("open");
    });
    if (returnAfterReset) return;
  }
  //apply styles
  toggleOpenStyles(faqQuestionEle);
};

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((faqquestion) => {
  faqquestion.addEventListener("click", handleQuestionClick);
});
