import Pill from "../components/Pill";
import {rules} from "../data/rules";
import {clsx} from "clsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import SplitText from "gsap/SplitText"
import {memo, useRef} from "react";
import {useMediaQuery} from "react-responsive";

function Discover() {
    const scope = useRef<HTMLDivElement>(null)

    const isDesktop = useMediaQuery({minWidth: 1280})

    useGSAP(() => {

        new SplitText("#discover h3", {
            type: "lines", mask: "lines", autoSplit: true, onSplit: (self) => {

                gsap.set(self.lines, {
                    yPercent: -100,
                    lineHeight: 1.1
                })

                return gsap.timeline({
                    scrollTrigger: {
                        trigger: "#discover-sub-heading",
                        start: isDesktop ? "top: 80%" : "top 85%",
                        endTrigger: "#title",
                        end: "bottom bottom",
                        scrub: true,
                    },
                    ease: "none"
                })
                    .from("#discover-sub-heading", {
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
        <section ref={scope} className="relative padding-x-md text-white">
            <div id="discover" className="space-y-12 z-1 relative">
                <h2 id="discover-sub-heading" className="sub-heading">Discover available Capsules®</h2>
                <h3 className="heading-1 xl:xl-text text-[60px]">
                    Choose the one you like best
                </h3>

                <div className="flex flex-col xl:flex-row gap-x-24 gap-y-12 items-center">

                    <p
                        className="heading-4 flex-1 xl:mt-[40px] hyphens-auto text-lightBrown">You can choose one of
                        three premium
                        capsule houses in our offer. Each of our capsules provides the highest quality and meets the
                        standards adjusted to your needs. Choose the one you like.
                    </p>

                    <div className="flex-1 space-y-8">
                        <h4 id="title" className="sub-heading">All Capsules® houses-has built<br/> based on the same
                            rules:
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {
                                rules.map((rule, index) => {
                                    return <Pill key={rule}
                                                 className={clsx({"text-lightBrown border-lightBrown": index % 2 === 0})}>
                                        <div className="heading-5 text-[23px] xl:text-[34px]">{rule}</div>
                                    </Pill>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Discover)