import {useEffect, useRef, useState} from "react";
import AnimatedButton from "../../components/Button.tsx";

import {FaTimes} from "react-icons/fa";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import type {IReserveProps} from "../../types/Reserve.ts";
import FirstStep from "./steps/FirstStep.tsx";
import SecondStep from "./steps/SecondStep.tsx";
import {useMediaQuery} from "react-responsive";
import {cn} from "../../utils/tailwind.ts";
import {capsules} from "../../data/capsules.ts";

export default function Reserve({isOpen, setIsOpen}: IReserveProps) {
    const scope = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline>(null)
    const tlMobile = useRef<gsap.core.Timeline>(null)
    const [step, setStep] = useState(1)
    const isMobile = useMediaQuery({
        maxWidth: 1279
    })
    const [selectedCapsule, setSelectedCapsule] = useState(capsules[0])

    const duration = .5

    const {contextSafe} = useGSAP(() => {

        const mm = gsap.matchMedia()

        mm.add("(min-width: 1280px)", () => {
            tl.current = gsap.timeline({paused: true, defaults: {ease: "sine"}})
                .to("#reserve-overlay", {
                    opacity: .95,
                    pointerEvents: "auto",
                    duration
                })
                .to("#reserve-wrapper", {
                    transformOrigin: "center right",
                    scaleX: 1,
                    duration
                }, "<")
                .to("#reserve-wrapper #close-btn", {
                    opacity: 1,
                    duration
                }, "<")
                .addLabel("fade_in")
                .to("#reserve-wrapper #tray-bg", {
                    scale: 1,
                    duration
                }, "-=10%")
                .to("#reserve-wrapper .content", {
                    autoAlpha: 1,
                    duration
                }, "-=10%")
        })


    }, {scope})

    useGSAP(() => {
        if (isMobile) {
            tlMobile.current = gsap.timeline({paused: true})
                .to("#reserve-wrapper", {
                    opacity: 1,
                    pointerEvents: "auto"
                })
                .to("#reserve-overlay", {
                    opacity: 1,
                    pointerEvents: "auto"
                }, "<")
        }
    }, {scope})

    useEffect(() => {
        if (isMobile && tlMobile.current) {
            if (isOpen) tlMobile.current.play()
            else {
                tlMobile.current.reverse()
                if (step === 2) {
                    gsap.delayedCall(1, () => {
                        gsap.set("#reserve-wrapper #first-step", {
                            display: "flex"
                        })
                        gsap.set("#reserve-wrapper #second-step", {
                            display: "none"
                        })

                    })
                    setStep(1)
                }
            }
            return
        }
        if (!tl.current) return
        if (isOpen) tl.current.play()
        else {
            const mm = gsap.matchMedia()

            mm.add("(min-width: 1280px)", () => {
                if (!tl.current) return

                const reverseTl = tl.current.reverse(step === 2 ? tl.current.totalDuration() : undefined)

                if (step === 2) {
                    gsap.delayedCall(reverseTl.totalDuration(), () => {
                        gsap.set("#reserve-wrapper #first-step", {
                            display: "flex"
                        })
                        gsap.set("#reserve-wrapper #second-step", {
                            display: "none"
                        })

                    })
                    setStep(1)
                }
            })

        }
    }, [isOpen, isMobile]);

    const next = contextSafe(() => {
        setStep(2)
        const mm = gsap.matchMedia()

        const timeline = gsap.timeline()
        mm.add("(min-width: 1280px)", () => {
            if (!tl.current) return
            timeline.add(tl.current.tweenFromTo(tl.current.totalDuration(), "fade_in"))
        })

        timeline.set("#reserve-wrapper #first-step", {
            display: "none"
        })
            .set("#reserve-wrapper #second-step", {
                display: "flex"
            })
            .to("#reserve-wrapper .content", {
                autoAlpha: 1,
                duration
            })
    })

    return (
        <div ref={scope} className="padding fixed top-0 left-0 z-100">

            <div id="reserve-overlay"
                 className="opacity-0 pointer-events-none bg-tertiary fixed top-0 left-0 h-screen w-screen z-30"
                 onClick={() => setIsOpen(false)}/>

            <div id="reserve-wrapper"
                 className={cn("pointer-events-none xl:pointer-events-auto fixed z-50 bottom-1/100 top-1/100 rounded-[40px] right-2.5 xl:w-95 flex flex-col pt-6 pb-2 bg-darkBrown xl:scale-x-0", {"opacity-0 left-2.5": isMobile})}>
                <div id="close-btn" className="fixed xl:opacity-0 px-6">
                    <AnimatedButton variant="dark" onClick={() => setIsOpen(false)}>
                        <FaTimes/>
                    </AnimatedButton>
                </div>

                <FirstStep next={next} selectedCapsule={selectedCapsule} setSelectedCapsule={setSelectedCapsule}/>
                <SecondStep selectedCapsule={selectedCapsule}/>
            </div>
        </div>
    )
}