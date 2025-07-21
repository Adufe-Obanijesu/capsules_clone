import {testimonials} from "../../data/testimonials";
import {IoArrowBackSharp, IoArrowForwardSharp} from "react-icons/io5";
import AnimatedButton from "../../components/Button.tsx";
import Testimonial from "./Testimonial.tsx";
import useAnimation from "./useAnimation.tsx";

export default function Testimonials() {

    const {actions} = useAnimation()

    return (
        <section id="testimonials" className="text-white padding-x xl:px-8">
            <h2 className="sub-heading">Do people like us?</h2>
            <div className="my-10 space-y-12">
                <div className="grid grid-cols-1 grid-rows-1 gap-8">
                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}/>)
                    }
                </div>

                <div className="flex items-center justify-between gap-8">
                    <div className="flex gap-1">
                        <AnimatedButton
                            onClick={() => actions.setIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                            aria-label="Previous testimonial">
                            <IoArrowBackSharp/>
                        </AnimatedButton>
                        <AnimatedButton
                            aria-label="Next testimonial"
                            onClick={() => actions.setIndex(prev => (prev + 1) % testimonials.length)}>
                            <IoArrowForwardSharp/>
                        </AnimatedButton>
                    </div>

                    <div className="w-80 h-[1px] relative progress">
                        <div className="absolute w-full bg-white h-full opacity-[0.2]"/>
                        <div className="absolute w-full scale-x-33 bg-white h-full origin-left"/>
                    </div>
                </div>
            </div>
        </section>
    )
}