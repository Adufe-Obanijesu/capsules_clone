import AnimatedUnderlineText from "../../../components/AnimatedUnderlineText.tsx";
import {IconButton} from "../../../components/Button.tsx";
import {MdArrowOutward} from "react-icons/md";

export default function SecondStep() {
    return (
        <div
            id="second-step"
            className="hidden mt-10 rounded-4xl overflow-y-scroll scrollbar-hide relative h-full px-2 overflow-auto overscroll-contain flex-col gap-1">

            <div className="px-6 content xl:invisible space-y-4">

                <div className="mt-[20px]">
                    <div>

                        <h5 className="font-semibold leading-[26px] tracking-[-0.2px] text-white">Thank you for your
                            interest-but you can't go further :(</h5>
                    </div>
                </div>
                <div
                    className="text-xs font-semibold text-lightBrown mt-5">
                    This website is just the concept work done by Moyra— a premium digital lab. If you like this project
                    and would like to outsource something similar, don’t hesitate to contact us. Click the below button
                    or use our email: <AnimatedUnderlineText id="reserve-email">hello@moyra.co</AnimatedUnderlineText>
                </div>

                <div className="flex gap-2">
                    <IconButton text="Inquiry" Icon={MdArrowOutward}/>
                    <IconButton text="Moyra" Icon={MdArrowOutward}/>
                </div>

            </div>

            <div className="content xl:invisible flex-1 flex items-end">
                <div className="rounded-[40px] max-h-60 w-full overflow-hidden relative">
                    <img loading="lazy" src="/images/cap1.webp" alt="capsules"
                         className="h-full w-full object-cover object-center"/>
                    <div className="center-absolute">
                        <h2 className="text-white font-medium">
                            Capsules®
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}