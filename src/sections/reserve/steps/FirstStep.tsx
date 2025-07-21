import Capsule from "../Capsule.tsx";
import {MdOutlineArrowForward} from "react-icons/md";
import {capsules, type ICapsule} from "../../../data/capsules.ts";

import {IconButton} from "../../../components/Button.tsx";
import {useMediaQuery} from "react-responsive";
import DateInput from "../../../components/DateInput.tsx";

interface Props {
    next: () => void
    selectedCapsule: ICapsule
    setSelectedCapsule: React.Dispatch<React.SetStateAction<ICapsule>>
}

export default function FirstStep({next, selectedCapsule, setSelectedCapsule}: Props) {
    const isMobile = useMediaQuery({
        maxWidth: 1279
    })

    return (
        <div
            id="first-step"
            className="mt-10 rounded-4xl overflow-y-scroll scrollbar-hide relative h-full px-2 overflow-auto overscroll-contain flex flex-col gap-4">

            <div className="px-6 content xl:invisible space-y-6">

                <div className="mt-[20px]">
                    <div>

                        <h5 className="font-semibold leading-[26px] tracking-[-0.2px] text-white">Make it
                            memorable
                            and reserve one of
                            our—Capsules®</h5>
                    </div>
                </div>
                <p
                    className="text-xs font-semibold text-lightBrown mt-5">Ready
                    to start your journey to a desert adventure? Secure your capsule by filling out the
                    reservation form.We hope to see you soon!
                </p>

                <p className="text-white font-semibold text-xs">(1) Which capsule would you like to reserve?</p>

                <div className="grid xl:grid-cols-3 gap-1 5">
                    {
                        capsules.map(capsule => <Capsule key={capsule.id} capsule={capsule}
                                                         isSelected={selectedCapsule.id === capsule.id}
                                                         setSelectedCapsule={setSelectedCapsule}/>)
                    }
                </div>

                <p className="text-white font-semibold text-xs">(2) How long you would like to stay and
                    when?</p>

                <div className="flex items-center justify-between gap-2 text-lightBrown">
                    <DateInput id="check-in" name="Check-in date"/>
                    -
                    <DateInput id="check-out" name="Check-out date"/>
                </div>

            </div>
            <div className="px-6 flex-1 flex items-end">
                <div
                    className="relative overflow-hidden w-full h-16 rounded-full pl-6 pr-2.5">
                    <div
                        id="tray-bg"
                        className="xl:scale-x-0 origin-left absolute top-0 left-0 bg-black/50 rounded-full w-full h-full -z-1"></div>
                    <div className="content xl:invisible flex justify-between items-center h-full">
                        <div
                            className="font-semibold">
                            <p className=" text-lightBrown text-xs">Stay</p>
                            <p className=" text-white text-xs">15.07 - 20.07</p>
                        </div>
                        <div
                            className="font-semibold">
                            <p className=" text-lightBrown text-xs">Stay</p>
                            <p className=" text-white text-xs">15.07 - 20.07</p>
                        </div>

                        <IconButton text="Next" Icon={MdOutlineArrowForward} onClick={next}
                                    minimizeOnMobile={isMobile} aria-label="Proceed reservation"/>
                    </div>
                </div>
            </div>
        </div>
    )
}