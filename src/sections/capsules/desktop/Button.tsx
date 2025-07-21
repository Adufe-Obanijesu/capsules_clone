import {GoPlus} from "react-icons/go";
import type {ICapsule} from "../../../data/capsules.ts";
import Details from "./Details.tsx";
import {useContext, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {cn} from "../../../utils/tailwind.ts";
import {useGSAP} from "@gsap/react";
import AnimatedButton from "../../../components/Button.tsx";
import useEscapeKey from "../../../hooks/useEscapeKey.tsx";
import {ReserveCtx} from "../../../App.tsx";

interface Props {
    capsule: ICapsule,
}

export default function Button({capsule}: Props) {
    const {setIsOpenReserve, setSelectedCapsule} = useContext(ReserveCtx)
    const [isOpen, setIsOpen] = useState(false)

    useEscapeKey(() => {
        setIsOpen(false)
    })


    const scope = useRef<HTMLDivElement>(null)
    const tl = useRef(gsap.timeline({paused: true, ease: "none"}))

    useGSAP(() => {
        tl.current
            .set("body", {overflow: "hidden"})
            .set(`#capsule-button-${capsule.id} .details_wrapper`, {
                transformOrigin: "bottom left",
                scale: 0,
            })
            .to(`#capsule-button-${capsule.id} .details_wrapper`, {
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
            .to(`#capsule-button-${capsule.id} .details_wrapper .details-pricing .absolute`, {
                scaleX: 1,
                autoAlpha: 1
            }, ">-5%")
            .to(`#capsule-button-${capsule.id} .invisible`, {
                autoAlpha: 1
            })
    }, {})

    function reserve() {
        setIsOpen(false)
        gsap.delayedCall(tl.current.totalDuration() || 1000, () => {
            setIsOpenReserve(true)
            setSelectedCapsule(capsule)
        })
    }

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
                <AnimatedButton isActive={isOpen} variant="white-overlay" id={`terraceCapsuleDetails${capsule.id}`}
                                className="z-100 invisible scale-0"
                                aria-label={`${capsule.ariaName} details`}
                                onClick={() => setIsOpen(prev => !prev)}>
                    <GoPlus fontSize={24}
                            className={cn("text-darkBrown z-5 transition-item")}/>
                </AnimatedButton>


                <Details capsule={capsule} reserve={reserve}/>

                <div
                    className={`details-overlay${capsule.id} fixed bg-tertiary z-60 w-full h-full top-0 left-0 opacity-0 pointer-events-none`}
                    onClick={() => setIsOpen(false)}/>
            </div>
        </div>
    )
}