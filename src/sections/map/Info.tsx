import AnimatedUnderlineText from "../../components/AnimatedUnderlineText.tsx";

export default function Info() {
    return (
        <div id="map-info" className="scale-0 text-white bg-darkBrown rounded-[40px] px-6 py-8 xl:w-fit">
            <div className="flex flex-col gap-3 invisible">
                <h6>Capsules®</h6>
                <p className="text-xs text-lightBrown">
                    Maricopa, CA 93253
                    <br/>
                    United States
                </p>
                <AnimatedUnderlineText id="map-info">
                    <p className="text-xs">
                        Ready to reserve
                    </p>
                </AnimatedUnderlineText>
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