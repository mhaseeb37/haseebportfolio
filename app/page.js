
import Hero from "./ui/components/hero";
import styles from "./ui/custom.module.css"

export default function Home() {
  return (
    <div className="overflow-hidden relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={`${styles.overlay} absolute z-20 w-auto min-w-full min-h-full max-w-none`}></div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="/assets/video-bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Hero />
    </div>
  );
}
