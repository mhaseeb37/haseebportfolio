"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { lusitana } from "../fonts";
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


export default function Sidebar(){
  const container = useRef();
  useGSAP(()=>{
    let links = gsap.utils.toArray(".sideNav a");
    console.log("Links List", links);
    links.forEach(a => {
      let element = a.hash
      console.log("element",element)
      const linkST = gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          start:"top top"
        },
        scrollTrigger:{
          trigger:element,
          start:"top center",
          end:"bottom center",
          onToggle: self => self.isActive && setActive(a)
        }
      });
    a.addEventListener("click", e => {
      e.preventDefault();
      gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
  });
  function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
  }
  },[container]);
    return(
        <nav className="h-screen sideNav fixed top-32 right-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto" ref={container}>


      <div className="mt-4">
        <ul className="mt-2">
          <li>
            <Link href="#top" className="text-white text-[16x] block border-l-2 border-black pl-8 py-2.5 transition-all uppercase navlink1 relative">
                01 Top
                <span className="opacity-25 bg-black absolute top-0 left-0 right-0 bottom-0 w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="#aboutme" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink2 relative">
                02 About me
                <span className="opacity-0 hover:opacity-25 hover:w-full hover:bg-black absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#myservices" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink3 relative">
                03 My Services
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink4 relative">
                04 Skills
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#myfacts" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                05 Facts
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#experiences" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                06 Experiences
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                07 Projects
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#howwork" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                08 How I Work
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                09 Testimonial
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:border-black text-[16px] block border-l-2 pl-8 py-2.5 transition-all uppercase navlink relative">
                10 Contact
                <span className="opacity-0 hover:opacity-25 hover:bg-black hover:w-full absolute top-0 left-0 right-0 bottom-0 w-0"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    )
}