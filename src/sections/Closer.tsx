import AnimatedUnderlineText from "../components/AnimatedUnderlineText.tsx";

export default function Closer() {
    return (
        <section className="text-white text-center py-28 padding-x flex justify-center">
            <div className="xl:w-[750px] lg:w-3/5 md:w-2/3 space-y-4">

                <p className="text-xs">Closer than you think</p>
                <h1 className="leading-[1]">
                    Our Capsules® are located near Los Angeles with easy <br/>
                    <AnimatedUnderlineText id="closer-underlined" color="lightBrown" hoverColor="white">
                        access by road.
                    </AnimatedUnderlineText>
                </h1>
            </div>
        </section>
    )
}