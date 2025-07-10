import {capsules as capsulesData} from "../../../data/capsules.ts";
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {animate} from "./animation";
import Card from "./Card.tsx";
import Marquee from "./Marquee.tsx";

export default function DesktopVersion() {
    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const capsuleElements = gsap.utils.toArray(".capsule") as HTMLElement[];
        animate(capsuleElements);
    }, {scope})

    return (
        <section ref={scope} className="space-y-16 pl-2 pr-4">

            <div id="capsule-wrapper" className="relative w-full h-[98vh] rounded-[30px] pb-[1%]">

                {
                    capsulesData.map(capsule => <Card key={capsule.id} capsule={capsule}/>)
                }
                <h1
                    id="scroll"
                    className="font-medium text-white absolute right-7 top-0 bottom-0 flex items-center mix-blend-exclusion z-10 invisible">(Scroll)
                </h1>

                <div id="progress" className="w-[430px] h-[1px] z-10 absolute bottom-14 right-7 invisible">
                    <div className="w-full h-full absolute bg-white opacity-[0.2]"></div>
                    <div id="progress-bar" className="w-full scale-x-[0.33] origin-left h-full absolute bg-white"></div>
                </div>

                <Marquee/>

            </div>

        </section>
    )
}

