import type {ITestimonial} from "../../data/testimonials.ts";

export default function Testimonial({testimonial}: { testimonial: ITestimonial }) {
    return (
        <div className="col-start-1 row-start-1 relative testimonial w-full">
            <div className="space-y-10">

                <h1 className="md:lg-text md-text leading-[1.1] w-full xl:w-8/10 h-[140px] md:h-[300px] xl:h-[365px]">
                    {testimonial.desc}
                </h1>
                <div className="flex items-center gap-4">
                    <div className="avatar w-14 h-14 rounded-full relative overflow-hidden"><img
                        alt={testimonial.name}
                        className="object-cover object-center absolute w-full h-full "
                        src={testimonial.img}/>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-normal text-sm text-lightBrown">{testimonial.name}<br/>({testimonial.location})
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}