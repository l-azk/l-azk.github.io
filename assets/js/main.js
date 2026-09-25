/* =========================================
   INTERACTIVE HERO SHADOW
========================================= */

const heroTitle =
    document.getElementById(
        "interactive-hero-title"
    );

const heroHeading =
    document.querySelector(
        ".about-hero-heading"
    );

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
    document.querySelectorAll(
        ".stimulus-button"
    );

const stimulusImage =
    document.getElementById(
        "shadow-stimulus"
    );

const stimulusCaption =
    document.getElementById(
        "stimulus-caption-text"
    );


function changeStimulus(button) {

    if (
        !stimulusImage ||
        !stimulusCaption
    ) {
        return;
    }

    const newImage =
        button.dataset.image;

    const newCaption =
        button.dataset.caption;


    stimulusButtons.forEach(
        (item) => {
            item.classList.remove(
                "active"
            );
        }
    );


    button.classList.add(
        "active"
    );


    stimulusImage.classList.add(
        "changing"
    );


    setTimeout(() => {

        stimulusImage.src =
            newImage;

        stimulusCaption.textContent =
            newCaption;


        if (
            stimulusImage.complete
        ) {
            stimulusImage.classList.remove(
                "changing"
            );
        } else {

            stimulusImage.onload =
                () => {
                    stimulusImage.classList.remove(
                        "changing"
                    );
                };
        }

    }, 200);
}


/* =========================================
   ALL THREE CONDITIONS EASTER EGG
========================================= */

const stimulusEasterEgg =
    document.getElementById(
        "stimulus-easter-egg"
    );


const viewedStimulusConditions =
    new Set(["wall"]);


let stimulusEasterEggFound =
    false;


function recordStimulusCondition(
    button
) {

    if (
        !button ||
        stimulusEasterEggFound
    ) {
        return;
    }


    const condition =
        button.dataset.condition;


    if (!condition) {
        return;
    }


    viewedStimulusConditions.add(
        condition
    );


    if (
        viewedStimulusConditions.has(
            "wall"
        ) &&
        viewedStimulusConditions.has(
            "overlap"
        ) &&
        viewedStimulusConditions.has(
            "mask"
        ) &&
        stimulusEasterEgg
    ) {

        stimulusEasterEggFound =
            true;


        stimulusEasterEgg.setAttribute(
            "aria-hidden",
            "false"
        );


        requestAnimationFrame(
            () => {

                stimulusEasterEgg.classList.add(
                    "visible"
                );

            }
        );
    }
}


stimulusButtons.forEach(
    (button) => {

        button.addEventListener(
            "mouseenter",
            () => {

                changeStimulus(
                    button
                );

                recordStimulusCondition(
                    button
                );
            }
        );


        button.addEventListener(
            "click",
            () => {

                changeStimulus(
                    button
                );

                recordStimulusCondition(
                    button
                );
            }
        );

    }
);


/* =========================================
   DERIVATIVE INDIVIDUAL EASTER EGG
========================================= */

const derivativeIndividualTrigger =
    document.getElementById(
        "derivative-individual-trigger"
    );

const derivativePopup =
    document.getElementById(
        "derivative-popup"
    );

const derivativePopupButton =
    document.getElementById(
        "derivative-popup-button"
    );


function openDerivativePopup() {

    if (!derivativePopup) {
        return;
    }


    derivativePopup.classList.add(
        "visible"
    );


    derivativePopup.setAttribute(
        "aria-hidden",
        "false"
    );


    if (derivativePopupButton) {

        derivativePopupButton.focus();

    }
}


function closeDerivativePopup() {

    if (!derivativePopup) {
        return;
    }


    derivativePopup.classList.remove(
        "visible"
    );


    derivativePopup.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        derivativeIndividualTrigger
    ) {

        derivativeIndividualTrigger.focus();

    }
}


if (
    derivativeIndividualTrigger
) {

    derivativeIndividualTrigger.addEventListener(
        "click",
        openDerivativePopup
    );
}


if (
    derivativePopupButton
) {

    derivativePopupButton.addEventListener(
        "click",
        closeDerivativePopup
    );
}


/* =========================================
   COUPLE CONFLICT AI DEMO
========================================= */

