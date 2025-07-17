import AnimatedUnderlineText from "../components/AnimatedUnderlineText.tsx";
import {CursorButton} from "../components/Button.tsx";
import {MdArrowOutward} from "react-icons/md";
import CustomCursor from "../components/CustomCursor.tsx";

export default function Closer({setIsOpenMap}: { setIsOpenMap: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <section className="text-white text-center py-28 padding-x flex justify-center">
            <div className="xl:w-[750px] lg:w-3/5 md:w-2/3 space-y-4">

                <p className="text-xs">Closer than you think</p>
                <h1 className="leading-[1]">
                    Our Capsules® are located near Los Angeles with easy <br/>
                    <CustomCursor
                        cursorHide={false}
                        cursor={<CursorButton text="Show the Map" Icon={MdArrowOutward}/>}
                    >
                        <AnimatedUnderlineText id="closer-underlined" color="lightBrown" hoverColor="white"
                                               onClick={() => setIsOpenMap(true)}
                        >
                            access by road.
                        </AnimatedUnderlineText>
                    </CustomCursor>
                </h1>
            </div>
        </section>
    )
}