import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import SplitText from "gsap/SplitText"
import {useMediaQuery} from "react-responsive";

export default function Loader({children}: { children: React.ReactNode }) {
    const isMobile = useMediaQuery({maxWidth: 1279});

    const clip = isMobile ? "inset(calc(50vh - 40px) calc(50vw - 100px) round calc(50vw - 100px))" : "inset(calc(50vh - 40px) calc(50vw - 280px) round calc(50vw - 280px))"

    useGSAP(() => {

        const split = SplitText.create("#loader p", {
            type: "lines",
            mask: "lines"
        })

        gsap.timeline({defaults: {ease: "sine"}})
            .to("#loader .bg-white", {
                transformOrigin: "center left",
                scale: 1,
                duration: 2
            })
            .to("#loader-clip-path", {
                transformOrigin: "center center",
                clipPath: "inset(0px 0px round 0px)",
                ease: "none"
            })
            .to(split.lines, {
                yPercent: -110,
                duration: .3
            }, "<")
            .to("#loader-content", {
                opacity: 0,
                pointerEvents: "none",
                duration: .25
            }, "<")
            .set("body", {overflow: "auto"})
            .to("#menu, #navbar", {
                opacity: 1
            })
    })

    return (
        <div id="loader" className="">
            <div id="loader-clip-path" className="h-screen w-screen z-200" style={{
                clipPath: clip,
                willChange: "clip-path"
            }}>
                {children}
            </div>
            <div id="loader-content"
                 className="flex absolute top-0 left-0 h-screen w-screen justify-center items-center">
                <div
                    className="relative overflow-hidden bg-middleBrown text-white rounded-full xl:w-140 xl:h-40 w-50 h-20 flex justify-center items-center">
                    <div className="absolute top-0 left-0 h-full w-full scale-x-0 bg-white"/>
                    <h2 className="mix-blend-difference">Capsules®</h2>
                </div>
            </div>

            <div
                className="absolute top-0 left-0 h-screen w-screen flex justify-center items-end pb-6 pointer-events-none">
                <p className="text-lightBrown text-xs text-center font-medium leading-[1.1]">
                    Meet Capsules®-modern and cozy <br/>houses, in the California desert.
                </p>
            </div>
        </div>
    )
}