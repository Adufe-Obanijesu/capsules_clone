import gsap from "gsap";

export function animateButton(id: string) {

    gsap.defaults({duration: .25})

    return gsap.timeline({paused: true})
        .fromTo(`#${id} .overlay`, {scale: 0}, {
            scale: 1,
            ease: "power2.in"
        })
        .fromTo(`#${id} svg`, {stroke: "var(--color-lightBrown)"}, {
            stroke: "var(--color-tertiary)"
        })
}