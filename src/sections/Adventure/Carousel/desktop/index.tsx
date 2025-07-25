import {activities, type TActivity} from "../../../../data/adventure";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {useRef} from "react";

export default function DesktopCarousel() {

    const scope = useRef<HTMLDivElement>(null)
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!container.current || !scope.current) return

        const viewportWidth = scope.current.offsetWidth
        const wrapperWidth = container.current.offsetWidth

        const distance = wrapperWidth - viewportWidth

        gsap.timeline({
            scrollTrigger: {
                trigger: "#activities",
                start: "top 1.5%",
                end: `+=${distance}px`,
                scrub: 1,
                pin: true,
                refreshPriority: 1
            },
        })
            .to(container.current, {
                x: -distance,
            })
            .fromTo("#activities img", {
                x: 0
            }, {
                x: -120,
            }, "<")
    }, {scope})

    return (
        <div ref={scope} className="mt-12.5 overflow-hidden -mx-2.5">
            <div id="activities">

                <div ref={container}
                     className="flex gap-2.5 w-max overflow-x-scroll xl:overflow-x-hidden px-2.5 will-change-transform">
                    {
                        activities.map((activity) => <Card key={activity.id} activity={activity}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function Card({activity}: { activity: TActivity }) {
    return (
        <div className="h-[97vh] w-[85vw] min-w-[85vw] rounded-[40px] px-6 py-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0"><img
                alt="Activity"
                className="scale-140 object-cover absolute w-full h-full z-0"
                src={activity.img} loading="lazy"/></div>
            <div className="w-full h-full relative z-1">
                <div className="w-full h-full flex flex-col justify-between right-0">
                    <div className="flex justify-between">
                        <h2
                            className="heading-3 text-white font-medium">{activity.title}
                        </h2>
                        <div>

                            <div
                                className="border px-2 py-1 border-white rounded-full flex justify-center items-center">
                                <span
                                    className="text-sm font-semibold text-white">{activity.difficulty}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <p
                            className="font-semibold text-white max-w-[305px] text-xs">{activity.desc}
                        </p>
                        <div>

                            <div className="flex items-center">
                                <div
                                    className="border px-2 py-1 text-sm border-lightBrown flex justify-center items-center rounded-full">
                                    <div
                                        className="font-semibold text-white">{activity.id.toString().padStart(2, "0")}
                                    </div>
                                </div>
                                <div
                                    className="border px-2 py-1 text-sm border-white flex justify-center items-center rounded-full opacity-[0.2]">
                                    <div
                                        className="font-semibold text-white">{activities.length.toString().padStart(2, "0")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}