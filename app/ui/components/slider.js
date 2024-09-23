import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidebox from "./slidebox";
import { slideData } from "@/app/common/constant";

export default function Sliderslick(props){
    var settings = {
        dots: props.dots,
        infinite: props.infinite,
        speed: 500,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToScroll,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false    
      };
    return(
        <Slider {...settings}>
            {slideData.map((slide, index) => (
            <div key={index} className="p-10">
                <Slidebox slide={slide} />
            </div>
            ))}
         </Slider>
    )
}
