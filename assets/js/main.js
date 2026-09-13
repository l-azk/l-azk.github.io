/* =========================================
   INTERACTIVE HERO SHADOW
========================================= */

const heroTitle = document.getElementById("interactive-hero-title");
const heroHeading = document.querySelector(".about-hero-heading");


if (
  heroTitle &&
  heroHeading &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches
) {

  heroHeading.addEventListener("mousemove", (event) => {

    const rect = heroHeading.getBoundingClientRect();


    const mouseX =
      (event.clientX - rect.left) / rect.width;

    const mouseY =
      (event.clientY - rect.top) / rect.height;


    /*
      Convert cursor position from 0–1
      into a range from -1 to 1.
    */

    const normalizedX =
      (mouseX - 0.5) * 2;

    const normalizedY =
      (mouseY - 0.5) * 2;


    /*
      Keep the shadow close to the original text.
      It still moves opposite the cursor, as though
      the cursor were the light source.
    */

    const shadowX =
      5 - normalizedX * 8;

    const shadowY =
      5 - normalizedY * 6;


    /*
      The shadow becomes slightly more visible
      as the cursor moves away from the centre.
    */

    const distance =
      Math.min(
        1,
        Math.sqrt(
          normalizedX * normalizedX +
          normalizedY * normalizedY
        )
      );


    const opacity =
      0.09 + distance * 0.04;


    heroTitle.style.setProperty(
      "--hero-shadow-x",
      `${shadowX}px`
    );


    heroTitle.style.setProperty(
      "--hero-shadow-y",
      `${shadowY}px`
    );


    heroTitle.style.setProperty(
      "--hero-shadow-opacity",
      opacity
    );

  });


  heroHeading.addEventListener("mouseleave", () => {

    heroTitle.style.setProperty(
      "--hero-shadow-x",
      "5px"
    );


    heroTitle.style.setProperty(
      "--hero-shadow-y",
      "5px"
    );


    heroTitle.style.setProperty(
      "--hero-shadow-opacity",
      "0.11"
    );

  });

}



/* =========================================
   SHADOW STIMULUS SWITCHER
========================================= */

const stimulusButtons =
  document.querySelectorAll(".stimulus-button");


const stimulusImage =
  document.getElementById("shadow-stimulus");


const stimulusCaption =
  document.getElementById("stimulus-caption-text");


function changeStimulus(button) {

  if (!stimulusImage || !stimulusCaption) {
    return;
  }


  const newImage =
    button.dataset.image;


  const newCaption =
    button.dataset.caption;


  stimulusButtons.forEach((item) => {

    item.classList.remove("active");

  });


  button.classList.add("active");


  stimulusImage.classList.add("changing");


  setTimeout(() => {

    stimulusImage.src =
      newImage;


    stimulusCaption.textContent =
      newCaption;


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

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");


          revealObserver.unobserve(
            entry.target
          );

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