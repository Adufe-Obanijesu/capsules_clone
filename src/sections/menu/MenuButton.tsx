import {useEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import Menu from "./Menu.tsx";
import animation from "./animation.ts";

export default function MenuButton() {

    const [isOpen, setIsOpen] = useState(false)
    const hoverTimeline = useRef<gsap.core.Timeline>(null)
    const moveWrapperTimeline = useRef<gsap.core.Timeline>(null)

    const {contextSafe} = useGSAP(() => animation({hoverTimeline, moveWrapperTimeline}))

    const onHover = contextSafe(() => {
        hoverTimeline.current?.play()
    })

    const onLeave = contextSafe(() => {
        hoverTimeline.current?.reverse()
    })

    useEffect(() => {
        if (isOpen) {
            moveWrapperTimeline.current?.play()
        } else {
            moveWrapperTimeline.current?.reverse()
        }
    }, [isOpen]);

    return (
        <div>
            <div id="menu" className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
                <button type="button"
                        className="bg-white h-11 rounded-[50px] p-[3px] flex justify-center items-center cursor-pointer group"
                        onClick={() => setIsOpen(prev => !prev)} onMouseEnter={onHover} onMouseLeave={onLeave}>
                    <div
                        className="overflow-hidden ml-[15px] text-darkBrown text-xs  mr-[10px] font-medium relative h-4">

                        <div id="text-wrapper">
                            <div
                                className="relative h-4"
                            >
                                <div
                                    className="bg-white w-full menu-text aux_text">Menu
                                </div>
                                <div
                                    className="aux_text top-0 bg-white w-full menu-text relative z-1">Menu
                                </div>
                            </div>
                            <div className="h-4 absolute top-0 translate-y-full">
                                <div
                                    className="relative bg-white w-full close-text">Close
                                </div>
                                <div
                                    className="bg-white w-full close-text aux_text translate-y-full absolute top-0">Close
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="h-9.5 w-9.5 flex items-center justify-center aspect-square bg-darkBrown rounded-full">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="middle-line" d="M3.03711 12.1857H21.0371" stroke="white" strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path id="top-line" d="M3.03711 6.18567H21.0371" stroke="white"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path id="bottom-line" d="M3.03711 18.1857H21.0371" stroke="white"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>

                    </div>
                </button>
            </div>

            <Menu/>
        </div>
    )
}