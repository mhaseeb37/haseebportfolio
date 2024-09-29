import { poppins } from "../fonts";
import Titleoverlay from "./titleoverlay"
import Sliderslick from "./slider";
export default function Services(){
    return(
        <div id="myservices" className={`${poppins.className} servicesWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
            <Titleoverlay overlayText="My Services" subTitle="How I can help your next project" mainTitle="What I Do?" />
            <Sliderslick dots={false} infinite={true} slidesToShow={2} slidesToScroll={1} />
        </div>
    )
}