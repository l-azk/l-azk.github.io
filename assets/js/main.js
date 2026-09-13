/* =========================================
   SHADOW STIMULUS SWITCHER
========================================= */

const stimulusButtons = document.querySelectorAll(".stimulus-button");
const stimulusImage = document.getElementById("shadow-stimulus");
const stimulusCaption = document.getElementById("stimulus-caption-text");


function changeStimulus(button) {

  if (!stimulusImage || !stimulusCaption) {
    return;
  }

  const newImage = button.dataset.image;
  const newCaption = button.dataset.caption;


  stimulusButtons.forEach((item) => {
    item.classList.remove("active");
  });


  button.classList.add("active");

  stimulusImage.classList.add("changing");


  setTimeout(() => {

    stimulusImage.src = newImage;
    stimulusCaption.textContent = newCaption;

    stimulusImage.onload = () => {
      stimulusImage.classList.remove("changing");
    };

  }, 200);

}


stimulusButtons.forEach((button) => {

  button.addEventListener("mouseenter", () => {
    changeStimulus(button);
  });


  button.addEventListener("click", () => {
    changeStimulus(button);
  });

});


/* =========================================
   SCROLL REVEALS
========================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {
  revealObserver.observe(element);
});