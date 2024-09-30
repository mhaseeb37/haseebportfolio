"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import styles from "@/app/ui/custom.module.css"
import { poppins } from "../fonts";
import Link from "next/link";
import { personalInfo } from "@/app/common/constant";

gsap.registerPlugin(TextPlugin);
export default function Top() {
    const words = personalInfo.hobbies;
    const container = useRef();
    useGSAP(()=>{
        const tl = gsap.timeline();
        tl.from(".char",{
            rotateX: -360,
            scaleY:0,
            opacity:0,
            duration: 0.2, // Infinite loop
            ease: "power2.inOut",
            yoyo: true,
            stagger: {
                each: 0.1, // Delay between animations of each element
            },
        })
        .to("#cursor",{
            opacity:0,
            repeat:-1,
            yoyo:true,
            duration:0.5,
            ease:"power2.inOut"
          });
          const tlmaster = gsap.timeline({repeat:-1});
          words.forEach((word)=>{
            let tlText = gsap.timeline({repeat:1,yoyo:true});
            tlText.to("#animated-text", {duration:2.5, text:word});
            tlmaster.add(tlText);
          });
          gsap.from(".topwaves", {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: {
              each: 0.2,
            },
            repeat: -1, // Infinite loop
            repeatDelay: 0.5, // Delay between repeats
          });
          gsap.from(".bottomWaves", {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: {
              each: 0.2,
            },
            repeat: -1, // Infinite loop
            repeatDelay: 0.5, // Delay between repeats
          });
    },[{ scope: container }]);

    return(
        <div id="top" className="topWrapper flex flex-wrap justify-center gap-y-14 items-center w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl py-16" ref={container}>
            <div className="textWrapper flex-1">
                <h4 className={`${poppins.className} font-normal uppercase text-black leading-none`}>
                    <div className="toptext text-2xl lg:text-4xl mb-8">
                        <div className="word mr-2 inline-block">
                            <div className="char inline-block">
                                H
                            </div>
                            <div className="char inline-block">
                                i
                            </div>
                            <div className="char inline-block">
                                ,
                            </div>
                        </div>
                        <div className="word mr-2 inline-block">
                            <div className="char inline-block mr-2">
                                I
                            </div>
                            <div className="char inline-block">
                                A
                            </div>
                            <div className="char inline-block">
                                M
                            </div>
                        </div>
                        {personalInfo.name.split(' ').map((word, wordIndex) => (
                            <div className="word mr-2 inline-block" key={wordIndex}>
                            {word.split('').map((char, charIndex) => (
                                <div className="char inline-block" key={charIndex}>
                                {char}
                                </div>
                            ))}
                            </div>
                        ))}
                    </div>
                    <div className="animatedtext text-3xl md:text-6xl font-bold mb-8">
                        <span id="animated-text"></span>
                        <span id="cursor">|</span>
                    </div>
                    <div className="bottomtext normal-case text-2xl lg:text-4xl">based in Lahore, Pakistan.</div>
                </h4>
                <div className="actionBtnsWrapper mt-10 flex gap-3">
                    <Link href="#projects" className="bg-black border-[#000000] border rounded-full capitalize text-[16px] hover:text-black hover:bg-transparent transition-all text-white font-bold px-5 py-3">
                        View my Work
                    </Link>
                    <Link href="#contact" className="border-[#000000] border rounded-full capitalize text-[16px] hover:text-white hover:bg-black transition-all text-black font-bold px-5 py-3">
                        Contact me
                    </Link>
                </div>
            </div>
            <div className="imageWrapper flex-none relative">
                <div className={`${styles.waves} opacity-100 group-hover:opacity-0 transition-opacity duration-300`}>
                        <span className={`${styles.wavesTopSpan} topwaves top-[0px] opacity-100`}></span>
                        <span className={`${styles.wavesTopSpan} topwaves top-[-12px] opacity-80`}></span>
                        <span className={`${styles.wavesTopSpan} topwaves top-[-25px] opacity-60`}></span>
                        <span className={`${styles.wavesTopSpan} topwaves top-[-37px] opacity-40`}></span>
                        <span className={`${styles.wavesTopSpan} topwaves top-[-50px] opacity-20`}></span>
                    </div>
                    <Image src="/assets/IMG_5733.png" width={100} height={100} alt="Haseeb" className="group-hover:opacity-100 w-80 h-80 object-cover rounded-full overflow-hidden" unoptimized/>
                    <div className={`${styles.wavesBottom} opacity-100 group-hover:opacity-0 transition-opacity duration-300`}>
                        <span className={`${styles.wavesBottomSpan} bottomWaves top-[0px] opacity-100`}></span>
                        <span className={`${styles.wavesBottomSpan} bottomWaves top-[12px] opacity-80`}></span>
                        <span className={`${styles.wavesBottomSpan} bottomWaves top-[25px] opacity-60`}></span>
                        <span className={`${styles.wavesBottomSpan} bottomWaves top-[37px] opacity-40`}></span>
                        <span className={`${styles.wavesBottomSpan} bottomWaves top-[50px] opacity-20`}></span>
                    </div>
                </div>
        </div>
    )
}