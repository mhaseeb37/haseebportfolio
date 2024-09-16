"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Sidebar from "@/app/ui/components/sidebar";
import Top from "../ui/components/top";
import styles from "@/app/ui/custom.module.css"

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
export default function Page(){
  const container = useRef();
  useGSAP(() => {
    
  }, [{ scope: container }]);
    return(
        <div className="relative bg-white flex h-screen flex-col md:flex-row">
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
            <div className="w-full flex h-screen flex-col md:flex-row mt-32 z-40" ref={container}>
                <div className="w-full pl-10">
                    <Top />
                </div>
                <div className="relative w-full flex-none md:w-64 text-black">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}