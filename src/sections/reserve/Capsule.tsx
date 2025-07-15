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
                className="group cursor-pointer h-[80px] bg-[#181717] flex rounded-[14px] items-center p-1 transition relative overflow-hidden w-full md:flex-col md:h-[8.3vw] md:rounded-[1.4vw] md:flex md:items-center"
                onClick={() => setSelectedCapsule(capsule)}>
            <div
                className="w-full h-full rounded-xl overflow-hidden pt-0.5 px-0.5 pb-2 md:w-full md:h-full flex flex-col gap-2 text-white">
                <div
                    className={cn("h-full w-full bg-lightBrown absolute inset-0 z-0 scale-0 rounded-full transition duration-300 group-hover:scale-110 group-hover:md:scale-130", {"bg-white scale-130 ": isSelected})}/>
                <img alt="" className="scale-125 z-20 md:h-full md:w-full md:scale-100 md:object-cover md:rounded-[1vw]"
                     src={capsule.img}/>
                <p className={cn("capitalize text-xs z-20 transition-colors group-hover:text-tertiary", {"text-tertiary": isSelected})}>{capsule.name}</p>
            </div>
        </button>
    )
}