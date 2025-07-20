import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef, useState} from "react";

export default function Marquee({setIsOpen}: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    const timeline = useRef<gsap.core.Timeline>(null)
    const [direction, setDirection] = useState<"left" | "right">("left")

    const {contextSafe} = useGSAP(() => {
        timeline.current = gsap.timeline({repeat: -1})
            .to("#footer-marquee-container", {
                xPercent: -100,
                duration: 12,
                ease: "none",
            })

        let timeout: ReturnType<typeof setTimeout>;

        timeline.current.totalTime(timeline.current.duration() * 1000)

        gsap.to(".footer-marquee-wrapper", {
            ease: "none",
            scrollTrigger: {
                trigger: "footer",
                start: "top bottom",
                end: "top 25%",
                scrub: 1,
                onUpdate: self => {

                    // Scrub marquee when scrolled
                    const velocity = self.getVelocity();
                    const scale = gsap.utils.clamp(-5, 5, velocity / 300);
                    timeline.current?.timeScale(scale || 1);

                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        timeline.current?.timeScale(self.direction);
                    }, 5);

                    if (self.direction === 1) {
                        timeline.current?.timeScale(1)
                        setDirection("left")
                    } else if (self.direction === -1) {
                        timeline.current?.timeScale(-1)
                        setDirection("right")
                    }
                }
            }
        })

        return () => {
            timeline.current?.revert()
        }
    });

    const onHover = contextSafe(() => {
        timeline.current?.pause()
    })

    const onLeave = contextSafe(() => {
        timeline.current?.play()
        if (direction === "left") {
            timeline.current?.timeScale(1)
        } else {
            timeline.current?.timeScale(-1)
        }
    })

    return (
        <button
            className="footer-marquee-wrapper overflow-x-hidden w-screen -mx-8 relative z-0 xl:-z-1 text-white hover:text-lightBrown"
            onClick={() => setIsOpen(true)}
            onMouseEnter={onHover} onMouseLeave={onLeave}>
            <div id="footer-marquee-container" className="flex xl:translate-x-[-100%]">
                <div className="min-w-screen">
                    <div
                        className="heading-1 w-full text-center whitespace-nowrap text-[11.5vw] flex items-start justify-center leading-[1.2]">
                        Book your capsule
                    </div>
                </div>
                <div className="min-w-screen">
                    <div
                        className="heading-1 w-full text-center whitespace-nowrap text-[11.5vw] flex items-start justify-center leading-[1.2]">
                        Book your capsule
                    </div>
                </div>
                <div className="min-w-screen">
                    <div
                        className="heading-1 w-full text-center whitespace-nowrap text-[11.5vw] flex items-start justify-center leading-[1.2]">

                        Book your capsule
                    </div>
                </div>
            </div>
        </button>
    )
}