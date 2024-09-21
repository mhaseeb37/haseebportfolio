"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Sidebar from "@/app/ui/components/sidebar";
import Top from "../ui/components/top";
import About from "../ui/components/about";
import styles from "@/app/ui/custom.module.css"

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
export default function Page(){
  const container = useRef();
  useGSAP(() => {
    
  }, [{ scope: container }]);
    return(
        <div className="relative bg-white h-screen">
            <div className={`${styles.overlay} fixed z-20 w-auto min-w-full min-h-full max-w-none`}></div>
        <video
          autoPlay
          loop
          muted
          className="fixed z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/assets/video-bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
            <div className="w-full h-screen z-40 relative pt-[100px]" ref={container}>
                <div className="w-full px-3 md:pl-10">
                    <Top />
                    <About />
                </div>
                <div className="relative w-full hidden md:block flex-none md:w-64 text-black">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}