import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

export default function DesktopVersion() {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to("#background", {
            scale: 1.1,
            scrollTrigger: {
                trigger: "#background",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        })
    }, {scope})

    return (
        <div ref={scope} className="p-2.5 h-screen w-full">

        <header className="h-full w-full rounded-[60px] overflow-hidden relative">
            <img id="background" src="/images/cap1.webp" alt="capsule" className="object-cover object-center w-full h-full" />

            <div className="h-full absolute inset-0 p-7.5 z-1 flex flex-col justify-between">

                    <img src="/logo.svg" alt="logo" className="aspect-[4.28/1] logo-fluid-lg" />

                <div className="flex justify-between items-center">
                    <h1 className="font-medium mt-[20px] text-white">
                        Closer to <br /> Nature-Closer<br /> to Yourself
                    </h1>

                    <h6 className="font-semibold text-white mb-[30px]">
                        Spend unforgettable and remarkable time <br />in the Californian desert with-Capsules
                    </h6>

                </div>
            </div>

        </header>

        </div>
    )
}