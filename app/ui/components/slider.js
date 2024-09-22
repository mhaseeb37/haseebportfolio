import React from "react";
import Slider from "react-slick";
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
                <Slidebox />
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
         </Slider>
    )
}
