import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {usePageReady} from "../../hooks/usePageReady";

export default function DesktopVersion() {

    const scope = useRef<HTMLDivElement>(null)
    const ready = usePageReady();

    useGSAP(() => {
        if (!ready) return

        gsap.to("#hero-background", {
            scale: 1.1,
            scrollTrigger: {
                trigger: ".hero-header",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        })
    }, {scope, dependencies: [ready]})

    return (
        <div ref={scope} className="padding h-screen w-full">

            <div className="hero-header h-full w-full rounded-[40px] overflow-hidden relative">
                <picture>
                    <source srcSet="/images/cap1.webp" media="(min-width: 1240px)"/>
                    <img id="hero-background" src="/images/cap1-mobile.webp" alt="capsule"
                         className="object-cover object-center w-full h-full" fetchPriority="high"
                         loading="eager"/>
                </picture>

                <div className="h-full absolute inset-0 p-7.5 z-1 flex flex-col justify-between">

                    <img src="/logo.svg" alt="logo" loading="eager" fetchPriority="high"
                         className="aspect-[4.28/1] logo-fluid-lg"/>

                    <div className="flex justify-between items-end">
                        <div className="heading-3 font-medium mt-[20px] text-white"
                             aria-label="Closer to Nature-Closer to Yourself">
                            Closer to <br/> Nature-Closer<br/> to Yourself
                        </div>

                        <p className="text-xs font-semibold text-white">
                            Spend unforgettable and remarkable time <br/>in the Californian desert with-Capsules
                        </p>

                    </div>
                </div>

            </div>

        </div>
    )
}