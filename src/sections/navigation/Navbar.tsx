import {MdArrowOutward} from "react-icons/md";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {IconButton} from "../../components/Button.tsx";
import type {IReserveProps} from "../../types/Reserve.ts";

export default function Navbar({setIsOpen}: Omit<IReserveProps, "isOpen">) {

    useGSAP(() => {

        const tl = gsap.timeline({paused: true}).to("#navbar nav > div", {
            y: -80,
        })

        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            onUpdate: self => {
                if (self.direction === 1) {
                    tl.play()
                } else {
                    tl.reverse()
                }
            }
        })
    })

    useGSAP(() => {

        const mm = gsap.matchMedia()
        mm.add({
            isDesktop: "(min-width: 1280px)",
            isMobile: "(max-width: 1279px)",
        }, ctx => {
            const {isDesktop} = ctx.conditions as { isDesktop: boolean; isMobile: boolean }
            const target = isDesktop ? "#navbar img" : "#navbar nav"

            ScrollTrigger.create({
                trigger: ".hero-header ",
                start: "top top",
                end: "bottom top",
                toggleActions: "play reverse play none",
                animation: gsap.to(target, {
                    opacity: 0,
                    immediateRender: false
                })
            })

        })
    })

    return (
        <div id="navbar">
            <nav className="fixed top-8 left-0 w-full px-4 xl:px-8 z-20 pointer-events-none"
            >
                <div className="flex justify-between items-center">

                    <div>
                        <img src="/mini_logo.svg" className="h-6.5 pointer-events-auto" alt="logo"/>
                    </div>
                    <IconButton text="Reserve" Icon={MdArrowOutward} className="pointer-events-auto"
                                onClick={() => setIsOpen(true)}/>

                </div>
            </nav>
        </div>

    )
}