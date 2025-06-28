import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import Welcome from "./sections/Welcome.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {

    return (
        <main className="bg-dark min-h-screen">
            <Hero />
            <Welcome />
            <div className="h-screen"></div>
        </main>
    )
}