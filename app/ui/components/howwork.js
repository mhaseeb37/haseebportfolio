"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import { workProcess } from "@/app/common/constant";

export default function HowIWork() {
    const container = useRef();
    useGSAP(() => {
        gsap.from(".workProcess", {
            scale: 0,
            duration: 1, // Infinite loop
            ease: "power2.inOut",
            yoyo: true,
            stagger: {
              each: 0.2, // Delay between animations of each element
            },
            scrollTrigger: {
              trigger: ".workProcess", // Element that triggers the animation
              start: "top 80%", // Starts when the bottom of the element is 80% from the bottom of the viewport
              toggleActions: "play none none reverse", // Defines behavior on scroll in and out
            },
          });
    },[{ scope: container }]);
    return(
        <div id="howwork" className={`${poppins.className} workWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
            <Titleoverlay overlayText="How I Work" subTitle="How I Work" mainTitle="My Working Process"/>
            <div className="flex mt-4 md:mt-10">
                {workProcess.map((work,index)=> (
                    <div className="workProcess flex flex-col justify-center align-middle w-52 h-52 p-10 text-black font-semibold text-center relative before:absolute before:block before:content-[''] before:-left-[4px] before:w-2 before:h-2 before:rounded-full before:bg-black after:absolute after:block after:content-[''] after:-right-[4px] after:w-2 after:h-2 after:rounded-full after:bg-black">
                        <p>0{index+1}.</p>
                        <p className="text-lg uppercase">{work}</p>
                        <span className="borderBox before:absolute before:w-full before:h-1/2 before:content-[''] before:border-t-[2px] before:border-dashed before:border-black before:top-0 before:left-0 before:rounded-t-[208px] after:absolute after:w-full after:h-1/2 after:content-[''] after:border-b-[2px] after:border-black after:bottom-0 after:left-0 after:rounded-b-[208px]"></span>
                    </div>
                ))}
            </div>
        </div>  
    )
}