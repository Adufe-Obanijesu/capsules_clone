import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

export default function CTA() {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to("#cta img", {
            scale: 1,
            ease: "power3",
            scrollTrigger: {
                trigger: "#cta",
                start: "top bottom",
                end: "bottom center",
                scrub: 1,
            }
        })
    }, {scope})

    return (
        <section ref={scope} className="padding h-150 xl:h-screen w-full">

            <div id="cta" className="h-full w-full rounded-[60px] overflow-hidden relative">
                <img src="/images/cap2.webp" alt="capsule"
                     className="object-cover object-center w-full h-full scale-120"/>

                <div className="h-full absolute inset-0 p-7.5 z-1 flex flex-col justify-end">

                    <img src="/logo.svg" alt="logo"
                         className="aspect-[4.28/1] logo-fluid-md md:logo-fluid-lg center-absolute"/>

                    <div className="xl:flex justify-between items-end hidden">
                        <h1 className="font-medium mt-[20px] text-white md-text">
                            Closer to <br/> Nature-Closer<br/> to Yourself
                        </h1>

                        <h6 className="font-semibold text-white text-sm">
                            Spend unforgettable and remarkable time <br/>in the Californian desert with-Capsules
                        </h6>

                    </div>
                </div>

            </div>

        </section>
    )
}