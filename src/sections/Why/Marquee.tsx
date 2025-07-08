import {FaAsterisk} from "react-icons/fa6";

export default function Marquee() {

    return (
        <div className="why-marquee-wrapper overflow-x-hidden w-screen -margin-x relative z-0 xl:-z-1">
            <div id="wrapper" className="flex xl:translate-x-[-100%] will-change-transform">
                <div className="min-w-screen">
                    <h1 className="w-full text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-start justify-center leading-[1.2]">
                        <span>
                        <FaAsterisk className="text-[clamp(1rem,6.25vw,6rem)] translate-y-[30%]"/>
                        </span>Why Capsules®?
                    </h1>
                </div>
                <div className="min-w-screen">
                    <h1 className="w-full text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-start justify-center leading-[1.2]">
                        <span>
                        <FaAsterisk className="text-[clamp(1rem,6.25vw,6rem)] translate-y-[30%]"/>
                        </span>Why Capsules®?
                    </h1>
                </div>
                <div className="min-w-screen">
                    <h1 className="w-full text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-start justify-center leading-[1.2]">
                        <span>
                        <FaAsterisk className="text-[clamp(1rem,6.25vw,6rem)] translate-y-[30%]"/>
                        </span>
                        Why Capsules®?
                    </h1>
                </div>
            </div>
        </div>
    )
}