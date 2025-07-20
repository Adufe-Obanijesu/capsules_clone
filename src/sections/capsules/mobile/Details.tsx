import type {ICapsule} from "../../../data/capsules.ts";
import {LiaTimesSolid} from "react-icons/lia";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"

interface Props {
    capsule: ICapsule | null;
    cancel: () => void;
}

export default function Details({capsule, cancel}: Props) {


    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to("#details_wrapper", {
            opacity: capsule ? 1 : 0,
            zIndex: capsule ? 100 : -10,
        })
    }, {scope, dependencies: [capsule]})

    return (
        <div ref={scope}>

            <div id="details_wrapper"
                 className="opacity-0 fixed top-0 left-0 w-full h-[100dvh] z-50 flex flex-col padding bg-tertiary">
                <div
                    className="rounded-4xl overflow-y-scroll scrollbar-hide relative h-full px-5 pt-[70px] pb-[160px] bg-darkBrown touch-auto overflow-auto overscroll-contain">
                    <button id="closeReservation" aria-label="Close Reservation"
                            className="w-[52px] h-[52px] bg-tertiary fixed rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden cursor-pointer"
                            onClick={cancel}>
                        <LiaTimesSolid color="white" fontSize={20}/>
                    </button>
                    <div className="flex justify-between items-center mt-[20px]">
                        <h4 className="text-[23px] font-semibold leading-[26px] tracking-[-0.2px] text-white">Details</h4>
                        <div
                            className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-white">({capsule?.name})
                        </div>
                    </div>
                    <div className="w-full h-[160px] relative mt-[30px] rounded-[23px] overflow-hidden"><img
                        alt={capsule?.name}
                        className="object-cover object-center absolute w-full h-full"
                        src={capsule?.img} loading="lazy"/></div>
                    <div
                        className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown mt-[30px]">{capsule?.description}
                    </div>
                    <div className="flex justify-between py-[14px] relative select-none mt-[30px]">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">Square
                            footage
                        </div>
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">{capsule?.details.sq_footage}
                        </div>
                        <div className="absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"></div>
                    </div>
                    <div className="flex justify-between py-[14px] relative select-none">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">Bed
                        </div>
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">{capsule?.details.bed}
                        </div>
                        <div className="absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"></div>
                    </div>
                    <div className="flex justify-between py-[14px] relative select-none">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">Shifting
                            Window
                        </div>
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">{capsule?.details.shifting_window ? "Available" : "None"}
                        </div>
                        <div className="absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"></div>
                    </div>
                    <div className="flex justify-between py-[14px] relative select-none">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">Air
                            Condition
                        </div>
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">{capsule?.details.air_condition ? "Available" : "None"}
                        </div>
                        <div className="absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"></div>
                    </div>
                    <div className="flex justify-between py-[14px] relative select-none">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">Jacuzzi
                        </div>
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">{capsule?.details.jacuzzi ? "Available" : "None"}
                        </div>
                        <div className="absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"></div>
                    </div>
                    <div className="flex justify-between py-[14px] relative select-none">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">Terrace
                        </div>
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-normal text-white">{capsule?.details.terrace ? "Available" : "None"}
                        </div>
                    </div>
                    <a className="cursor-pointer">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] text-lightBrown !font-normal text-left mt-[18px] underline">
                        <span className="relative inline-flex overflow-hidden">Ready to reserve?<div
                            className="absolute bottom-0 h-[5%] w-full bg-[rgb(177, 166, 150)] left-0"></div></span>
                        </div>
                    </a>
                    <div
                        className="bg-darkBrown overflow-hidden w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] fixed bottom-[20px] left-[20px]">
                        <div className="absolute top-0 left-0 bg-black/50 w-full h-full -z-1"></div>
                        <div>
                            <div
                                className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown">Cost
                            </div>
                        </div>
                        <div>
                            <div className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px] text-lightBrown">
                                <span className="text-white">2250.00 USD</span> / Night
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}