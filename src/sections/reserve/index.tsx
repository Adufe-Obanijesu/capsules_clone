import {useEffect, useRef, useState} from "react";
import {MdOutlineArrowForward} from "react-icons/md";
import AnimatedButton, {IconButton} from "../../components/Button.tsx";
import {capsules} from "../../data/capsules.ts";
import Capsule from "./Capsule.tsx";
import {FaTimes} from "react-icons/fa";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import type {IReserveProps} from "../../types/Reserve.ts";

export default function Reserve({isOpen, setIsOpen}: IReserveProps) {
    const scope = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline>(null)

    const [selectedCapsule, setSelectedCapsule] = useState(capsules[0])

    useGSAP(() => {
        const duration = .5

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
            .to("#reserve-wrapper #tray-bg", {
                scale: 1,
                duration
            }, "-=10%")
            .to("#reserve-wrapper .content", {
                autoAlpha: 1,
                duration
            }, "-=10%")
    }, {scope})

    useEffect(() => {
        if (!tl.current) return
        if (isOpen) tl.current.play()
        else tl.current.reverse()
    }, [isOpen]);

    return (
        <div ref={scope} className="padding relative">

            <div id="reserve-overlay"
                 className="opacity-0 pointer-events-none bg-tertiary fixed top-0 left-0 h-screen w-screen z-30"
                 onClick={() => setIsOpen(false)}/>

            <div id="reserve-wrapper"
                 className="will-change-transform fixed z-50 bottom-1/100 top-1/100 rounded-[40px] right-2.5 w-95 flex flex-col p-6 bg-darkBrown scale-x-0">
                <div id="close-btn" className="fixed opacity-0">
                    <AnimatedButton variant="dark" onClick={() => setIsOpen(false)}>
                        <FaTimes/>
                    </AnimatedButton>
                </div>
                <div
                    className="mt-10 rounded-4xl overflow-y-scroll scrollbar-hide relative h-full px-2 overflow-auto overscroll-contain flex flex-col gap-1">
                    <div className="content invisible space-y-4">

                        <div className="mt-[20px]">
                            <div>

                                <h5 className="font-semibold leading-[26px] tracking-[-0.2px] text-white">Make it
                                    memorable
                                    and reserve one of
                                    our—Capsules®</h5>
                            </div>
                        </div>
                        <p
                            className="text-xs font-semibold text-lightBrown mt-5">Ready
                            to start your journey to a desert adventure? Secure your capsule by filling out the
                            reservation form.We hope to see you soon!
                        </p>

                        <p className="text-white font-semibold text-xs">(1) Which capsule would you like to reserve?</p>

                        <div className="grid xl:grid-cols-3 gap-1 5">
                            {
                                capsules.map(capsule => <Capsule key={capsule.id} capsule={capsule}
                                                                 isSelected={selectedCapsule.id === capsule.id}
                                                                 setSelectedCapsule={setSelectedCapsule}/>)
                            }
                        </div>

                        <p className="text-white font-semibold text-xs">(2) How long you would like to stay and
                            when?</p>

                    </div>
                    <div className="flex-1 flex items-end">
                        <div
                            className="relative overflow-hidden w-full h-16 rounded-full pl-6 pr-2.5">
                            <div
                                id="tray-bg"
                                className="scale-x-0 opacity- origin-left absolute top-0 left-0 bg-black/50 rounded-full w-full h-full -z-1"></div>
                            <div className="content invisible flex justify-between items-center h-full">
                                <div
                                    className="font-semibold">
                                    <p className=" text-lightBrown text-xs">Stay</p>
                                    <p className=" text-white text-xs">15.07 - 20.07</p>
                                </div>
                                <div
                                    className="font-semibold">
                                    <p className=" text-lightBrown text-xs">Stay</p>
                                    <p className=" text-white text-xs">15.07 - 20.07</p>
                                </div>

                                <IconButton text="Next" Icon={MdOutlineArrowForward}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}