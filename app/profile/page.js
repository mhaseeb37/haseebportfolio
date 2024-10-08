"use client";
import { useEffect, useRef } from "react";
import Sidebar from "@/app/ui/components/sidebar";
import Top from "../ui/components/top";
import About from "../ui/components/about";
import Services from "../ui/components/services";
import styles from "@/app/ui/custom.module.css"
import Facts from "../ui/components/facts";
import Experience from "../ui/components/experience";
import Testimonials from "../ui/components/testimonials";
import ContactMe from "../ui/components/contactme";
import Blogs from "../ui/components/blogs";
import Skills from "../ui/components/skills";
import Projects from "../ui/components/projects";
import HowIWork from "../ui/components/howwork";
import Image from "next/image";

export default function Page(){
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Check if it's a mobile device (width < 768px)
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Pause video on mobile devices
      video.pause();
    }
  }, []);
    return(
        <div className="relative bg-white h-screen">
            <div className={`${styles.overlay} fixed z-20 w-auto min-w-full min-h-full max-w-none`}></div>
        <video ref={videoRef}
          autoPlay
          loop
          muted
          className="fixed hidden md:block z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/assets/video-bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Image src="/assets/mobile-bg.jpg" width={100} height={100} alt="background" className="block md:hidden object-cover object-left fixed z-10 min-w-full min-h-full" />
            <div className="w-full h-screen z-40 relative pt-[100px]">
                <div className="w-full px-3 md:pl-10">
                    <Top />
                    <About />
                    <Services />
                    <Skills />
                    <Facts />
                    <Experience />
                    <Projects/>
                    <HowIWork/>
                    <Blogs />
                    <Testimonials />
                    <ContactMe />
                </div>
                <div className="relative w-full hidden md:block flex-none md:w-64 text-black">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}