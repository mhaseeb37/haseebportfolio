
'use client';
import Hero from "./ui/components/hero";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ui/custom.module.css"

export default function Home() {
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
  return (
    <div className="overflow-hidden relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={`${styles.overlay} absolute z-20 w-auto min-w-full min-h-full max-w-none`}></div>
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
        <Hero />
    </div>
  );
}
