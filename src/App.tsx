import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
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
import {useState} from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, ScrollSmoother, GSDevTools, TextPlugin)

export default function App() {

    const [isOpenReserve, setIsOpenReserve] = useState(false)

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    })

    return (
        <main>
            <Navbar setIsOpen={setIsOpenReserve}/>
            <MenuButton/>
            <Reserve isOpen={isOpenReserve} setIsOpen={setIsOpenReserve}/>
            <div id="smooth-content" className="bg-dark min-h-screen">
                <Hero/>
                <div className="bg-gradient-brown">
                    <Welcome/>
                    <Discover/>
                    <Capsules/>
                    <Closer/>
                </div>
                <Why/>
                <Adventure/>
                <Testimonials/>
                <CTA setIsOpen={setIsOpenReserve}/>
                <Footer setIsOpen={setIsOpenReserve}/>
            </div>
        </main>
    )
}