import type {ICapsule} from "../../../data/capsules";
import {cn} from "../../../utils/tailwind";
import Button from "./Button";

export default function Card({capsule}: { capsule: ICapsule }) {

    return (
        <div className="relative">

            <div
                className="capsule absolute left-0 overflow-hidden rounded-[40px] h-[98vh] w-full"
                style={capsule.id !== 1 ? {transform: "translateY(110%)"} : undefined}
            >
                <div
                    className={cn(`h-full w-full rounded-[40px] overflow-hidden flex justify-center items-center`, {"scale-45 rounded-[200px] overflow-hidden": capsule.id === 1})}>
                    <img alt={capsule.altName}
                         className="object-cover object-center absolute w-full h-full scale-[1.4]"
                         src={capsule.img} loading="lazy"/>
                    <div className="left-8 flex justify-between items-center w-full absolute">
                        <h2
                            className="heading-1 capsule-heading text-white lg-text invisible leading-[1.2]">
                            {capsule.name}
                        </h2>
                    </div>
                    <div className="capsule-action absolute bottom-6 left-4 flex gap-x-6 z-2 items-center">
                        <Button capsule={capsule}/>
                        <p
                            className="text-sm leading-[.9]
                     font-semibold text-white translate-x-[10%] max-w-[400px] invisible">{capsule.description}
                        </p>
                    </div>
                    <div
                        className="absolute bg-black w-full h-full invisible z-[20] pointer-events-none"/>
                </div>

                <div
                    className="capsule-card-overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 pointer-events-none"/>
            </div>
        </div>
    )
}