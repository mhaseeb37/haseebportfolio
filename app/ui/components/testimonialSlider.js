import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidebox from "./slidebox";
import { testimonials } from "@/app/common/constant";
import TestimonialCard from "./testiSlideCard";

export default function TestimonialSlider(props){
    const settings = {
        className: "slider variable-width",
        dots: false,
        arrows:false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                  variableWidth: false,
                }
              }
        ]  
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((testimonial,index)=>(
                <TestimonialCard key={index} data={testimonial} />
            ))}
          </Slider>
        </div>
    )
}
