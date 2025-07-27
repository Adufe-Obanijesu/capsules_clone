import AnimatedUnderlineText from "../../components/AnimatedUnderlineText";
import {type RefObject, useContext} from "react";
import gsap from "gsap";
import {Ctx} from "../../App";

interface Props {
    openMapTimeline: RefObject<gsap.core.Timeline | null>,
    setIsOpenMap: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Info({openMapTimeline, setIsOpenMap}: Props) {

    const {setIsOpenReserve} = useContext(Ctx)

    const reserve = () => {
        if (openMapTimeline.current) {
            setIsOpenMap(false)
            gsap.delayedCall(openMapTimeline.current.totalDuration(), () => {
                setIsOpenReserve(true)
            })
        }
    }

    return (
        <div id="map-info" className="scale-0 text-white bg-darkBrown rounded-[40px] px-6 py-8 xl:w-fit">
            <div className="flex flex-col items-start gap-3 invisible">
                <h6>Capsules®</h6>
                <p className="text-xs text-lightBrown text-start">
                    Maricopa, CA 93253
                    <br/>
                    United States
                </p>
                <div>
                    <button aria-label="Reserve" onClick={reserve}>
                        <AnimatedUnderlineText id="map-info">
                    <span className="text-xs">
                        Ready to reserve
                    </span>
                        </AnimatedUnderlineText>
                    </button>
                </div>
                <div className="flex gap-2">

                    <img src="/images/cap1-mobile.webp" loading="lazy" alt="capsule"
                         className="h-15 w-24 rounded-lg object-center object-cover"/>
                    <img src="/images/activities-2.webp" loading="lazy" alt="capsule"
                         className="h-15 w-24 rounded-lg object-center object-cover"/>
                </div>
            </div>
        </div>
    )
}