import {FaAsterisk} from "react-icons/fa6";

export default function Marquee() {

    return (
        <div className="why-marquee-wrapper overflow-x-hidden w-screen -margin-x relative z-0">
            <h2 className="sub-heading padding-x-md mb-4 xl:mb-0">
                Want to learn more about <br/>
                the benefits of—Capsules®?
            </h2>
            <div aria-hidden="true" id="why-marquee-container" className="flex xl:translate-x-[-100%] ">
                <div className="min-w-screen">
                    <div
                        className="heading-1 w-full text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-start justify-center leading-[1.2]">
                        <span>
                        <FaAsterisk className="text-[clamp(1rem,6.25vw,6rem)] translate-y-[30%]"/>
                        </span>Why Capsules®?
                    </div>
                </div>
                <div className="min-w-screen">
                    <div
                        className="heading-1 w-full text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-start justify-center leading-[1.2]">
                        <span>
                        <FaAsterisk className="text-[clamp(1rem,6.25vw,6rem)] translate-y-[30%]"/>
                        </span>Why Capsules®?
                    </div>
                </div>
                <div className="min-w-screen">
                    <div
                        className="heading-1 w-full text-center whitespace-nowrap text-[clamp(2rem,12.5vw,12rem)] flex items-start justify-center leading-[1.2]">
                        <span>
                        <FaAsterisk className="text-[clamp(1rem,6.25vw,6rem)] translate-y-[30%]"/>
                        </span>
                        Why Capsules®?
                    </div>
                </div>
            </div>
        </div>
    )
}