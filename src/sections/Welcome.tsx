import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

export default function Welcome() {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.set("#white-text", {
            clipPath: "inset(0 0 100% 0)"
        })

        gsap.to("#white-text", {
            scrollTrigger: {
                trigger: "#white-text",
                start: "top 90%",
                end: "bottom center",
                scrub: 1,
            },
            clipPath: "inset(0 0 0% 0)",
        })
    }, {scope})

    return (
        <section ref={scope} className="padding-x-md padding-y-md">
            <div className="relative">

                <h2 className="text-darkBrown fade-text">Welcome to a world of wild California desert with Capsule®,
                    where you
                    will discover exquisite nature observing it from capsule houses, nestled in the one of the most
                    breathtaking destination on the United States.
                    <span id="white-text" className="text-white absolute inset-0">
                Welcome to a world of wild California desert with Capsule®, where you will discover exquisite nature observing it from capsule houses, nestled in the one of the most breathtaking destination on the United States.
            </span>
                </h2>
            </div>

            <div className="flex flex-col xl:flex-row gap-x-24 items-center padding-y-md">

                <div className="flex-1 flex gap-[2px] mt-[50px] w-full">
                    <div
                        className="relative overflow-hidden rounded-[70px] xl:rounded-full w-1/2 h-[123px] xl:w-[255px] xl:h-[177px] 2xl:w-[453px] 2xl:h-[313px]">
                        <img
                            alt="Welcome Image 1" className="object-cover object-center absolute w-full h-full"
                            src="/public/images/welcome-1.webp"/>
                    </div>
                    <div
                        className="relative overflow-hidden rounded-[70px] xl:rounded-full w-1/2 h-[123px] xl:w-[255px] xl:h-[177px] 2xl:w-[453px] 2xl:h-[313px]">
                        <img
                            alt="Welcome Image 2" src="/public/images/welcome-2.webp"
                            className="object-cover object-center absolute w-full h-full"
                        />
                    </div>


                </div>
                <h4
                    className="flex-1 mt-[40px] hyphens-auto text-lightBrown"> A
                    place where you can be with yourself and your loved ones. A place where you can experience
                    unforgettable desert things.
                </h4>
            </div>
        </section>
    )
}