import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import TestimonialSlider from "./testimonialSlider";

export default function Testimonials() {
    return(
        <div id="testimonials" className={`${poppins.className} expWrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
            <Titleoverlay overlayText="Testimonials" subTitle="My Clients and Testimonials" mainTitle="My Clients Reviews" />
            <div className="testimonialSliderWrapper mt-8 pb-4">
                <TestimonialSlider dots={false} infinite={true} slidesToShow={2} slidesToScroll={1}/>
            </div>
        </div>
    )
}