"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
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
import CustomParticles from "../ui/components/particles";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
export default function Page(){
  const container = useRef();
  useGSAP(() => {
    
  }, [{ scope: container }]);
    return(
        <div className="relative">
          <div className="absolute inset-0 w-full h-full z-20">
            <CustomParticles />
          </div>
          <div className="w-full relative z-40 pt-[100px]" ref={container}>
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
              <div className="relative w-full hidden md:block flex-none md:w-64 text-white">
                  <Sidebar />
              </div>
          </div>
        </div>
    )
}