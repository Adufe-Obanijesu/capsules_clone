import {cn} from "../utils/tailwind.ts";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

interface Props {
    id: string
    children: React.ReactNode;
    color?: "white" | "lightBrown";
    classes?: "white" | "lightBrown";
}

export default function AnimatedUnderlineText({
                                                  id,
                                                  children,
                                                  color = "white",
                                                  hoverColor = "lightBrown",
                                                  classes
                                              }: Props) {

    const tl = useRef(gsap.timeline({paused: true}))

    const {contextSafe} = useGSAP(() => {
        tl.current
            .fromTo(`#${id} span .absolute`, {xPercent: 0}, {
                xPercent: 100
            })
            .addLabel("reverse")
            .fromTo(`#${id} span .absolute`, {xPercent: -100}, {xPercent: 0, immediateRender: false})
    })

    const onHover = contextSafe(() => {
        tl.current.tweenFromTo(0, "reverse")
    })

    const onLeave = contextSafe(() => {
        tl.current.tweenFromTo("reverse", tl.current.totalDuration())
    })

    return (
        <span id={id} className="cursor-pointer">
            <span
                className={cn("relative inline-flex overflow-hidden group ", `text-${color}`, `hover:text-${hoverColor}`, classes)}
                onMouseEnter={onHover} onMouseLeave={onLeave}>
                {children}
                <div
                    className={cn("absolute bottom-0 h-[5%] w-full left-0", `bg-${color}`, `group-hover:bg-${hoverColor}`,)}/>
            </span>
        </span>
    )
}