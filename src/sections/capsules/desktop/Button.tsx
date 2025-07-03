import {GoPlus} from "react-icons/go";
import type {ICapsule} from "../../../data/capsules.ts";
import Details from "./Details.tsx";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {cn} from "../../../utils/tailwind.ts";
import {useGSAP} from "@gsap/react";

interface Props {
    capsule: ICapsule,
}

export default function Button({capsule}: Props) {

    const [isOpen, setIsOpen] = useState(false)


    const scope = useRef<HTMLDivElement>(null)
    const tl = useRef(gsap.timeline({paused: true, ease: "none"}))

    useGSAP(() => {
        tl.current
            .set("body", {overflow: "hidden"})
            .set(`#capsule-button-${capsule.id} #details_wrapper`, {
                transformOrigin: "bottom left",
                scale: 0,
            })
            .to(`#capsule-button-${capsule.id} #details_wrapper`, {
                scale: 1
            })
            .to(`#capsule-button-${capsule.id} #terraceCapsuleDetails${capsule.id}`, {
                rotate: 135,
            }, "<")
            .to(`#capsule-button-${capsule.id} .details-overlay${capsule.id}`, {
                opacity: .9,
                pointerEvents: "auto",
                duration: .3,
            }, "<")
            .to(`#capsule-button-${capsule.id} #terraceCapsuleDetails${capsule.id}`, {
                backgroundColor: "white",
            }, "<")
            .to(`#capsule-button-${capsule.id} #details_wrapper button .absolute`, {
                scaleX: 1,
                autoAlpha: 1
            }, ">-5%")
            .to(`#capsule-button-${capsule.id} .invisible`, {
                autoAlpha: 1
            })
    }, {})

    useEffect(() => {
        if (isOpen) {
            tl.current.play()
        } else {
            tl.current.reverse()
        }
    }, [isOpen]);

    return (
        <div ref={scope}>
            <div id={`capsule-button-${capsule.id}`} className="relative flex items-center">
                <button id={`terraceCapsuleDetails${capsule.id}`} aria-label="Terrace Capsule Details"
                        className="group relative z-100 w-9 h-9 hover:opacity-[0.9] rounded-full bg-lightBrown flex justify-center items-center scale-0 invisible cursor-pointer"
                        onClick={() => setIsOpen(prev => !prev)}>
                    <div
                        className={cn("w-full h-full absolute top-0 left-0 bg-white rounded-full scale-0 group-hover:scale-100 origin-center transition-item", {"scale-100": isOpen})}></div>
                    <GoPlus fontSize={24}
                            className={cn("text-darkBrown z-5 transition-item")}/>
                </button>


                <Details capsule={capsule} isOpen={isOpen}/>

                <div
                    className={`details-overlay${capsule.id} fixed bg-tertiary z-60 w-full h-full top-0 left-0 opacity-0 pointer-events-none`}
                    onClick={() => setIsOpen(false)}/>
            </div>
        </div>
    )
}