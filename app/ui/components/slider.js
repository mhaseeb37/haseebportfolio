import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidebox from "./slidebox";

export default function Sliderslick(props){
    var settings = {
        dots: props.dots,
        infinite: props.infinite,
        speed: 500,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToScroll,
      };
    return(
        <Slider {...settings}>
            <div className="p-10">
                <Slidebox number={1}/>
            </div>
            <div className="p-10">
                <Slidebox number={2}/>
            </div>
            <div className="p-10">
                <Slidebox number={3}/> 
            </div>
            <div className="p-10">
                <Slidebox number={4}/>
            </div>
            <div className="p-10">
                <Slidebox number={5}/>
            </div>
            <div className="p-10">
                <Slidebox number={6}/>
            </div>
         </Slider>
    )
}
