import {cn} from "../utils/tailwind.ts";
import {type HTMLAttributes, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode;
    color?: "white" | "lightBrown";
    hoverColor?: "white" | "lightBrown";
    classes?: string;
}

export default function AnimatedUnderlineText({
                                                  id,
                                                  children,
                                                  color = "white",
                                                  hoverColor = "lightBrown",
                                                  classes,
                                                  ...props
                                              }: Props) {

    const tl = useRef(gsap.timeline({paused: true}))

    const {contextSafe} = useGSAP(() => {
        tl.current
            .fromTo(`#${id} .absolute`, {xPercent: 0}, {
                xPercent: 100
            })
            .addLabel("reverse")
            .fromTo(`#${id} .absolute`, {xPercent: -100}, {xPercent: 0, immediateRender: false})
    })

    const onHover = contextSafe(() => {
        tl.current.tweenFromTo(0, "reverse")
    })

    const onLeave = contextSafe(() => {
        tl.current.tweenFromTo("reverse", tl.current.totalDuration())
    })

    return (
        <button id={id} className="cursor-pointer inline" {...props}>
            <div
                className={cn("relative inline-flex overflow-hidden group ", `text-${color}`, `hover:text-${hoverColor}`, classes)}
                onMouseEnter={onHover} onMouseLeave={onLeave}>
                {children}
                <div
                    className={cn("absolute bottom-0 h-[5%] w-full left-0", `bg-${color}`, `group-hover:bg-${hoverColor}`)}/>
            </div>
        </button>
    )
}