import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import SplitText from "gsap/SplitText"
import Welcome from "./sections/Welcome.tsx";
import Discover from "./sections/Discover.tsx";
import Capsules from "./sections/capsules";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP, ScrollSmoother)

export default function App() {

    return (
        <main id="smooth-content" className="bg-dark min-h-screen">
            <Hero/>
            <div className="bg-gradient-brown">
                <Welcome/>
                <Discover/>
                <Capsules/>
            </div>
            <div className="h-screen bg-red-500"></div>
        </main>
    )
}