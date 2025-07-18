import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import GSDevTools from "gsap/GSDevTools"
import TextPlugin from "gsap/TextPlugin"
import {useGSAP} from "@gsap/react";
import {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {lazy, Suspense} from "react";

// Effects
import "./effects"

// Sections
import Welcome from "./sections/Welcome.tsx";
import {LazySectionWrapper} from "./components/LazySectionWrapper";
// import Discover from "./sections/Discover.tsx";
// import Capsules from "./sections/capsules";
// import Closer from "./sections/Closer.tsx";
// import Why from "./sections/Why";
// import Adventure from "./sections/Adventure";
// import Testimonials from "./sections/Testimonials/Testimonials.tsx";
// import CTA from "./sections/CTA.tsx";
// import Footer from "./sections/footer";
import Navbar from "./sections/navigation/Navbar.tsx";
import MenuButton from "./sections/menu/MenuButton.tsx";
import Reserve from "./sections/reserve";
// import Map from "./sections/map";
import Loader from "./sections/Loader.tsx";
import useLenis from "./hooks/useLenis.tsx";


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

export default function App() {
    useLenis()
    const [isOpenReserve, setIsOpenReserve] = useState(false)
    const [isOpenMap, setIsOpenMap] = useState(false)

    const isMobile = useMediaQuery({maxWidth: 1279});
    const prev = useRef(isMobile);

    useEffect(() => {
        if (prev.current !== isMobile) {
            window.location.reload();
        }
        prev.current = isMobile;
    }, [isMobile]);


    return (
        <main className="bg-darkBrown relative antialiased">
            <Navbar setIsOpen={setIsOpenReserve}/>
            <Reserve isOpen={isOpenReserve} setIsOpen={setIsOpenReserve}/>
            <MenuButton isOpenMap={isOpenMap} setIsOpenMap={setIsOpenMap}/>
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
                    <LazySectionWrapper><Map isOpenMap={isOpenMap}/></LazySectionWrapper>
                </Suspense>
            </div>
        </main>
    )
}
