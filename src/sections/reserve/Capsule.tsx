import type {ICapsule} from "../../data/capsules.ts";
import {cn} from "../../utils/tailwind.ts";

interface Props {
    capsule: ICapsule,
    isSelected: boolean,
    setSelectedCapsule: React.Dispatch<React.SetStateAction<ICapsule>>
}

export default function Capsule({capsule, isSelected, setSelectedCapsule}: Props) {
    return (
        <button type="button"
                className="group cursor-pointer bg-[#181717] flex rounded-[14px] items-center p-1 transition relative overflow-hidden w-full md:flex-col md:h-[8.3vw] md:rounded-[1.4vw] md:flex md:items-center"
                onClick={() => setSelectedCapsule(capsule)}>
            <div
                className="w-full h-full rounded-xl overflow-hidden xl:pt-0.5 xl:px-0.5 xl:pb-2 md:w-full md:h-full flex xl:flex-col flex-row items-center xl:items-start gap-2 text-white">
                <div
                    className={cn("h-full w-full bg-lightBrown absolute inset-0 z-0 scale-0 origin-left xl:origin-center rounded-full transition duration-300 group-hover:scale-110 group-hover:md:scale-130 -ml-4 xl:ml-0", {"bg-white scale-130 ": isSelected})}/>
                <picture className="relative z-1">
                    <source srcSet={capsule.img} media="(min-width: 1240px)"/>
                    <img alt="" loading="lazy"
                         className="h-16 object-cover z-20 md:w-full md:scale-100 md:object-cover rounded-[14px] md:rounded-[1.4vw]"
                         src={capsule.imgMobile}/>
                </picture>
                <p className={cn("text-center w-full capitalize text-sm z-20 transition-colors group-hover:text-tertiary", {"text-tertiary": isSelected})}>{capsule.altName}</p>
            </div>
        </button>
    )
}