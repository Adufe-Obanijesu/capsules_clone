import type {IWhy} from "../../../data/why.ts";

export default function Card({details}: { details: IWhy }) {
    return (
        <div className="flex flex-col justify-between bg-darkBrown rounded-[30px] padding-x pt-[30px] h-[580px]">
            <div
                className="text-[23px] leading-[26px] tracking-[-0.2px] text-lightBrown font-medium mb-[140px] h-[80px] max-w-60">{details.title}
            </div>
            <div className="flex items-end md:items-center mb-[30px]">
                <div className="flex gap-[1px] h-[35px]">
                    <div
                        className="border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full">
                        <div
                            className="text-[14px] font-semibold leading-[18px] tracking-[-0.2px]text-white">{details.id.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div
                        className="border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.2]">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-semibold text-white">03
                        </div>
                    </div>
                </div>
                <p className="text-[14px] font-semibold text-white leading-[18px] ml-[20px]">{details.description}</p>
            </div>
            <div className="h-[256px] w-[calc(100%+10px] relative rounded-[30px] overflow-hidden -margin-x">
                <img className="object-cover object-center absolute w-full scale-[1.4] h-full"
                     src={details.img} alt={details.title}/></div>
        </div>
    )
}