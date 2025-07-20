import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import SplitText from "gsap/SplitText"
import {useMediaQuery} from "react-responsive";
import {usePageReady} from "../hooks/usePageReady.tsx";
import {useRef, useState} from "react";

export default function Loader({children}: { children: React.ReactNode }) {
    const ready = usePageReady();
    const isMobile = useMediaQuery({maxWidth: 1279});
    const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
    const [scaleTo, setScaleTo] = useState(.3)

    const clip = isMobile ? "inset(calc(50vh - 30px) calc(50vw - 95px) round calc(50vw - 95px))" : "inset(calc(50vh - 30px) calc(50vw - 275px) round calc(50vw - 275px))"

    useGSAP(() => {
        gsap.set(window, {scrollTo: 0})
        if (!ready) {
            intervalRef.current = setInterval(() => {
                gsap.to("#loader .progress-overlay", {
                    transformOrigin: "center left",
                    scale: `+=${scaleTo}`
                });
                setScaleTo(prev => prev * .5)
            }, 2000);
            return
        }

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        const split = SplitText.create("#loader-cta-text", {
            type: "lines",
            mask: "lines"
        })

        gsap.timeline({defaults: {ease: "sine"}})
            .to("#loader .progress-overlay", {
                transformOrigin: "center left",
                scale: 1,
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

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, [ready])

    return (
        <div id="loader" className="">
            <div id="loader-clip-path" className="h-screen w-screen z-200" style={{
                clipPath: clip,
            }}>
                {children}
            </div>
            <div id="loader-content"
                 className="flex absolute top-0 left-0 h-screen w-screen justify-center items-center">
                <div
                    className="relative overflow-hidden bg-middleBrown text-white rounded-full xl:w-140 xl:h-40 w-50 h-20 flex justify-center items-center">
                    <div className="progress-overlay absolute top-0 left-0 h-full w-full scale-x-0 bg-white"/>
                    <div className="mix-blend-difference text-2xl xl:text-[clamp(2rem,4vw,3rem)]">Capsules®</div>
                </div>
            </div>

            <div
                className="absolute top-0 left-0 h-screen w-screen flex justify-center items-end pb-6 pointer-events-none">
                <div id="loader-cta-text" className="text-lightBrown text-xs text-center font-medium leading-[1.1]">
                    Meet Capsules®-modern and cozy <br/>houses, in the California desert.
                </div>
            </div>
        </div>
    )
}