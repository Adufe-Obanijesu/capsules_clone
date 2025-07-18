import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {usePageReady} from "../../hooks/usePageReady.tsx";

export default function DesktopVersion() {

    const scope = useRef<HTMLDivElement>(null)
    const ready = usePageReady();

    useGSAP(() => {
        if (!ready) return

        gsap.to("#hero-background", {
            scale: 1.1,
            scrollTrigger: {
                markers: true,
                trigger: ".hero-header",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        })
    }, {scope, dependencies: [ready]})

    return (
        <div ref={scope} className="padding h-screen w-full">

            <header className="hero-header h-full w-full rounded-[40px] overflow-hidden relative">
                <picture>
                    <source srcSet="/images/cap1.webp" media="(min-width: 640px)"/>
                    <img id="hero-background" src="/images/cap1-mobile.webp" alt="capsule"
                         className="object-cover object-center w-full h-full" fetchPriority="high"
                         loading="eager"/>
                </picture>

                <div className="h-full absolute inset-0 p-7.5 z-1 flex flex-col justify-between">

                    <img src="/logo.svg" alt="logo" loading="eager" fetchPriority="high"
                         className="aspect-[4.28/1] logo-fluid-lg"/>

                    <div className="flex justify-between items-center">
                        <h1 className="font-medium mt-[20px] text-white">
                            Closer to <br/> Nature-Closer<br/> to Yourself
                        </h1>

                        <h6 className="font-semibold text-white mb-[30px]">
                            Spend unforgettable and remarkable time <br/>in the Californian desert with-Capsules
                        </h6>

                    </div>
                </div>

            </header>

        </div>
    )
}