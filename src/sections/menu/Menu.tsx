import {menus} from "../../data/menu.ts";
import {socials} from "../../data/footer.ts";
import AnimatedButton from "../../components/Button.tsx";
import {cn} from "../../utils/tailwind.ts";
import Marquee from "./Marquee.tsx";

export default function Menu() {
    return (
        <section id="menu-section"
                 className="fixed overflow-y-auto inset-0 p-2.5 z-30 h-screen w-screen pointer-events-none">
            <div id="menu-container"
                 className="relative z-40 min-h-full flex flex-col xl:flex-row bg-middleBrown xl:rounded-[1000px] xl:scale-x-0 scale-y-0">

                <div className="px-6 py-12 flex-1 flex flex-col gap-4 justify-between">
                    <ul>
                        {
                            menus.map((menu, index) => (
                                <li key={menu.id}
                                    className={cn("w-fit cursor-pointer text-[clamp(40px,2vw,100px)] xl:text-[clamp(60px,3vw,100px)] leading-[1] text-lightBrown hover:text-white transition-item", {"xl:hidden": index === menus.length - 1}, "duration-300")}>{menu.name}</li>
                            ))
                        }
                    </ul>

                    <div className="flex flex-col xl:flex-row xl:items-center gap-6">
                        <h6 className="invisible xl:translate-x-5 text-white order-1 xl:order-2 xl:text-sm text-[clamp(1rem, 4vw, 1.5rem)]">
                            <span className="xl:hidden">
                            Meet
                            Capsules®-modern and cozy <br/>houses,
                            in the
                            California desert.
                            </span>
                            <span className="hidden xl:inline text-lightBrown font-semibold">
                                This website is just the concept work
<br/>done by—Moyra to showcase our capabilities.
                            </span>
                        </h6>

                        <div className="flex items-center order-2 xl:order-1">
                            {
                                socials.map(({id, Icon, href}) => (
                                        <a href={href} key={id}>
                                            <AnimatedButton variant="white-outline"
                                                            className="invisible social xl:scale-0 h-14 w-14 xl:h-12 xl:w-12"><Icon
                                                className="xl:text-xl text-2xl"/></AnimatedButton>
                                        </a>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        id="menu-image"
                        className="invisible xl:translate-x-full relative overflow-hidden h-[300px] xl:h-full w-full xl:w-[400px] mt-2 mr-2 xl:max-h-[calc(100vh-36px)] rounded-[40px]">
                        <picture>
                            <source srcSet="/images/cap1.webp" media="(min-width: 1240px)"/>
                            <img src="/images/cap1-mobile.webp" alt="menu" loading="lazy"
                                 className="scale-140 w-full h-full object-cover object-center"/>
                        </picture>
                        <div
                            className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Marquee/>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="menu-overlay"
                className="w-[calc(100vw+10px)] h-[calc(100vh+10px)] bg-tertiary fixed z-10 -top-2.5 -left-2.5 opacity-0 pointer-events-none"/>
        </section>
    )
}