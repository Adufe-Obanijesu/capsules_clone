import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import GSDevTools from "gsap/GSDevTools"
import TextPlugin from "gsap/TextPlugin"

// Effects
import "./effects"

import Welcome from "./sections/Welcome.tsx";
import Discover from "./sections/Discover.tsx";
import Capsules from "./sections/capsules";
import {useGSAP} from "@gsap/react";
import Closer from "./sections/Closer.tsx";
import Why from "./sections/Why";
import Adventure from "./sections/Adventure";
import Testimonials from "./sections/Testimonials/Testimonials.tsx";
import CTA from "./sections/CTA.tsx";
import Footer from "./sections/footer";
import Navbar from "./sections/navigation/Navbar.tsx";
import MenuButton from "./sections/menu/MenuButton.tsx";
import Reserve from "./sections/reserve";
import {useEffect, useRef, useState} from "react";
import Map from "./sections/map";
import {useMediaQuery} from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, GSDevTools, TextPlugin)

export default function App() {

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
        <main>
            <Navbar setIsOpen={setIsOpenReserve}/>
            <MenuButton isOpenMap={isOpenMap} setIsOpenMap={setIsOpenMap}/>
            <Reserve isOpen={isOpenReserve} setIsOpen={setIsOpenReserve}/>
            <div className="bg-dark min-h-screen">
                <Hero/>
                <div className="bg-gradient-brown">
                    <Welcome/>
                    <Discover/>
                    <Capsules/>
                    <Closer setIsOpenMap={setIsOpenMap}/>
                </div>
                <Why/>
                <Adventure/>
                <Testimonials/>
                <CTA setIsOpen={setIsOpenReserve}/>
                <Footer setIsOpen={setIsOpenReserve}/>
                <Map isOpenMap={isOpenMap}/>
            </div>
        </main>
    )
}