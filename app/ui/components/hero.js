"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import styles from "../custom.module.css";

export default function Hero() {
  const container = useRef();
  useGSAP(() => {
    gsap.set(".mainWrapper", { scale: 0.7, opacity:0 });

    const tl = gsap.timeline();
    tl.from(".mainWrapper", { opacity: 0 })
      .from(".title", { opacity: 0, scale: 0, ease: "back" })
      .from("#sheikhsImg img", {
        opacity:0,
        y: 360,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
      })
      .from("#actionBtns", { xPercent: -100 })
      .from("#textBoxes", { opacity: 0, scale:0 })
      .from('.round', {
        scale: 0,
        duration: 1,        // Infinite loop
        ease: 'power2.inOut',
        yoyo: true,
        stagger: {
          each: 0.2,      // Delay between animations of each element
        },
      });
  }, [{scope:container}]);
  return (
    <div
      className="bg-[url('../public/assests/97634.jpg')] bg-left bg-no-repeat bg-contain fixed z-30 font-sans bg-gray-50 my-10 px-6 py-12 overflow-hidden shadow-xl rounded-md"
      ref={container}
    >
      <div className={`${styles.absoluteOverlay}`}></div>
      <div className="max-w-5xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-black lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px] title">
              Hello!
            </h2>
            <p className="text-black mt-6 text-base leading-relaxed title">
              I am Muhammad Haseeb. Welcome to my world!
            </p>
            <div className="mt-12" id="actionBtns">
              <Link
                href="/profile"
                className="profilebtn bg-black border-black border border-inherit hover:text-black hover:bg-gray-100 transition-all text-gray-50 font-bold text-sm rounded px-5 py-3"
              >
                Explore About Me
              </Link>
              <Link
                href="/contact"
                className="text-black text-sm font-bold sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div id="sheikhsImg">
            <img
              src="https://readymadeui.com/readymadeui_banner.webp"
              className="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-full object-contain"
            />
          </div>
        </div>
      </div>
      <div ref={container} className="textBoxes flex gap-4 mt-2">
        <div
          className={`${styles.circle} flex justify-center items-center round gradient-blue`}
        >
          My
        </div>
        <div
          className={`${styles.circle} flex justify-center items-center round gradient-blue`}
        >
          World
        </div>
        <div
          className={`${styles.circle} flex justify-center items-center round gradient-blue`}
        >
          Is
        </div>
        <div
          className={`${styles.circle} flex justify-center items-center round gradient-blue`}
        >
          Amazing
        </div>
        <div
          className={`${styles.circle} flex justify-center items-center round gradient-blue`}
        >
          and
        </div>
        <div
          className={`${styles.circle} flex justify-center items-center round gradient-blue`}
        >
          Beautiful
        </div>
      </div>
    </div>
  );
}
