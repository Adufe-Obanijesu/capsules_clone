import {useEffect, useRef, useState} from "react";
import SplitText from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import type {IAnimateInOut} from "../../types/Testimonials.ts";

export default function useAnimation() {
    const isMounted = useRef(false)
    const [current, setCurrent] = useState(0)
    const [index, setIndex] = useState(0)
    const [splits, setSplits] = useState<SplitText[]>([])
    const testimonialsRef = useRef<HTMLElement[]>([])

    useGSAP(() => {
        isMounted.current = false

        const testimonials: HTMLElement[] = gsap.utils.toArray("#testimonials .testimonial") as HTMLElement[]
        testimonialsRef.current = testimonials

        if (testimonials.length === 0) return

        const splits: SplitText[] = []

        testimonials.forEach((testimonial, i) => {
            const split = new SplitText(testimonial.querySelector("h1"), {
                type: "lines", mask: "lines", autoSplit: true, onSplit: (self) => {

                    if (i !== 0) {
                        gsap.set(self.lines, {yPercent: -120})

                        gsap.set(testimonial, {
                            zIndex: -10,
                        })
                        gsap.set(testimonial.querySelector(".avatar"), {
                            scale: 0
                        })
                        gsap.set(testimonial.querySelector("p"), {
                            x: 20,
                            opacity: 0
                        })
                    }

                    if (i === testimonials.length - 1) {
                        setCurrent(0)
                        setIndex(0)
                    }
                }
            })
            splits.push(split)
        })

        setSplits(splits)
        isMounted.current = true
    })

    // Animate out when scrolling away
    useGSAP(() => {
        gsap.to("#testimonials", {
            opacity: 0,
            duration: .3,
            ease: "power1.in",
            scrollTrigger: {
                trigger: "#testimonials",
                start: "bottom+=1% bottom",
                end: "bottom 80%",
                scrub: 1,
            }
        })
    })

    function animateInOut({mode, heading, image, about, testimonial}: IAnimateInOut) {
        const tl = gsap.timeline({defaults: {duration: .3, ease: "power1.in"}})

        if (mode === "in") {
            tl.set(testimonial, {
                visibility: "visible",
                zIndex: 1,
            })
        }

        tl.to(heading, {
            yPercent: mode === "in" ? 0 : -120
        })
            .to(image, {
                scale: mode === "in" ? 1 : 0
            }, "<")
            .to(about, {
                x: mode === "in" ? 0 : 20,
                opacity: mode === "in" ? 1 : 0
            }, "<")

        if (mode === "out") {
            tl.set(testimonial, {
                visibility: "hidden",
                zIndex: -10,
            })
        }

        return tl
    }

    useEffect(() => {
        if (!isMounted.current || splits.length === 0) return

        const currentHeading = splits[current]
        const currentImg = testimonialsRef.current[current].querySelector(".avatar")
        const currentAbout = testimonialsRef.current[current].querySelector("p")
        const nextHeading = splits[index]
        const nextImg = testimonialsRef.current[index].querySelector(".avatar")
        const nextAbout = testimonialsRef.current[index].querySelector("p")

        gsap.timeline({defaults: {duration: .3, ease: "power1.in"}})
            .add(animateInOut({
                mode: "out",
                heading: currentHeading.lines,
                image: currentImg,
                about: currentAbout,
                testimonial: testimonialsRef.current[current]
            }))
            .add(animateInOut({
                mode: "in",
                heading: nextHeading.lines,
                image: nextImg,
                about: nextAbout,
                testimonial: testimonialsRef.current[index]
            }))
            .to("#testimonials .progress > div:nth-child(2)", {
                scaleX: (index + 1) * .34
            }, "<")

        setCurrent(index)
    }, [index, splits])

    return {
        actions: {
            setIndex
        }
    }
}