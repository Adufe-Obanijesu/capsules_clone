import {capsules, type ICapsule} from "../../../data/capsules.ts";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import Details from "./Details.tsx";
import Card from "./Card.tsx";

export default function MobileVersion() {

    const scope = useRef<HTMLDivElement>(null)
    const [selectedCapsule, setSelectedCapsule] = useState<ICapsule | null>(null)

    useGSAP(() => {
        gsap.to("#wrapper", {
            xPercent: -100,
            repeat: -1,
            ease: "none",
            duration: 15,
        })
    }, {scope})

    function cancel() {
        setSelectedCapsule(null)
    }

    return (
        <section ref={scope} className="relative padding-x padding-y-md">

            <div aria-hidden className="mb-16 -margin-x">
                <div className="overflow-x-hidden w-screen">
                    <div id="wrapper" className="flex">

                        <div className="min-w-screen padding-x">

                            <img src="/logo.svg" alt="logo" className="aspect-[4.28/1]"/>
                        </div>

                        <div className="min-w-screen padding-x">

                            <img src="/logo.svg" alt="logo" className="aspect-[4.28/1]"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-16">

                {
                    capsules.map(capsule => <Card key={capsule.id} capsule={capsule}
                                                  setSelectedCapsule={setSelectedCapsule}/>)
                }
            </div>

            <Details capsule={selectedCapsule} cancel={cancel}/>
        </section>
    )
}