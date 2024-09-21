"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { poppins, lusitana } from "../fonts";

export default function About() {
    const container = useRef();

    const body = document.querySelector('body');
    useGSAP(()=>{
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
                duration: 0.3
            });
            gsap.to(".expOutlineTwo", {
                x: offsetX + 5,
                y: offsetY + 5,
                ease: 'power3.out',
                duration: 0.3
            });
        });
    });

  return (
    <div className={`${poppins.className} aboutwrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`} ref={container}>
      <div className="aboutAboveWrapper relative">
        <span
          className={`${lusitana.className} titleOverlay absolute font-bold top-[-50px] left-0 uppercase text-[64px] md:text-9xl opacity-5`}
        >
          About Me
        </span>
        <div className="mainTitleWrapper py-8 pl-14 pt-11 border-l-2 border-[#000000]">
          <h4 className="text-[16px] md:text-[24px] font-semibold">Some Words About Me</h4>
          <h2 className="text-2xl md:text-[80px] font-bold leading-none">Know Me More</h2>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-4 py-4">
          <div className="col-span-12 md:col-span-8">
            <h2 className="text-4xl font-semibold leading-none mb-3">
              {'I\'m Muhammad Haseeb, a Web Developer'}
            </h2>
            <p className="text-xl font-normal">
              {'I\'m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client\'s requirements is our moto.'}
            </p>
            <div className="infoGrids grid grid-cols-3 mt-5 text-[14px]">
              <div>
                <p>Email:</p>
                <a href="mailto:info@muhammadhaseeb.site">
                  info@muhammadhaseeb.site
                </a>
              </div>
              <div>
                <p>Phone:</p>
                <a href="tel:+923224225997">+92 322 4225997</a>
              </div>
              <div>
                <p>Address:</p>
                <a
                  href="https://maps.app.goo.gl/NvRZgVvwQUTE9Lzo9"
                  target="_blank"
                >
                  Lahore, Pakistan
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 relative border bg-[#ffdb67] p-10 border-[#000000] before:block before:absolute before:-inset-0 before:rotate-2 before:w-full before:border before:border-[#000000] before:z-[-1] before:transition-transform before:duration-300 after:block after:absolute after:-inset-0 after:-rotate-2 after:w-full after:border after:border-[#000000] after:z-[-1] after:transition-transform after:duration-300 hover:before:rotate-0 hover:after:rotate-0">
            <div className="group yearsExpWrapper relative flex justify-center font-bold">
                <span className="expOutlineOne absolute inset-0 text-center text-[200px] translate-x-1 translate-y-1 group-hover:hidden" style={{
                    WebkitTextStroke: '1px #000',
                    WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
                }}>7</span>
                <span className="expOutlineTwo absolute inset-0 text-center text-[200px] translate-x-2 translate-y-2 group-hover:hidden" style={{
                    WebkitTextStroke: '1px #000',
                    WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
                }}>7</span>
                <span className="expNumber text-[200px]">7</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
