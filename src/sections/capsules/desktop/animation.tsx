import gsap from "gsap";
import SplitText from "gsap/SplitText";

const SELECTORS = {
    firstCapsule: ".capsule:nth-child(1)",
    firstCapsuleDiv: ".capsule:nth-child(1) > div",
    firstCapsuleImg: ".capsule:nth-child(1) img",
    otherCapsules: ".capsule:not(:nth-child(1))",
    otherCapsulesImg: ".capsule:not(:nth-child(1)) img",
    secondCapsule: ".capsule:nth-child(2)"
};

function createFadeInTimeline(
    heading: HTMLElement,
    paragraph: HTMLElement,
    button: HTMLElement,
    headingSplit: SplitText,
    isFirstCapsule: boolean = false
): gsap.core.Timeline {
    const timeline = gsap.timeline({paused: true})
        .set(headingSplit.chars, {xPercent: 100})
        .set([heading, paragraph, button], {autoAlpha: 1})
        .to(headingSplit.chars, {xPercent: 0}, "<")
        .to(button, {scale: 1, autoAlpha: 1}, "<")
        .to(paragraph, {x: 0, autoAlpha: 1}, "<");

    if (isFirstCapsule) {
        timeline.to("#progress, #scroll", {autoAlpha: 1}, "<")
            .from("#progress-bar", {scaleX: 0}, "<");
    }

    return timeline;
}

function createFadeOutTimeline(
    capsule: HTMLElement,
    overlay: HTMLElement
): gsap.core.Timeline {
    return gsap.timeline()
        .to(capsule, {scale: 0.9})
        .to(overlay, {opacity: 0.75}, "<");
}

function prepareCapsuleElements(capsule: HTMLElement) {
    const heading = capsule.querySelector("h1") as HTMLElement;
    const paragraph = capsule.querySelector("p") as HTMLElement;
    const button = capsule.querySelector("button") as HTMLElement;
    const overlay = capsule.querySelector(".overlay") as HTMLElement;
    const image = capsule.querySelector("img") as HTMLElement;

    const headingSplit = new SplitText(heading, {
        type: "chars",
        mask: "chars"
    });

    gsap.set(headingSplit.chars, {xPercent: 100});
    gsap.set(heading, {autoAlpha: 1});

    return {heading, paragraph, button, overlay, image, headingSplit};
}

export function animate(capsules: HTMLElement[]) {
    if (!capsules.length) return;

    const firstCapsule = capsules[0];
    const otherCapsules = capsules.slice(1);

    const otherCapsulesTimeline: gsap.core.Timeline[] = [];
    const fadeOutTimeline: gsap.core.Timeline[] = [];

    const {
        heading: firstHeading,
        paragraph: firstParagraph,
        button: firstButton,
        overlay: firstOverlay,
        headingSplit: firstHeadingSplit
    } = prepareCapsuleElements(firstCapsule);

    const firstFadeInTimeline = createFadeInTimeline(
        firstHeading,
        firstParagraph,
        firstButton,
        firstHeadingSplit,
        true
    );

    otherCapsules.forEach((capsule, index) => {
        const {
            heading,
            paragraph,
            button,
            overlay,
            image,
            headingSplit
        } = prepareCapsuleElements(capsule);

        if (image && heading && paragraph && overlay) {
            const fadeInTimeline = createFadeInTimeline(
                heading,
                paragraph,
                button,
                headingSplit
            );

            const tl = gsap.timeline()
                .to(capsule, {
                    y: 0,
                }, "+=20%")
                .to("#progress-bar", {
                    scaleX: 0.33 + ((index + 1) * 0.34)
                }, "<")
                .to(image, {
                    scale: 1,
                }, "<")
                .set(capsule, {
                    onComplete: () => {
                        fadeInTimeline.play()
                    },
                    onReverseComplete: () => {
                        fadeInTimeline.reverse()
                    },
                }, ">-5%");

            otherCapsulesTimeline.push(tl);

            if (index !== otherCapsules.length - 1) {
                fadeOutTimeline.push(createFadeOutTimeline(capsule, overlay));
            }
        }
    });

    gsap.set(".capsule", {willChange: "transform, opacity, scale"});

    const masterTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#capsule-wrapper",
            start: "top 1%",
            end: `${(capsules.length + 4) * 100}% bottom`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            pinSpacing: true,
            refreshPriority: 1,
        }
    })
        .to(SELECTORS.firstCapsuleDiv, {
            scale: 1,
            borderRadius: "40px"
        })
        .to(SELECTORS.firstCapsuleImg, {
            scale: 1,
        }, "<")
        .to(".capsule-marquee-overlay", {
            opacity: 1
        }, "<")
        .set(SELECTORS.firstCapsule, {
            onComplete: () => {
                firstFadeInTimeline.play()
            },
            onReverseComplete: () => {
                firstFadeInTimeline.reverse()
            }
        })
        .to(firstCapsule, {
            scale: .9,
        }, ">.25")
        .to(firstOverlay, {
            opacity: 0.75
        }, "<");

    otherCapsulesTimeline.forEach((tl, index) => {
        masterTimeline.add(tl, "<");
        if (index !== otherCapsulesTimeline.length - 1) {
            masterTimeline.add(fadeOutTimeline[index], ">.25");
        }
    });

    masterTimeline.set(SELECTORS.secondCapsule, {}, ">.2");

    return masterTimeline;
}
