import {useRef} from "react";
import {adventures, type IAdventure} from "../../data/adventure.tsx";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import Carousel from "./Carousel";

export default function Adventure() {

    const scope = useRef<HTMLDivElement>(null)

    const isDesktop = useMediaQuery({minWidth: 1280})

    useGSAP(() => {

        new SplitText("#adventure h3", {
            type: "lines", mask: "lines", autoSplit: true, onSplit: (self) => {

                gsap.set(self.lines, {
                    yPercent: -100,
                    lineHeight: 1.1
                })

                return gsap.timeline({
                    scrollTrigger: {
                        trigger: "#adventure h2:nth-child(1)",
                        start: isDesktop ? "top: 80%" : "top 85%",
                        end: "top 30%",
                        scrub: true,
                    },
                    ease: "none"
                })
                    .from("#adventure h2:nth-child(1)", {
                        opacity: 0,
                        duration: .2
                    })
                    .to(self.lines, {
                        yPercent: 0
                    }, "<+50%")
            }
        })

        gsap.to("#adventure .level", {
            scaleX: 1,
            scrollTrigger: {
                trigger: "#adventure #levels",
                start: "bottom bottom",
                toggleActions: "play none none reverse",
            }
        })

    }, {scope, dependencies: [isDesktop]})

    return (
        <section ref={scope} className="relative padding-x padding-y-md text-white">
            <div className="bg-gradient-dark absolute top-0 left-0 h-[300vh] w-full"/>
            <div id="adventure" className="space-y-12 z-1 relative padding-x">
                <h2 className="sub-heading">Discover available Capsules®</h2>
                <h3 className="heading-1 xl:xl-text text-[60px]">
                    Discover the desert activities
                </h3>

                <div className="flex flex-col xl:flex-row gap-x-24 gap-y-12 items-center">

                    <p
                        className="heading-4 xl:order-2 flex-1 xl:mt-[40px] hyphens-auto text-lightBrown leading-[1]">We
                        want to
                        make sure
                        your stay is exciting and enjoyable. That's why we offer a variety of activities with different
                        levels of engagement. Whether you seek thrills or tranquility, there's something for everyone to
                        make your desert stay truly memorable.
                    </p>

                    <div className="xl:order-1 flex flex-col w-full xl:w-4/10">
                        <p
                            className="text-white font-semibold text-sm xl:text-xs">Offered
                            Capsules® activities <br className="xl:hidden"/>have different levels of difficulty:
                        </p>

                        <div id="levels">

                            {
                                adventures.map(adventure => <Duration key={adventure.id} details={adventure}/>)
                            }
                        </div>


                    </div>
                </div>
            </div>

            <Carousel/>
        </section>
    )
}

function Duration({details}: { details: IAdventure }) {
    return (
        <div className="flex flex-col relative">
            <div className="flex justify-between my-6">
                <span
                    className="text-sm text-lightBrown font-normal">{details.difficulty}
                </span>
                <span
                    className="text-sm font-semibold text-xs text-lightBrown">
                    {details.desc}
                </span>
            </div>
            <div className="w-full relative">
                <div className="absolute w-full h-[1px] bg-white opacity-[0.2]"/>
                <div className="level absolute scale-x-[0] h-[1px] origin-left bg-white"
                     style={{width: `${details.level}%`}}/>
            </div>
        </div>
    )
}