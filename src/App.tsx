import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import GSDevTools from "gsap/GSDevTools"
import TextPlugin from "gsap/TextPlugin"
import {useGSAP} from "@gsap/react";
import {createContext, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {lazy, Suspense} from "react";
import type {IContext} from "./types/Reserve.ts";
import {capsules} from "./data/capsules.ts";

// Effects
import "./effects"

// Hooks
import useLenis from "./hooks/useLenis.tsx";
import useEscapeKey from "./hooks/useEscapeKey.tsx";


// Sections
import Hero from "./sections/Hero/Hero.tsx";
import Welcome from "./sections/Welcome.tsx";
import {LazySectionWrapper} from "./components/LazySectionWrapper";
import Navbar from "./sections/navigation/Navbar.tsx";
import MenuButton from "./sections/menu/MenuButton.tsx";
import Reserve from "./sections/reserve";
import Loader from "./sections/Loader.tsx";

// Lazy loaded sections
const Discover = lazy(() => import("./sections/Discover"));
const Capsules = lazy(() => import("./sections/capsules"));
const Closer = lazy(() => import("./sections/Closer"));
const Why = lazy(() => import("./sections/Why"));
const Adventure = lazy(() => import("./sections/Adventure"));
const Testimonials = lazy(() => import("./sections/Testimonials/Testimonials"));
const CTA = lazy(() => import("./sections/CTA"));
const Footer = lazy(() => import("./sections/footer"));
const Map = lazy(() => import("./sections/map"));


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, useGSAP, GSDevTools, TextPlugin)

export const Ctx = createContext<IContext>({
    isOpenReserve: false,
    setIsOpenReserve: () => {
    },
    selectedCapsule: capsules[0],
    setSelectedCapsule: () => {
    },
    lenis: null
})

export default function App() {
    const [isOpenReserve, setIsOpenReserve] = useState(false)
    const [isOpenMap, setIsOpenMap] = useState(false)
    const [selectedCapsule, setSelectedCapsule] = useState(capsules[0])
    const [hasLoaded, setHasLoaded] = useState(false)

    const lenis = useLenis(hasLoaded)

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
        <Ctx.Provider value={{
            isOpenReserve,
            setIsOpenReserve,
            selectedCapsule,
            setSelectedCapsule,
            lenis,
        }}>
            <main className="bg-darkBrown relative antialiased">
                <Navbar setIsOpen={setIsOpenReserve}/>
                <Reserve isOpen={isOpenReserve} setIsOpen={setIsOpenReserve}/>
                <MenuButton isOpenMap={isOpenMap} setIsOpenMap={setIsOpenMap}/>
                <LazySectionWrapper>
                    <Map isOpenMap={isOpenMap} setIsOpenMap={setIsOpenMap}/>
                </LazySectionWrapper>
                <div className="bg-dark min-h-screen">
                    <Loader setHasLoaded={setHasLoaded}>
                        <Hero/>
                    </Loader>

                    <>
                        <div className="">
                            <Welcome/>
                            <Suspense fallback={null}>
                                <div className="relative">
                                    <div
                                        className="absolute top-0 left-0 w-full h-[350vh] bg-gradient-to-b from-tertiary via-middleBrown to-tertiary"/>
                                    <LazySectionWrapper><Discover/></LazySectionWrapper>
                                    <LazySectionWrapper pinning><Capsules/></LazySectionWrapper>
                                </div>
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
                    </>
                </div>
            </main>
        </Ctx.Provider>
    )
}
