import Hero from "./sections/Hero/Hero.tsx";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function App() {

    return (
        <main className="bg-dark min-h-screen">
            <Hero />
            
            <div className="h-screen"></div>
        </main>
    )
}