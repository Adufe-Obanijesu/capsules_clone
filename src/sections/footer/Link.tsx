import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {scrollTo} from "../../utils/scroll.ts";
import type {IMenuLink} from "../../data/menu.ts";

export default function Link({link}: { link: IMenuLink }) {

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

    const handleLink = (id: string | number, offset = 0) => {
        gsap.timeline()
            .to("#footer-link-overlay", {
                opacity: 1,
                onComplete: () => {
                    scrollTo(id, offset);
                }
            })
            .to("#footer-link-overlay", {
                opacity: 0
            }, "+=.25")
    }

    return (
        <a href="#" id={`link-${link.id}`} className="relative xl:text-end text-start overflow-hidden"
           onMouseEnter={onHover}
           onMouseLeave={onLeave}
           onClick={e => {
               e.preventDefault();
               handleLink(link.href, link.offset)
           }}
        >
            <div
                className="xl:sm-text md-text text-white leading-[1]">{link.name}</div>
            <div aria-hidden="true"
                 className="xl:sm-text md-text absolute top-0 xl:right-0 left-0 text-lightBrown translate-y-[110%] leading-[1]">{link.name}</div>
        </a>
    )
}