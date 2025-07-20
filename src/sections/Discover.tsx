import Pill from "../components/Pill.tsx";
import {rules} from "../data/rules.ts";
import {clsx} from "clsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import SplitText from "gsap/SplitText"
import {useRef} from "react";
import {useMediaQuery} from "react-responsive";

export default function Discover() {
    const scope = useRef<HTMLDivElement>(null)

    const isDesktop = useMediaQuery({minWidth: 1280})

    useGSAP(() => {

        new SplitText("#discover h1", {
            type: "lines", mask: "lines", autoSplit: true, onSplit: (self) => {

                gsap.set(self.lines, {
                    yPercent: -100,
                    lineHeight: 1.1
                })

                return gsap.timeline({
                    scrollTrigger: {
                        trigger: "#discover h6:nth-child(1)",
                        start: isDesktop ? "top: 80%" : "top 85%",
                        endTrigger: "#title",
                        end: "bottom bottom",
                        scrub: true,
                    },
                    ease: "none"
                })
                    .from("#discover h6:nth-child(1)", {
                        opacity: 0,
                        duration: .2
                    })
                    .to(self.lines, {
                        yPercent: 0
                    }, "<+50%")
            }
        })

    }, {scope, dependencies: [isDesktop]})

    return (
        <section ref={scope} className="relative padding-x-md padding-y-md text-white">
            <div id="discover" className="space-y-12 z-1 relative">
                <h6>Discover available Capsules®</h6>
                <h1 className="xl:xl-text text-[60px]">
                    Choose the one you like best
                </h1>

                <div className="flex flex-col xl:flex-row gap-x-24 gap-y-12 items-center">

                    <h4
                        className="flex-1 xl:mt-[40px] hyphens-auto text-lightBrown">You can choose one of three premium
                        capsule houses in our offer. Each of our capsules provides the highest quality and meets the
                        standards adjusted to your needs. Choose the one you like.
                    </h4>

                    <div className="flex-1 space-y-8">
                        <h6 id="title">All Capsules® houses-has built<br/> based on the same rules:</h6>

                        <div className="flex flex-wrap gap-2">
                            {
                                rules.map((rule, index) => {
                                    return <Pill key={rule}
                                                 className={clsx({"text-lightBrown border-lightBrown": index % 2 === 0})}>
                                        <h5 className="text-[23px] xl:text-[34px]">{rule}</h5></Pill>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}