import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import gsap from "gsap";

export default function Marquee() {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.effects.infiniteSlide("#wrapper", {duration: 12})
    }, {scope})

    return (
        <div ref={scope} className="overflow-x-hidden w-screen -margin-x">
            <div id="wrapper" className="flex">
                <div className="min-w-screen">
                    <h1 className="w-screen text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-center justify-center leading-[1.2]">
                        *Why Capsules®?
                    </h1>
                </div>
                <div className="min-w-screen">
                    <h1 className="w-screen text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-center justify-center leading-[1.2]">
                        *Why Capsules®?
                    </h1>
                </div>
            </div>
        </div>
    )
}