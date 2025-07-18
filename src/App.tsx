import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import GSDevTools from "gsap/GSDevTools"
import TextPlugin from "gsap/TextPlugin"
import {useGSAP} from "@gsap/react";
import {createContext, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {lazy, Suspense} from "react";

// Effects
import "./effects"

// Sections
import Welcome from "./sections/Welcome.tsx";
import {LazySectionWrapper} from "./components/LazySectionWrapper";
import Navbar from "./sections/navigation/Navbar.tsx";
import MenuButton from "./sections/menu/MenuButton.tsx";
import Reserve from "./sections/reserve";
import Loader from "./sections/Loader.tsx";
import useLenis from "./hooks/useLenis.tsx";
import useEscapeKey from "./hooks/useEscapeKey.tsx";
import type {IReserveContext} from "./types/Reserve.ts";
import {capsules} from "./data/capsules.ts";


const Discover = lazy(() => import("./sections/Discover"));
const Capsules = lazy(() => import("./sections/capsules"));
const Closer = lazy(() => import("./sections/Closer"));
const Why = lazy(() => import("./sections/Why"));
const Adventure = lazy(() => import("./sections/Adventure"));
const Testimonials = lazy(() => import("./sections/Testimonials/Testimonials"));
const CTA = lazy(() => import("./sections/CTA"));
const Footer = lazy(() => import("./sections/footer"));
const Map = lazy(() => import("./sections/map"));


gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, GSDevTools, TextPlugin)

export const ReserveCtx = createContext<IReserveContext>({
    isOpenReserve: false,
    setIsOpenReserve: () => {
    },
    selectedCapsule: capsules[0],
    setSelectedCapsule: () => {
    },
})

export default function App() {
    useLenis()
    const [isOpenReserve, setIsOpenReserve] = useState(false)
    const [isOpenMap, setIsOpenMap] = useState(false)
    const [selectedCapsule, setSelectedCapsule] = useState(capsules[0])

    useEscapeKey(() => {
        setIsOpenMap(false)
        setIsOpenReserve(false)
    })

    const isMobile = useMediaQuery({maxWidth: 1279});
    const prev = useRef(isMobile);

    useEffect(() => {
        if (prev.current !== isMobile) {
            window.location.reload();
        }
        prev.current = isMobile;
    }, [isMobile]);


    return (
        <ReserveCtx.Provider value={{
            isOpenReserve,
            setIsOpenReserve,
            selectedCapsule,
            setSelectedCapsule
        }}>
            <main className="bg-darkBrown relative antialiased">
                <Navbar setIsOpen={setIsOpenReserve}/>
                <Reserve isOpen={isOpenReserve} setIsOpen={setIsOpenReserve}/>
                <MenuButton isOpenMap={isOpenMap} setIsOpenMap={setIsOpenMap}/>
                <LazySectionWrapper>
                    <Map isOpenMap={isOpenMap}/>
                </LazySectionWrapper>
                <div className="bg-dark min-h-screen">
                    <Loader>
                        <Hero/>
                    </Loader>
                    <div className="bg-gradient-brown">
                        <Welcome/>
                        <Suspense fallback={null}>
                            <LazySectionWrapper><Discover/></LazySectionWrapper>
                            <LazySectionWrapper pinning><Capsules/></LazySectionWrapper>
                            <LazySectionWrapper><Closer setIsOpenMap={setIsOpenMap}/></LazySectionWrapper>
                        </Suspense>
                    </div>
                    <Suspense fallback={null}>
                        <LazySectionWrapper pinning><Why/></LazySectionWrapper>
                        <LazySectionWrapper pinning><Adventure/></LazySectionWrapper>
                        <LazySectionWrapper><Testimonials/></LazySectionWrapper>
                        <LazySectionWrapper><CTA setIsOpen={setIsOpenReserve}/></LazySectionWrapper>
                        <LazySectionWrapper><Footer setIsOpen={setIsOpenReserve}/></LazySectionWrapper>
                    </Suspense>
                </div>
            </main>
        </ReserveCtx.Provider>
    )
}
