/* =========================================
   INTERACTIVE HERO SHADOW
========================================= */

const heroTitle =
    document.getElementById("interactive-hero-title");

const heroHeading =
    document.querySelector(".about-hero-heading");


if (
    heroTitle &&
    heroHeading &&
    window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches
) {

    heroHeading.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroHeading.getBoundingClientRect();


            const mouseX =
                (event.clientX - rect.left) /
                rect.width;

            const mouseY =
                (event.clientY - rect.top) /
                rect.height;


            const normalizedX =
                (mouseX - 0.5) * 2;

            const normalizedY =
                (mouseY - 0.5) * 2;


            const shadowX =
                5 - normalizedX * 8;

            const shadowY =
                5 - normalizedY * 6;


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

        }
    );


    heroHeading.addEventListener(
        "mouseleave",
        () => {

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

        }
    );

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

            stimulusImage.classList.remove(
                "changing"
            );

        };

    }, 200);

}


stimulusButtons.forEach((button) => {

    button.addEventListener(
        "mouseenter",
        () => {

            changeStimulus(button);

        }
    );


    button.addEventListener(
        "click",
        () => {

            changeStimulus(button);

        }
    );

});



/* =========================================
   COUPLE CONFLICT AI DEMO
========================================= */

const aiDemo =
    document.getElementById("ai-demo");


const aiDemoTyping =
    document.getElementById("ai-demo-typing");


const aiDemoResponse =
    document.getElementById("ai-demo-response");


const aiDemoResult =
    document.getElementById("ai-demo-result");


const aiDemoCondition =
    document.getElementById("ai-demo-condition");


const aiDemoSwitch =
    document.getElementById("ai-demo-switch");


const aiDemoConditions = {

    support: {

        label:
            "Support the participant’s perspective",

        response:
            "That frustration makes sense. You had made plans together, so having them cancelled at the last minute could make it feel like your time and the commitment you made were not being taken seriously."

    },

    partner: {

        label:
            "Consider the partner’s perspective",

        response:
            "It makes sense that you were frustrated. At the same time, there may be more to your partner’s decision than you initially realized. What do you think might have made going out with their friends feel important to them that evening?"

    }

};


let currentAiCondition =
    null;


let aiDemoStarted =
    false;


let aiDemoTimeout =
    null;


let aiResultTimeout =
    null;


/*
  Randomly assign the initial condition.
*/

function randomlyAssignAiCondition() {

    return Math.random() < 0.5
        ? "support"
        : "partner";

}


/*
  Display one experimental condition.
*/

function showAiCondition(condition) {

    if (
        !aiDemoTyping ||
        !aiDemoResponse ||
        !aiDemoResult ||
        !aiDemoCondition
    ) {
        return;
    }


    currentAiCondition =
        condition;


    clearTimeout(
        aiDemoTimeout
    );


    clearTimeout(
        aiResultTimeout
    );


    /*
      Reset the previous response.
    */

    aiDemoResponse.classList.remove(
        "visible"
    );


    aiDemoResult.classList.remove(
        "visible"
    );


    aiDemoResponse.style.display =
        "none";


    aiDemoResult.style.display =
        "none";


    /*
      Show the animated typing indicator.
    */

    aiDemoTyping.style.display =
        "flex";


    /*
      Keep the typing indicator visible
      for five seconds.
    */

    aiDemoTimeout =
        setTimeout(() => {

            const selectedCondition =
                aiDemoConditions[
                currentAiCondition
                ];


            /*
              Remove the typing indicator.
            */

            aiDemoTyping.style.display =
                "none";


            /*
              Insert the assigned AI response.
            */

            aiDemoResponse.textContent =
                selectedCondition.response;


            aiDemoCondition.textContent =
                selectedCondition.label;


            /*
              Reveal the AI response.
            */

            aiDemoResponse.style.display =
                "block";


            requestAnimationFrame(() => {

                aiDemoResponse.classList.add(
                    "visible"
                );

            });


            /*
              Reveal the assigned experimental
              condition shortly after the
              response appears.
            */

            aiResultTimeout =
                setTimeout(() => {

                    aiDemoResult.style.display =
                        "grid";


                    requestAnimationFrame(() => {

                        aiDemoResult.classList.add(
                            "visible"
                        );

                    });

                }, 650);


        }, 5000);

}


/*
  Start the demonstration when the
  demo enters the viewport.
*/

if (aiDemo) {

    const aiDemoObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !aiDemoStarted
                    ) {

                        aiDemoStarted =
                            true;


                        showAiCondition(
                            randomlyAssignAiCondition()
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.35
            }

        );


    aiDemoObserver.observe(
        aiDemo
    );

}


/*
  After the randomly assigned condition
  has been shown, allow the visitor to
  inspect the alternative condition.
*/

if (aiDemoSwitch) {

    aiDemoSwitch.addEventListener(
        "click",
        () => {

            const otherCondition =
                currentAiCondition === "support"
                    ? "partner"
                    : "support";


            showAiCondition(
                otherCondition
            );

        }
    );

}

/* =========================================
   FAKE CHATBOX POPUP
========================================= */

const fakeChatInput =
    document.getElementById("fake-chat-input");

const fakeChatSend =
    document.getElementById("fake-chat-send");

const fakeChatPopup =
    document.getElementById("fake-chat-popup");

const fakeChatPopupButton =
    document.getElementById("fake-chat-popup-button");


function openFakeChatPopup() {

    if (!fakeChatPopup) {
        return;
    }

    fakeChatPopup.classList.add(
        "visible"
    );

    fakeChatPopup.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeFakeChatPopup() {

    if (!fakeChatPopup) {
        return;
    }

    fakeChatPopup.classList.remove(
        "visible"
    );

    fakeChatPopup.setAttribute(
        "aria-hidden",
        "true"
    );

}


if (fakeChatInput) {

    fakeChatInput.addEventListener(
        "click",
        openFakeChatPopup
    );

}


if (fakeChatSend) {

    fakeChatSend.addEventListener(
        "click",
        openFakeChatPopup
    );

}


/*
  The "Fair enough" button is deliberately
  the only way to close the popup.
*/

if (fakeChatPopupButton) {

    fakeChatPopupButton.addEventListener(
        "click",
        closeFakeChatPopup
    );

}


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

                    entry.target.classList.add(
                        "visible"
                    );


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

    revealObserver.observe(
        element
    );

});