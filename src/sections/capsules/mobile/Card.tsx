import type {ICapsule} from "../../../data/capsules.ts";
import {GoPlus} from "react-icons/go";

interface Props {
    capsule: ICapsule,
    setSelectedCapsule: React.Dispatch<React.SetStateAction<ICapsule | null>>
}

export default function Card({capsule, setSelectedCapsule}: Props) {
    return <div>
        <div className="relative overflow-hidden w-full aspect-[1.4/1] rounded-[30px]"><img alt={capsule.name}
                                                                                            className="object-cover object-center absolute w-full h-full"
                                                                                            src={capsule.img}
                                                                                            loading="lazy"/>
            <button
                className="w-[52px] h-[52px] hover:opacity-[0.9] right-[10px] bottom-[10px] absolute rounded-full bg-lightBrown flex justify-center items-center z-1 cursor-pointer"
                onClick={() => setSelectedCapsule(capsule)}>
                <GoPlus fontSize={30}/>
            </button>
        </div>

        <div className="px-[10px]">
            <h2
                className="text-[35px] font-semibold leading-[38px] tracking-[-0.2px] text-lightBrown mt-[20px] mb-[15px]">{capsule.name}
            </h2>
            <p className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown">{capsule.description}
            </p>
        </div>
    </div>
}