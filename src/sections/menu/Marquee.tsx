import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useEffect, useRef} from "react";

export default function Marquee({isOpen}: { isOpen: boolean }) {

    const timeline = useRef<gsap.core.Timeline>(null)

    useGSAP(() => {

        gsap.killTweensOf("#menu-marquee-wrapper")

        const mm = gsap.matchMedia()
        mm.add({
            isDesktop: "(min-width: 1028px)",
            isMobile: "(max-width: 1027px)",
        }, ctx => {
            const headings: HTMLElement[] = gsap.utils.toArray("#menu-marquee-wrapper h1");
            const {isDesktop} = ctx.conditions as { isDesktop: boolean; isMobile: boolean }

            const xValue = headings[0].clientWidth * -1;

            timeline.current = gsap.timeline({paused: true})
                .add(gsap.effects.infiniteSlide("#menu-marquee-wrapper", {
                    duration: isDesktop ? 25 : 15,
                    x: () => xValue,
                    xPercent: 0
                }))

        })

    }, [isOpen])

    useEffect(() => {
        if (timeline.current) {
            if (isOpen) {
                timeline.current.play();
            } else {
                timeline.current.pause();
            }
        }
    }, [isOpen]);


    return (
        <div className="overflow-hidden w-[calc(100vw-28px)]">
            <div id="menu-marquee-wrapper" className="flex text-white">
                <div className="">
                    <h1 className="text-[17vw]">Capsules®</h1>
                </div>
                <div className="">
                    <h1 className="text-[17vw]">Capsules®</h1>
                </div>
                <div className="">
                    <h1 className="text-[17vw]">Capsules®</h1>
                </div>
            </div>
        </div>
    )
}