"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function OutlineNumber(props){
    const container = useRef();

    //const body = document.querySelector('body');
    const body = typeof document !== 'undefined' ? document.querySelector('body') : null;
    
    useGSAP(()=>{
        if(body){
            body.addEventListener('mousemove',function(e){
                // Get the element's bounding box
                const rect = body.getBoundingClientRect();
                
                // Calculate the cursor position relative to the element
                const x = e.clientX - rect.left;  // X-coordinate inside the element
                const y = e.clientY - rect.top;   // Y-coordinate inside the element

                // Calculate the shadow offset based on cursor position (center it)
                const offsetX = (x - rect.width / 2) / 150;
                const offsetY = (y - rect.height / 2) / 150;

                // Use GSAP to animate the shadow position dynamically
                gsap.to(".expOutlineOne", {
                    x: offsetX,
                    y: offsetY,
                    ease: 'power3.out',
                    duration: 0.1
                });
                gsap.to(".expOutlineTwo", {
                    x: offsetX + 5,
                    y: offsetY + 5,
                    ease: 'power3.out',
                    duration: 0.1
                });
                
            });
        }
    });
    return(
        <div className="group yearsExpWrapper relative text-black flex justify-center font-bold transition-all" ref={container}>
            <span className={`expOutlineOne absolute inset-0 text-center text-[${props.fontsize}px] ${props.outlinehidden ? 'hidden' : 'group-hover:hidden'} transition-all duration-300`} style={{
                WebkitTextStroke: '1px #000',
                WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
            }}>{props.number}</span>
            <span className={`expOutlineTwo absolute inset-0 text-center text-[${props.fontsize}px] ${props.outlinehidden ? 'hidden' : 'group-hover:hidden'} transition-all duration-300`} style={{
                WebkitTextStroke: '1px #000',
                WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
            }}>{props.number}</span>
            <span className={`expNumber text-[${props.fontsize}px]`}>{props.number}</span>
        </div>
    )
}