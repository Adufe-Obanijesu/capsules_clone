import AnimatedUnderlineText from "../components/AnimatedUnderlineText.tsx";
import {Cursor} from "../components/Button.tsx";
import {MdArrowOutward} from "react-icons/md";
import CustomCursor from "../components/CustomCursor.tsx";

export default function Closer({setIsOpenMap}: { setIsOpenMap: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <section className="text-white text-center py-28 padding-x flex justify-center">
            <div className="xl:w-[750px] lg:w-3/5 md:w-2/3 space-y-4 relative">

                <h2 className="sub-heading">Closer than you think</h2>
                <div className="heading-3 leading-[1]">
                    Our Capsules® are located near Los Angeles with easy <br/>
                    <CustomCursor
                        cursorHide={false}
                        cursor={<Cursor text="Show the Map" Icon={MdArrowOutward}/>}
                    >
                        <button onClick={() => setIsOpenMap(true)} aria-label="Open map">
                            <AnimatedUnderlineText id="closer-underlined" color="lightBrown" hoverColor="white"
                            >
                                access by road.
                            </AnimatedUnderlineText>
                        </button>
                    </CustomCursor>
                </div>
            </div>
        </section>
    )
}