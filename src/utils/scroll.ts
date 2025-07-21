import gsap from "gsap";

export function scrollTo(id: string | number, offset: number = 0) {
    gsap.set(window, {
        scrollTo: {
            y: id,
            offsetY: offset,
        }
    })
}