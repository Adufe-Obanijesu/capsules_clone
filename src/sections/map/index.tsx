import Info from "./Info.tsx";
import {lazy, useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import useDebounce from "../../hooks/useDebounce.tsx";

const MapSection = lazy(() => import('./Map.tsx'));

interface Props {
    isOpenMap: boolean
    setIsOpenMap: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Map({isOpenMap, setIsOpenMap}: Props) {

    const tl = useRef<gsap.core.Timeline>(null)
    const openDebounced = useDebounce(isOpenMap, 2000)

    useGSAP(() => {
        tl.current = gsap.timeline({paused: true, defaults: {ease: "sine"}})
            .to("#map", {
                transformOrigin: "center center",
                clipPath: "circle(100%)",
                duration: 1,
                pointerEvents: "auto"
            })
            .to("#map-info", {
                transformOrigin: "top left",
                scale: 1,
                duration: .75
            }, "<")
            .to("#map-info > div", {
                autoAlpha: 1
            })
            .set("body", {
                overflow: "hidden"
            }, 0)
    })

    useEffect(() => {
        if (!tl.current) return
        if (isOpenMap) {
            gsap.set("#map", {willChange: "clip-path"})
            tl.current.play()
        } else {
            tl.current.reverse().set("#map", {willChange: "auto"})
        }
    }, [isOpenMap]);

    return (
        <section>
            <div id="map" className="circle-clip-path w-screen h-screen fixed top-0 left-0 pointer-events-none z-40">
                <div className="absolute top-0 left-0 w-screen h-screen bg-lightBrown"/>
                {
                    (isOpenMap || openDebounced) && <MapSection/>
                }
                <div className="p-4">
                    <Info setIsOpenMap={setIsOpenMap} openMapTimeline={tl}/>
                </div>
            </div>
        </section>
    )
}
