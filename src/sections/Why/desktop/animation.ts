import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const fadeOut = {
    opacity: .1,
    scale: .9,
}

const moveLeft = {
    xPercent: -100,
    x: -16
}

export function animation() {
    const cardContainers: HTMLElement[] = gsap.utils.toArray(".card-container")
    const imageContainers: HTMLElement[] = gsap.utils.toArray(".why-desktop .right-side .image-container")
    const images: HTMLElement[] = gsap.utils.toArray(".why-desktop .right-side .image-container img")
    const firstImage = ".why-desktop .image-container:first-child img:first-child"
    const lastCardNumber = ".why-desktop .right-side .card-number:last-child"

    const headingsToSplit: HTMLElement[] = gsap.utils.toArray(".why-desktop .card-container:nth-child(2) h3")
    const paragraphsToSplit: HTMLElement[] = gsap.utils.toArray(".why-desktop .card-container:nth-child(2) p")

    if (cardContainers.length === 0 || imageContainers.length === 0 || images.length === 0 || headingsToSplit.length !== 2 || paragraphsToSplit.length !== 2) return;

    const firstHeadingSplit = new SplitText(headingsToSplit[0], {
        type: "lines",
        mask: "lines"
    })

    const secondHeadingSplit = new SplitText(headingsToSplit[1], {
        type: "lines",
        mask: "lines"
    })

    const firstParagraphSplit = new SplitText(paragraphsToSplit[0], {
        type: "lines",
        mask: "lines"
    })

    const secondParagraphSplit = new SplitText(paragraphsToSplit[1], {
        type: "lines",
        mask: "lines"
    })

    gsap.set([secondHeadingSplit.lines, secondParagraphSplit.lines], {
        yPercent: -100
    })

    gsap.set(firstImage, {
        clipPath: "inset(0% 0 0 0)"
    })

    const st = {
        markers: true,
        trigger: ".why-desktop",
        start: "top 1%",
        end: "bottom 1%",
        pin: true,
        refreshPriority: 1,
        onUpdate: (self: ScrollTrigger) => {

            if (self.direction === -1) {
                timeline.reverse()
            } else {
                timeline.play()
            }
        }
    }

    const timeline = gsap.timeline({
        scrollTrigger: st,
        defaults: {duration: 1, ease: "power2.inOut"}
    })
        .addPause()
        .to(cardContainers[0], fadeOut
        )
        .to(".image-with-clip", moveLeft, "<")
        .to(firstImage, {
            clipPath: "inset(100% 0 0 0)"
        }, "<")
        .to(firstImage, {
            scale: 1.4
        }, "<")
        .to(images[1], {
            scale: 1
        }, "<")
        .to(cardContainers[1], {
            y: 0,
        }, "<")
        .addPause()
        .set(cardContainers[0], {visibility: "hidden"})
        .set(cardContainers[1], {zIndex: 10})
        .to(".image-with-clip", fadeOut, "<")
        .to(cardContainers[1], moveLeft, "<")
        .to(imageContainers[1], {
            y: 0
        }, "<")
        .to(images[2], {
            scale: 1,
            duration: 0.5
        }, "<")
        .to([firstHeadingSplit.lines, firstParagraphSplit.lines], {
            yPercent: -110,
            duration: 0.25
        }, "<")
        .to(lastCardNumber, {
            text: "03",
            keyframes: {
                opacity: [1, 0, 0, 1]
            }
        }, "<")
        .set([headingsToSplit[1], paragraphsToSplit[1]], {zIndex: 2}, "<+0.25")
        .to([secondHeadingSplit.lines, secondParagraphSplit.lines], {
            yPercent: 0,
            duration: 0.25,
        }, "<")
        .set(".image-with-clip", {visibility: "hidden"})
        .addPause()
}