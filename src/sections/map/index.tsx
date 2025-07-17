import Info from "./Info.tsx";
import {useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"

interface Props {
    isOpenMap: boolean
}

export default function Map({isOpenMap}: Props) {

    const scope = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline>(null)

    useGSAP(() => {
        tl.current = gsap.timeline({paused: true, defaults: {ease: "sine"}})
            .to("#map", {
                clipPath: "circle(100% at 50% 50%)",
                duration: 1,
                pointerEvents: "auto"
            })
            .to("#map-info", {
                transformOrigin: "top left",
                scale: 1,
                duration: 1
            }, "<")
            .to("#map-info > div", {
                autoAlpha: 1
            })
    }, {scope})

    useEffect(() => {
        if (!tl.current) return
        console.log(isOpenMap, "map")
        if (isOpenMap) tl.current.play()
        else tl.current.reverse()
    }, [isOpenMap]);

    return (
        <section ref={scope}>
            <div id="map" className="circle-clip-path w-screen h-screen fixed top-0 left-0 pointer-events-none z-40">
                <img src="/images/map.webp" alt="map"
                     className="absolute top-0 left-0 w-full h-full object-cover object-center"/>

                <div className="p-4">
                    <Info/>
                </div>
            </div>
        </section>
    )
}