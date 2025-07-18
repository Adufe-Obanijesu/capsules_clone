import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Marquee() {

    useGSAP(() => {
        const timeline = gsap.timeline({repeat: -1})
            .to("#footer-marquee-container", {
                xPercent: -100,
                duration: 12,
                ease: "none",
            })

        let timeout: ReturnType<typeof setTimeout>;

        timeline.totalTime(timeline.duration() * 1000)

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
                    timeline.timeScale(scale || 1);

                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        timeline.timeScale(self.direction);
                    }, 5);

                    if (self.direction === 1) {
                        timeline.timeScale(1)
                    } else if (self.direction === -1) {
                        timeline.timeScale(-1)
                    }
                }
            }
        })

        return () => {
            timeline.revert()
        }
    });

    return (
        <div className="footer-marquee-wrapper overflow-x-hidden w-screen -mx-8 relative z-0 xl:-z-1 text-white">
            <div id="footer-marquee-container" className="flex xl:translate-x-[-100%]">
                <div className="min-w-screen">
                    <h1 className="w-full text-center whitespace-nowrap text-[11.5vw] flex items-start justify-center leading-[1.2]">
                        Book your capsule
                    </h1>
                </div>
                <div className="min-w-screen">
                    <h1 className="w-full text-center whitespace-nowrap text-[11.5vw] flex items-start justify-center leading-[1.2]">
                        Book your capsule
                    </h1>
                </div>
                <div className="min-w-screen">
                    <h1 className="w-full text-center whitespace-nowrap text-[11.5vw] flex items-start justify-center leading-[1.2]">

                        Book your capsule
                    </h1>
                </div>
            </div>
        </div>
    )
}