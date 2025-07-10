import {testimonials} from "../../data/testimonials.ts";
import {IoArrowBackSharp, IoArrowForwardSharp} from "react-icons/io5";
import type {IconType} from "react-icons";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText"
import {animateButton} from "./animations.ts";
import {useRef, useState, useEffect} from "react";

export default function Testimonials() {

    const isMounted = useRef(false)
    const [current, setCurrent] = useState(0)
    const [index, setIndex] = useState(0)
    const testimonialsRef = useRef<HTMLElement[]>([])
    const splitsRef = useRef<SplitText[]>([])

    useGSAP(() => {
        gsap.defaults({duration: .3, ease: "power1.in"})

        const testimonials: HTMLElement[] = gsap.utils.toArray("#testimonials .testimonial") as HTMLElement[]
        testimonialsRef.current = testimonials

        if (testimonials.length === 0) return

        const splits: SplitText[] = []

        testimonials.forEach((testimonial, index) => {
            const split = new SplitText(testimonial.querySelector("h1"), {type: "lines", mask: "lines"})
            splits.push(split)

            if (index !== 0) {
                gsap.set(split.lines, {
                    yPercent: -120
                })

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
        })

        splitsRef.current = splits
        isMounted.current = true
    })

    useEffect(() => {
        if (!isMounted.current || splitsRef.current.length === 0) return

        const currentHeading = splitsRef.current[current]
        const currentImg = testimonialsRef.current[current].querySelector(".avatar")
        const currentAbout = testimonialsRef.current[current].querySelector("p")
        const nextHeading = splitsRef.current[index]
        const nextImg = testimonialsRef.current[index].querySelector(".avatar")
        const nextAbout = testimonialsRef.current[index].querySelector("p")

        gsap.timeline()
            .to(currentHeading.lines, {
                yPercent: -120
            })
            .to(currentImg, {
                scale: 0
            }, "<")
            .to(currentAbout, {
                x: 20,
                opacity: 0
            }, "<")
            .set(testimonialsRef.current[current], {
                visibility: "hidden",
                zIndex: -10,
            })
            .set(testimonialsRef.current[index], {
                visibility: "visible",
                zIndex: 1,
            })
            .to(nextHeading.lines, {
                yPercent: 0
            })
            .to(nextImg, {
                scale: 1
            }, "<")
            .to(nextAbout, {
                x: 0,
                opacity: 1
            }, "<")
            .to("#testimonials .progress > div:nth-child(2)", {
                scaleX: (index + 1) * .34
            }, "<")

        setCurrent(index)
    }, [index])

    return (
        <section id="testimonials" className="text-white padding-x xl:px-8">
            <h6 className="text-xs">Discover available Capsules®</h6>
            <div className="my-10">
                <div className="relative">
                    {
                        testimonials.map(testimonial => (
                            <div key={testimonial.id} className="absolute top-0 left-0 testimonial w-full">
                                <div className="space-y-10">

                                    <h1 className="xl:lg-text md-text leading-[1.1] w-full md:w-[75%]">
                                        {testimonial.desc}
                                    </h1>
                                    <div className="flex items-center gap-4">
                                        <div className="avatar w-14 h-14 rounded-full relative overflow-hidden"><img
                                            alt={testimonial.name}
                                            className="object-cover object-center absolute w-full h-full "
                                            src={testimonial.img}/>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-normal text-sm text-lightBrown">{testimonial.name}<br/>({testimonial.location})
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <div className="mt-14 flex items-center justify-between gap-8">
                                    <div className="flex gap-1">
                                        <Button key="reviewsLeft" setIndex={setIndex} id="reviewsLeft"
                                                Icon={IoArrowBackSharp}/>
                                        <Button key="reviewsRight" setIndex={setIndex} id="reviewsRight"
                                                Icon={IoArrowForwardSharp}/>
                                    </div>

                                    <div className="w-80 h-[1.5px] relative progress">
                                        <div className="absolute w-full bg-white h-full opacity-[0.2]"/>
                                        <div className="absolute w-full scale-x-33 bg-white h-full origin-left"/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

interface ButtonProps {
    Icon: IconType,
    id: string,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}

function Button({Icon, id, setIndex}: ButtonProps) {
    const timeline = useRef<gsap.core.Timeline>(null)
    const {contextSafe} = useGSAP(() => {
        timeline.current = animateButton(id)
    })

    const onHover = contextSafe(() => {
        if (timeline.current) {
            timeline.current.play()
        }
    })

    const onLeave = contextSafe(() => {
        if (timeline.current) {
            timeline.current.reverse(0)
        }
    })

    return (
        <button id={id} aria-label="Reviews Left"
                className="w-9.5 h-9.5 rounded-full relative border-[1px] border-lightBrown flex justify-center items-center overflow-hidden cursor-pointer"
                onMouseEnter={onHover} onMouseLeave={onLeave}
                onClick={() => setIndex(prev => (id === "reviewsLeft" ? (prev - 1 + testimonials.length) % testimonials.length : (prev + 1) % testimonials.length))}>
            <div
                className="overlay absolute h-full w-full scale-[0] rounded-full will-change-transform bg-lightBrown "></div>
            <Icon fontSize={24} className="text-lightBrown z-1"/>
        </button>
    )
}
