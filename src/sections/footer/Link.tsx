import type {IFooterLink} from "../../data/footer.ts";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

export default function Link({link}: { link: IFooterLink }) {

    const tl = useRef(gsap.timeline({paused: true}))

    const {contextSafe} = useGSAP(() => {
        tl.current.to(`#link-${link.id} div:first-child`, {
            yPercent: -110
        })
            .to(`#link-${link.id} div:last-child`, {
                y: 0,
            }, "<")
    })

    const onHover = contextSafe(() => {
        tl.current.play()
    })

    const onLeave = contextSafe(() => {
        tl.current.reverse()
    })

    return (
        <button id={`link-${link.id}`} className="relative xl:text-end text-start overflow-hidden"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}>
            <div
                className="xl:sm-text md-text text-white leading-[1]">{link.name}</div>
            <div aria-hidden="true"
                 className="xl:sm-text md-text absolute top-0 xl:right-0 left-0 text-lightBrown translate-y-[110%] leading-[1]">{link.name}</div>
        </button>
    )
}