const aiDemoStart =
    document.getElementById(
        "ai-demo-start"
    );

const aiDemoStartTitle =
    document.getElementById(
        "ai-demo-start-title"
    );

const aiDemoStartDescription =
    document.getElementById(
        "ai-demo-start-description"
    );

const aiDemoStartArrow =
    document.getElementById(
        "ai-demo-start-arrow"
    );

const aiDemoAiRow =
    document.getElementById(
        "ai-demo-ai-row"
    );

const aiDemoTyping =
    document.getElementById(
        "ai-demo-typing"
    );

const aiDemoResponse =
    document.getElementById(
        "ai-demo-response"
    );

const aiDemoResult =
    document.getElementById(
        "ai-demo-result"
    );

const aiDemoCondition =
    document.getElementById(
        "ai-demo-condition"
    );

const aiDemoSwitch =
    document.getElementById(
        "ai-demo-switch"
    );


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


/* RANDOM ASSIGNMENT */

function randomlyAssignAiCondition() {

    return Math.random() < 0.5
        ? "support"
        : "partner";

}


/* RUN ONE CONDITION */

function showAiCondition(
    condition
) {

    if (
        !aiDemoTyping ||
        !aiDemoResponse ||
        !aiDemoResult ||
        !aiDemoCondition ||
        !aiDemoAiRow
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
      Make the AI row visible.
    */

    aiDemoAiRow.classList.remove(
        "ai-row-hidden"
    );


    /*
      Reset previous response/result.
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
      Start typing.
    */

    aiDemoTyping.style.display =
        "flex";


    /*
      Wait five seconds, then show
      the AI response.
    */

    aiDemoTimeout =
        setTimeout(
            () => {

                const selectedCondition =
                    aiDemoConditions[
                        currentAiCondition
                    ];


                aiDemoTyping.style.display =
                    "none";


                aiDemoResponse.textContent =
                    selectedCondition.response;


                aiDemoCondition.textContent =
                    selectedCondition.label;


                aiDemoResponse.style.display =
                    "block";


                requestAnimationFrame(
                    () => {

                        aiDemoResponse.classList.add(
                            "visible"
                        );

                    }
                );


                /*
                  Reveal condition shortly
                  after the AI response.
                */

                aiResultTimeout =
                    setTimeout(
                        () => {

                            aiDemoResult.style.display =
                                "grid";


                            requestAnimationFrame(
                                () => {

                                    aiDemoResult.classList.add(
                                        "visible"
                                    );

                                }
                            );

                        },
                        650
                    );

            },
            5000
        );
}


/* =========================================
   START DEMO ONLY WHEN CLICKED
========================================= */

function startAiDemo() {

    if (
        aiDemoStarted
    ) {
        return;
    }


    aiDemoStarted =
        true;


    /*
      Visually mark the call-to-action
      as having been activated.
    */

    if (aiDemoStart) {

        aiDemoStart.classList.add(
            "started"
        );

        aiDemoStart.disabled =
            true;

    }


    if (
        aiDemoStartTitle
    ) {

        aiDemoStartTitle.textContent =
            "Experiment running...";

    }


    if (
        aiDemoStartDescription
    ) {

        aiDemoStartDescription.textContent =
            "The AI is responding to the participant’s disagreement.";

    }


    if (
        aiDemoStartArrow
    ) {

        aiDemoStartArrow.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /*
      Randomly assign the visitor to
      one of the two experimental
      conditions and begin the demo.
    */

    showAiCondition(
        randomlyAssignAiCondition()
    );
}


if (
    aiDemoStart
) {

    aiDemoStart.addEventListener(
        "click",
        startAiDemo
    );

}


/* =========================================
   TRY OTHER CONDITION
========================================= */

if (
    aiDemoSwitch
) {

    aiDemoSwitch.addEventListener(
        "click",
        () => {

            const otherCondition =
                currentAiCondition ===
                "support"
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
    document.getElementById(
        "fake-chat-input"
    );

const fakeChatSend =
    document.getElementById(
        "fake-chat-send"
    );

const fakeChatPopup =
    document.getElementById(
        "fake-chat-popup"
    );

const fakeChatPopupButton =
    document.getElementById(
        "fake-chat-popup-button"
    );


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
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);