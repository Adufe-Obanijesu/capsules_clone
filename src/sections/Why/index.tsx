import {useMediaQuery} from "react-responsive";
import DesktopVersion from "./desktop/DesktopVersion.tsx";
import MobileVersion from "./mobile/MobileVersion.tsx";
import Marquee from "./Marquee.tsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Why() {
    const isDesktop = useMediaQuery({minWidth: 1280})
    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()
        const timeline = gsap.timeline({repeat: -1})
            .to("#why-marquee-container", {
                xPercent: -100,
                duration: 12,
                ease: "none",
            })

        mm.add("(min-width: 1280px)", () => {
            let timeout: ReturnType<typeof setTimeout>;

            timeline.totalTime(timeline.duration() * 1000)

            let direction: "up" | "down" = "down"

            gsap.to(".why-marquee-wrapper", {
                y: "200px",
                ease: "none",
                scrollTrigger: {
                    trigger: ".why-desktop",
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

                        // Rotate * when scrolled
                        gsap.set(".why-marquee-wrapper svg", {
                            transformOrigin: "center center",
                            rotation: self.progress * 90
                        })

                        if (self.direction === 1 && direction !== "down") {
                            timeline.timeScale(1)
                            direction = "down"
                        } else if (self.direction === -1 && direction !== "up") {
                            timeline.timeScale(-1)
                            direction = "up"
                        }
                    }
                }
            })
        })

        return () => {
            timeline.revert()
        }
    }, {scope, dependencies: [isDesktop]});

    return (
        <section ref={scope}>
            <div className="space-y-8 text-white">

                <Marquee/>

                {isDesktop ? <DesktopVersion/> : <MobileVersion/>}
            </div>
        </section>
    )
}