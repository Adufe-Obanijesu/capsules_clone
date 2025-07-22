import gsap from "gsap";
import SplitText from "gsap/SplitText";

interface IAnimation {
    hoverTimeline: React.RefObject<gsap.core.Timeline | null>,
    moveWrapperTimeline: React.RefObject<gsap.core.Timeline | null>,
}

export function animateSVG() {
    return gsap.timeline()
        .to("#text-wrapper", {y: 0, yPercent: -100})
        .set("#menu .close-text:first-child", {zIndex: 1})
        .set("#menu .menu-text:nth-child(2)", {zIndex: 0}, "<")
        .to("#top-line", {
            y: 6,
            rotate: 45,
            transformOrigin: "center",
        }, 0)
        .to("#menu #bottom-line", {
            y: -6,
            rotate: -45,
            transformOrigin: "center",
        }, 0)
        .to("#menu #middle-line", {
            opacity: 0,
        }, 0)
}

export default function animation({
                                      hoverTimeline,
                                      moveWrapperTimeline
                                  }: IAnimation) {

    const listItems: HTMLElement[] = gsap.utils.toArray("#menu-container li")
    const splits: SplitText[] = []

    if (listItems.length > 0) {
        listItems.forEach(item => {
            const split = new SplitText(item, {type: "lines", mask: "lines", aria: "none"})
            gsap.set(split.lines, {yPercent: -115})
            splits.push(split)
        })
    }

    const openMenuTl = gsap.timeline({defaults: {ease: "sine"}})
        .set("#menu-section", {pointerEvents: "auto"}, 0)
        .to("#menu-image", {
            autoAlpha: 1,
            x: 0
        })
        .to("#menu-image img", {
            scale: 1
        }, 0)
        .to("#menu-container .social", {
            autoAlpha: 1,
            scale: 1,
            transformOrigin: "center",
            stagger: .05
        }, 0)
        .to("#menu-container h6", {
            autoAlpha: 1,
            x: 0
        }, 0)
        .to([...splits.map(split => split.lines)], {
            yPercent: 0,
            stagger: .05,
        }, 0)

    moveWrapperTimeline.current = gsap.timeline({paused: true, defaults: {ease: "sine"}})
        .add(animateSVG())
        .set("body", {overflow: "hidden"}, 0)
        .to("#menu-overlay", {
            opacity: 1
        }, 0)
        .to("#menu-container", {
            scale: 1,
            borderRadius: 40,
            transformOrigin: "center 95%",
            duration: .5
        }, 0)

    moveWrapperTimeline.current.add(openMenuTl)


    gsap.set("#menu #text-wrapper", {autoAlpha: 1})

    hoverTimeline.current = gsap.timeline({paused: true, defaults: {ease: "sine"}})
        .to("#menu .menu-text, #menu .close-text", {
            yPercent: -100
        })
}