import {activities, type TActivity} from "../../../../data/adventure.tsx";

export default function MobileCarousel() {
    return (
        <section className="mt-12.5 overflow-hidden">
            <div className="flex gap-2.5 overflow-x-scroll">
                {
                    activities.map((activity) => <Card key={activity.id} activity={activity}/>)
                }
            </div>
        </section>
    )
}

function Card({activity}: { activity: TActivity }) {
    return (
        <div className="flex-none w-[80vw]">
            <div className="flex relative flex-col w-full h-[256px] rounded-[30px] overflow-hidden"><img
                src={activity.img} className="h-full w-full object-cover" alt="activity"/>
                <div
                    className="border-[2px] border-white px-[11px] py-[10px] h-[34px] rounded-full flex justify-center items-center absolute right-[20px] top-[20px]">
                    <div
                        className="text-[14px] leading-[18px] tracking-[-0.2px]  font-semibold text-white">{activity.difficulty}
                    </div>
                </div>
                <div className="flex gap-[1px] h-[35px] absolute left-[20px] bottom-[20px]">
                    <div
                        className="border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full">
                        <div
                            className="text-[14px]  leading-[18px] tracking-[-0.2px]  font-semibold text-white">{activity.id.toString().padStart(2, "0")}
                        </div>
                    </div>
                    <div
                        className="border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.5]">
                        <div
                            className="text-[14px] leading-[18px] tracking-[-0.2px] font-semibold text-white">{activities.length.toString().padStart(2, "0")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-[10px] mt-[30px] mb-[25px] text-wrap">
                <h4
                    className="text-[23px] leading-[26px] tracking-[-0.2px] text-white font-medium w-6/10">{activity.title}
                </h4>
                <div
                    className="text-[14px] leading-[18px] tracking-[-0.2px] text-lightBrown font-semibold mt-[18px]">{activity.desc}
                </div>
            </div>
        </div>
    )
}