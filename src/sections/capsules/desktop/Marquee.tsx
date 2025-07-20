import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function () {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.effects.infiniteSlide("#wrapper", {
            duration: 15,
            xPercent: -100
        });
    }, {scope})

    return (
        <div ref={scope} aria-hidden="true"
             className="absolute top-0 left-0 w-screen h-full -margin-x -z-1 flex items-center">
            <div
                className="capsule-marquee-overlay absolute bg-tertiary w-full h-full top-0 left-0 z-5 opacity-0 pointer-events-none"/>
            <div aria-hidden className="">
                <div className="overflow-x-hidden w-screen">
                    <div id="wrapper" className="flex">

                        <div className="min-w-1/2">

                            <img src="/logo.svg" alt="logo" className="aspect-[4.28/1]"/>
                        </div>

                        <div className="min-w-1/2">
                            <img src="/logo.svg" alt="logo" className="aspect-[4.28/1]"/>
                        </div>
                        <div className="min-w-1/2">
                            <img src="/logo.svg" alt="logo" className="aspect-[4.28/1]"/>
                        </div>
                        <div className="min-w-1/2">
                            <img src="/logo.svg" alt="logo" className="aspect-[4.28/1]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}