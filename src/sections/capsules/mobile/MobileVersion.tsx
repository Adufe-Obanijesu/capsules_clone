import {capsules, type ICapsule} from "../../../data/capsules";
import {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import Details from "./Details";
import Card from "./Card";

export default function MobileVersion() {

    const scope = useRef<HTMLDivElement>(null)
    const [selectedCapsule, setSelectedCapsule] = useState<ICapsule | null>(null)

    useGSAP(() => {
        gsap.effects.infiniteSlide("#wrapper", {
            duration: 15,
            xPercent: -100
        });
    }, {scope})

    function cancel() {
        setSelectedCapsule(null)
    }

    return (
        <div ref={scope} className="relative padding-x padding-y-md">

            <div aria-hidden className="mb-16 -margin-x">
                <div className="overflow-hidden w-screen">
                    <div id="wrapper" className="flex">

                        <div className="min-w-screen padding-x">

                            <img src="/logo.svg" loading="lazy" alt="logo" className="aspect-[4.28/1]"/>
                        </div>

                        <div className="min-w-screen padding-x">

                            <img src="/logo.svg" loading="lazy" alt="logo" className="aspect-[4.28/1]"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-16">

                {
                    capsules.map(capsule => <Card isOpen={capsule.id === selectedCapsule?.id} key={capsule.id}
                                                  capsule={capsule}
                                                  setSelectedCapsule={setSelectedCapsule}/>)
                }
            </div>

            <Details capsule={selectedCapsule} setSelectedCap={setSelectedCapsule} cancel={cancel}/>
        </div>
    )
}