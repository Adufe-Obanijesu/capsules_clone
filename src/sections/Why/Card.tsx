import type {IWhy} from "../../data/why.ts";

interface Props {
    details: IWhy,
    whys: IWhy[],
    multiple?: boolean
}

export default function Card({details, whys, multiple = false}: Props) {
    return (
        <div
            className="card flex flex-col justify-between bg-darkBrown rounded-[30px] padding-x xl:px-6 pt-[30px] h-[580px] xl:h-[98vh]">
            <div className="relative why-card-title">
                <h1
                    className="text-[23px] xl:md-text leading-[26px] tracking-[-0.2px] text-lightBrown font-medium mb-[140px] h-[80px] max-w-60 xl:max-w-80 xl:leading-[1.05]">{details.title}
                </h1>
                {(multiple && details.id !== whys[whys.length - 1].id) && (
                    <h1
                        className="absolute top-0 left-0 -z-1 text-[23px] xl:md-text leading-[26px] tracking-[-0.2px] text-lightBrown font-medium mb-[140px] h-[80px] max-w-60 xl:max-w-80 xl:leading-[1.05]">{whys[details.id].title}
                    </h1>
                )}
            </div>
            <div className="flex items-end md:items-center mb-[30px]">
                <div className="xl:flex-1 flex gap-[1px] h-[35px]">
                    <div
                        className="border-[2px] xl:border-[1px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full xl:w-9 xl:h-9">
                        <div
                            className="card-number text-[14px] xl:text-xs font-semibold leading-[18px] tracking-[-0.2px] text-white">{details.id.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div
                        className="border-[2px] xl:border-[1px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.2] xl:w-9 xl:h-9">
                        <div
                            className="text-[14px] xl:text-xs leading-[18px] tracking-[-0.2px] font-semibold text-white">{whys.length.toString().padStart(2, "0")}
                        </div>
                    </div>
                </div>
                <div className="relative why-card-description">
                    <p className="xl:flex-1 text-[14px] font-semibold text-white leading-[18px] ml-[20px]">{details.description}</p>
                    {(multiple && details.id !== whys[whys.length - 1].id) && (
                        <p className="absolute top-0 left-0 xl:flex-1 text-[14px] font-semibold text-white leading-[18px] ml-[20px] -z-1">{whys[details.id].description}</p>
                    )}
                </div>
            </div>
            <div
                className="h-[256px] w-[calc(100%+10px] relative rounded-[30px] overflow-hidden -margin-x xl:hidden">
                <picture>
                    <source srcSet={details.img} media="(min-width: 1240px)"/>
                    <img className="object-cover object-center absolute w-full scale-[1.4] h-full"
                         src={details.imgMobile} alt={details.title} loading="lazy"/>
                </picture>
            </div>
        </div>
    )
}