import Info from "./Info.tsx";
import {useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {AuthenticationType, AzureMap, AzureMapsProvider, type IAzureMapOptions} from "react-azure-maps";
import 'azure-maps-control/dist/atlas.min.css'
import MapController from "./MapController.tsx";

interface Props {
    isOpenMap: boolean
}

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: import.meta.env.VITE_PRIMARY_KEY
    },
}

export default function Map({isOpenMap}: Props) {

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
        if (isOpenMap) tl.current.play()
        else tl.current.reverse()
    }, [isOpenMap]);

    return (
        <section>
            <div id="map" className="circle-clip-path w-screen h-screen fixed top-0 left-0 pointer-events-none z-40">
                <AzureMapsProvider>
                    <div style={{height: '100vh', width: "100vw", position: "absolute", left: 0, top: 0}}>
                        <AzureMap options={option}/>
                        <MapController/>
                    </div>
                </AzureMapsProvider>

                <div className="p-4">
                    <Info/>
                </div>
            </div>
        </section>
    )
}
