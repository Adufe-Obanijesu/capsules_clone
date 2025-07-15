import {MdArrowOutward} from "react-icons/md";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function Navbar() {

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
            <nav className="fixed top-8 left-0 w-full px-4 xl:px-8 z-20"
            >
                <div className="flex justify-between items-center">

                    <div>
                        <img src="/mini_logo.svg" className="h-6.5" alt="logo"/>
                    </div>
                    <button type="button"
                            className="bg-gray-100 h-11 rounded-full p-[3px] flex justify-center items-center cursor-pointer group text-sm">
                        <div
                            className="ml-4  mr-2 text-darkBrown text-[14px] overflow-hidden relative w-full">
                            <div
                                className="w-full group-hover:-translate-y-full transition duration-300 ease-in-out">Reserve
                            </div>
                            <div
                                className="absolute w-full group-hover:-translate-y-full transition duration-300 ease-in-out">Reserve
                            </div>
                        </div>
                        <div
                            className="h-full aspect-square bg-darkBrown rounded-full w-11 flex justify-center items-center text-lightBrown">
                            <MdArrowOutward fontSize={24}/>
                        </div>
                    </button>

                </div>
            </nav>
        </div>

    )
}