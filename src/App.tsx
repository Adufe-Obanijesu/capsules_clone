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

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, ScrollSmoother, GSDevTools, TextPlugin)

export default function App() {

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    })

    return (
        <main id="smooth-content" className="bg-dark min-h-screen">
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
            <CTA/>
            <Footer/>
            <div className="h-screen bg-dark"></div>
        </main>
    )
}