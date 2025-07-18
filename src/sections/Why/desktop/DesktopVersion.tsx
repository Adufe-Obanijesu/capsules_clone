import Card from "../Card.tsx";
import {why} from "../../../data/why.ts";
import {useGSAP} from "@gsap/react";
import {animation} from "./animation.ts";
import {useRef} from "react";

export default function DesktopVersion() {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => animation, {})

    return (
        <section ref={scope} className="bg-tertiary py-[1vh]">
            <div className="why-desktop grid grid-cols-2 gap-4 padding-x h-screen overflow-hidden">
                <div className="card-container">
                    <Card whys={why} details={why[0]}/>
                </div>

                <div className="relative right-side">
                    <div
                        className="image-container image-with-clip absolute inset-0 overflow-hidden rounded-[30px] h-[98vh] z-3 ">
                        <img src={why[0].img} alt="capsule"
                             className="absolute inset-0 z-1 object-cover object-center w-full h-full"/>
                        <img src={why[1].img} alt="capsule"
                             className="absolute inset-0 object-cover object-center w-full h-full scale-[1.4]"/>
                    </div>
                    <div className="card-container absolute inset-0 z-2 translate-y-[110%] ">
                        <Card whys={why} details={why[1]} multiple/>
                    </div>
                    <div
                        className="image-container absolute inset-0 overflow-hidden rounded-[30px] h-[98vh] z-1 translate-y-[110%]">
                        <img src={why[2].img} alt="capsule"
                             className="object-cover object-center w-full h-full scale-[1.4]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}