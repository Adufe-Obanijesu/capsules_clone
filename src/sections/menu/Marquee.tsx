import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Marquee() {

    useGSAP(() => {

        const mm = gsap.matchMedia()
        mm.add({
            isDesktop: "(min-width: 1028px)",
            isMobile: "(max-width: 1027px)",
        }, ctx => {
            const headings: HTMLElement[] = gsap.utils.toArray("#menu-marquee-wrapper h1");
            const {isDesktop} = ctx.conditions as { isDesktop: boolean; isMobile: boolean }

            const xValue = headings[0].clientWidth * -1;

            gsap.effects.infiniteSlide("#menu-marquee-wrapper", {
                duration: isDesktop ? 25 : 15,
                x: () => xValue,
                xPercent: 0
            })
        })

    })

    return (
        <div className="overflow-x-hidden w-[calc(100vw-28px)]">
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