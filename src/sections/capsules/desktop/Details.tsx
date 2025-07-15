import type {ICapsule} from "../../../data/capsules.ts";
import {useRef} from "react";
import AnimatedUnderlineText from "../../../components/AnimatedUnderlineText.tsx";

interface Props {
    capsule: ICapsule;
}

export default function Details({capsule}: Props) {

    const scope = useRef<HTMLDivElement>(null)

    return (
        <div ref={scope} className="padding relative">

            <div id="details_wrapper"
                 className="will-change-transform scale-0 fixed z-500 bottom-20 rounded-[40px] left-4 w-95 h-[calc(100vh-110px)] flex flex-col padding bg-darkBrown">
                <div
                    className="rounded-4xl overflow-y-scroll scrollbar-hide relative h-full px-2 touch-auto overflow-auto overscroll-contain flex flex-col gap-1">
                    <div className="invisible">

                        <div className="mt-[20px] flex justify-between items-center gap-4">
                            <div>

                                <h5 className="font-semibold leading-[26px] tracking-[-0.2px] text-white">Details</h5>
                                <div
                                    className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-white">({capsule?.name})
                                </div>
                            </div>
                            <div className="w-[114px] h-[58px] relative rounded-[23px] overflow-hidden"><img
                                alt={capsule?.name}
                                className="object-cover object-center absolute w-full h-full"
                                src={capsule?.img}/></div>
                        </div>
                        <div
                            className="text-xs font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown mt-5">{capsule?.description}
                        </div>
                        <div className="space-y-4 text-xs">

                            <div
                                className="flex justify-between pb-1 border-b-[1px] border-white/20 relative select-none mt-[30px]">
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">Square
                                    footage
                                </div>
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">{capsule?.details.sq_footage}
                                </div>
                                <div className="absolute bottom-0 w-full bg-white opacity-[0.2]"></div>
                            </div>
                            <div
                                className="flex justify-between pb-1 border-b-[1px] border-white/20 relative select-none">
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">Bed
                                </div>
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">{capsule?.details.bed}
                                </div>
                                <div className="absolute bottom-0 w-full bg-white opacity-[0.2]"></div>
                            </div>
                            <div
                                className="flex justify-between pb-1 border-b-[1px] border-white/20 relative select-none">
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">Shifting
                                    Window
                                </div>
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">{capsule?.details.shifting_window ? "Available" : "None"}
                                </div>
                                <div className="absolute bottom-0 w-full bg-white opacity-[0.2]"></div>
                            </div>
                            <div
                                className="flex justify-between pb-1 border-b-[1px] border-white/20 relative select-none">
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">Air
                                    Condition
                                </div>
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">{capsule?.details.air_condition ? "Available" : "None"}
                                </div>
                                <div className="absolute bottom-0 w-full bg-white opacity-[0.2]"></div>
                            </div>
                            <div
                                className="flex justify-between pb-1 border-b-[1px] border-white/20 relative select-none">
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">Jacuzzi
                                </div>
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">{capsule?.details.jacuzzi ? "Available" : "None"}
                                </div>
                                <div className="absolute bottom-0 w-full bg-white opacity-[0.2]"></div>
                            </div>
                            <div
                                className="flex justify-between pb-1 border-b-[1px] border-white/20 relative select-none">
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">Terrace
                                </div>
                                <div
                                    className="tracking-[-0.2px] font-normal text-white">{capsule?.details.terrace ? "Available" : "None"}
                                </div>
                            </div>
                        </div>

                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] text-lightBrown text-left mt-[18px] underline">

                            <AnimatedUnderlineText id={`capsule-details-${capsule.id}`}>
                                Ready to reserve?
                            </AnimatedUnderlineText>
                        </div>

                    </div>
                    <div className="flex-1 flex items-end">
                        <div
                            className="relative overflow-hidden w-full h-16 rounded-full px-[24px]">
                            <div
                                className="scale-x-0 opacity-0 origin-left absolute top-0 left-0 bg-black/50 rounded-full w-full h-full -z-1"></div>
                            <div className="flex justify-between items-center h-full invisible">
                                <div
                                    className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown">Cost
                                </div>
                                <div
                                    className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown">
                                    <span className="text-white">{capsule.details.cost.toFixed(2)} USD</span> / Night
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}