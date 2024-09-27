"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { lusitana } from "../fonts";

gsap.registerPlugin(ScrollTrigger);

export default function Titleoverlay(props){
    let gsapClass = props.overlayText.replace(/\s+/g, '');
    const container = useRef();
    
    useGSAP(()=>{
        gsap.to(`.${gsapClass}.titleOverlay`,{
            scrollTrigger:{
                trigger:`.${gsapClass}.titleOverlay`,
                start: "top 80%",
                end: "bottom top",
                scrub: true
            },
            yPercent: -80,
            duration:3
        });
    });
    return(
        <div className="aboutAboveWrapper relative" ref={container}>
            <span className={`${lusitana.className} ${gsapClass} titleOverlay absolute font-bold top-0 left-0 uppercase text-[64px] md:text-9xl opacity-20`}>
                {props.overlayText}
            </span>
            <div className="mainTitleWrapper py-8 pl-14 pt-11 border-l-2 border-[#ffffff]">
            <h4 className="text-[16px] md:text-[24px] font-semibold">{props.subTitle}</h4>
            <h2 className="text-2xl md:text-[80px] font-bold leading-none">{props.mainTitle}</h2>
            </div>
        </div>
    )
}
