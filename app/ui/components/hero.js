"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from "next/link";
import styles from "../custom.module.css";
import Image from "next/image";
import { lusitana, playfairDisplay, whisper } from '@/app/ui/fonts';
import { personalInfo } from "@/app/common/constant";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
  const [data, setData] = useState();
  const [cwords, setCWords] = useState([]); // State to hold data from API
  const [isLoading, setIsLoading] = useState(true);
  const words = personalInfo.hobbies;
  const container = useRef();
  // Fetching data from your Next.js API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/contentful'); // Adjust API route if necessary
        const data = await response.json();
        setData(data);
        setCWords(data[0].fields.hobbies); // Assuming `hobbies` is the key in the response
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("Data",data);
  console.log("CWords",cwords);
  
  useGSAP(() => {
    if (!isLoading) {
    gsap.set(".mainWrapper", { scale: 1 });

    const tl = gsap.timeline();
    tl.from(".mainWrapper", { scale: 0.7, ease:"back" })
      .from(".title", { opacity: 0, scale: 0, ease: "back" })
      .from(".title2", { opacity: 0, scale: 0, ease: "back" })
      .from(".animatedWrapper", { opacity: 0, scale: 0, ease: "back" })
      .from("#sheikhsImg img", {
        opacity: 0,
        xPercent: 100,
        stagger: 0.1,
        duration: 0.8,
        ease: "back",
      })
      .from("#actionBtns", { xPercent: -100 })
      .from(".round", {
        scale: 0,
        duration: 1, // Infinite loop
        ease: "power2.inOut",
        yoyo: true,
        stagger: {
          each: 0.2, // Delay between animations of each element
        },
      });
      gsap.to("#cursor",{
        opacity:0,
        repeat:-1,
        yoyo:true,
        duration:0.5,
        ease:"power2.inOut"
      });
      const tlmaster = gsap.timeline({repeat:-1});
      cwords.forEach((word)=>{
        let tlText = gsap.timeline({repeat:1,yoyo:true});
        tlText.to("#animated-text", {duration:1.5, text:word});
        tlmaster.add(tlText);
      });
    }
  }, [isLoading]);
  if(!data) return <div>Loading...</div>
  else
  return (
    <div
      className="mainWrapper fixed z-30 font-sans my-10 px-6 py-12 overflow-hidden shadow-xl rounded-md"
      ref={container}
    >
      <div className={`${styles.absoluteOverlay}`}></div>
      <div className="p-3 max-w-5xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-12">
          <div>
            <h2 className={`${lusitana.className} text-black lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px] title`}>
              {data[0].fields.greeting}
            </h2>
            <div className={`${playfairDisplay.className} text-black mt-6 leading-relaxed title2`}>
              <h3 className="text-3xl">I am</h3>
              <h1 className={`${whisper.className} lg:text-6xl md:text-4xl text-5xl`}>{data[0].fields.name}</h1>
            </div>
            <div className={`${whisper.className} text-black text-5xl animatedWrapper mt-4`}>
              <span className="mr-5">A</span>
              
              <span id="animated-text"></span>
              <span id="cursor">_</span>
            </div>
            <div className="mt-12" id="actionBtns">
              <Link
                href="/profile"
                className="profilebtn mr-3 bg-black border-black border border-inherit hover:text-black hover:bg-gray-100 transition-all text-gray-50 font-bold text-sm rounded px-5 py-3"
              >
                Explore About Me
              </Link>
              <Link
                href="/contact"
                className="text-black text-sm font-bold sm:ml-6 max-sm:mt-4 whitespace-nowrap hover:underline"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div id="sheikhsImg" className="static inset-y-0 right-0 w-full md:absolute sm:w-1/2">
            <Image
              src={data[0].fields.profilePicture.fields.file.url}
              className="shrink-0 w-1/2 md:w-full h-full mx-auto object-contain md:rounded-tl-full md:rounded-bl-full md:rounded-tr-none md:rounded-br-none rounded-full"
              width={100}
              height={100}
              unoptimized
              alt="Haseeb"
            />
          </div>
        </div>
      </div>
      <div ref={container} className="textBoxes flex gap-4 mt-4 md:mt-10">
        <div className={`${styles.svgLogos} flex justify-center items-center round gradient-blue`}>
          <svg className="hover:scale-150 hover:cursor-pointer transition-all" width="100px" height="100px" viewBox="-3 0 48 48" version="1.1">
            <g
              id="Color-"
              transform="translate(-203.000000, -660.000000)"
              fill="#81BF37"
            >
              <path
                d="M233.8471,666.99462 C234.633657,667.77951 235.525036,668.6685 235.525036,668.6685 C235.525036,668.6685 239.195316,668.9415 239.368457,668.9565 C239.54309,668.9715 239.753545,669.105 239.786382,669.3465 C239.819219,669.588 245,704.7915 245,704.7915 L232.287087,707.554966 L233.8471,666.99462 Z M231.896906,665.661214 C231.799504,665.673829 231.715018,665.693029 231.656242,665.7105 C231.624898,665.7195 231.099506,665.883 230.229326,666.153 C229.377057,663.69 227.874018,661.4265 225.230641,661.4265 C225.157504,661.4265 225.081382,661.4295 225.006752,661.434 C224.254487,660.435 223.32311,660 222.518604,660 C216.358684,660 213.415295,667.74 212.492875,671.6715 C210.09876,672.417 208.398699,672.9465 208.182274,673.0155 C206.844913,673.437 206.80312,673.479 206.628487,674.7435 C206.495647,675.702 203,702.8715 203,702.8715 L230.239774,708 L230.268734,707.993705 L231.896906,665.661214 Z M224.805252,667.572 C224.805252,667.6665 224.80376,667.7535 224.80376,667.8405 C223.303707,668.307 221.675291,668.814 220.042397,669.3225 C220.958847,665.7675 222.676819,664.05 224.179857,663.402 C224.557482,664.356 224.805252,665.7255 224.805252,667.572 Z M222.348449,661.6605 C222.615622,661.6605 222.882796,661.752 223.139522,661.929 C221.164825,662.862 219.049824,665.214 218.155762,669.909 C216.849746,670.3155 215.573581,670.713 214.392942,671.0805 C215.439248,667.4985 217.924411,661.6605 222.348449,661.6605 Z M223.409681,682.593 C223.409681,682.593 221.815594,681.738 219.861793,681.738 C216.99602,681.738 216.851238,683.5455 216.851238,684 C216.851238,686.4855 223.296244,687.438 223.296244,693.258 C223.296244,697.836 220.406589,700.785 216.509435,700.785 C211.83315,700.785 209.44202,697.86 209.44202,697.86 L210.694303,693.7035 C210.694303,693.7035 213.1526,695.8245 215.2273,695.8245 C216.58108,695.8245 217.133338,694.752 217.133338,693.969 C217.133338,690.7275 211.84509,690.582 211.84509,685.2555 C211.84509,680.7735 215.046697,676.4355 221.509613,676.4355 C223.999254,676.4355 225.230641,677.1525 225.230641,677.1525 L223.409681,682.593 Z M226.418743,667.338 C226.418743,667.1745 226.420235,667.014 226.420235,666.8385 C226.420235,665.3085 226.208287,664.0755 225.869469,663.099 C227.232204,663.27 228.139699,664.8285 228.723302,666.621 C228.039696,666.834 227.262056,667.0755 226.418743,667.338 Z"
                id="Shopify"
              ></path>
            </g>
          </svg>
        </div>
        <div className={`${styles.svgLogos} flex justify-center items-center round gradient-blue`}>
          <svg className="hover:scale-150 hover:cursor-pointer transition-all"
            fill="#000000"
            height="100px"
            width="100px"
            version="1.1"
            id="Layer_1"
            viewBox="-143 145 512 512"
          >
            <g>
              <path
                d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"
              />
              <path d="M115.3,412.2L76.9,523.8c11.5,3.4,23.6,5.2,36.2,5.2c14.9,0,29.2-2.6,42.5-7.3c-0.3-0.6-0.7-1.1-0.9-1.7L115.3,412.2z" />
              <path d="M-15,401c0,50.6,29.4,94.5,72.1,115.2l-61-167.3C-11,364.8-15,382.4-15,401z" />
              <path
                d="M226.2,352.7c0,13-2.4,27.6-9.7,45.8l-39.1,113c38-22.2,63.6-63.4,63.6-110.6c0-22.3-5.7-43.2-15.7-61.4
		C225.9,343.7,226.2,348,226.2,352.7z"
              />
              <path
                d="M199.4,394.5c0-15.8-5.7-26.8-10.6-35.3c-6.5-10.5-12.6-19.5-12.6-30c0-11.8,8.9-22.7,21.5-22.7c0.5,0,1.1,0.1,1.6,0.1
		c-22.8-20.9-53.1-33.6-86.4-33.6c-44.7,0-84.1,23-107,57.7c3,0.1,5.8,0.2,8.2,0.2c13.4,0,34.1-1.6,34.1-1.6
		c6.9-0.4,7.7,9.7,0.8,10.6c0,0-6.9,0.8-14.6,1.2L81,479.7l28-84l-20-54.6c-6.9-0.4-13.4-1.2-13.4-1.2c-6.9-0.4-6.1-11,0.8-10.6
		c0,0,21.1,1.6,33.7,1.6c13.4,0,34.1-1.6,34.1-1.6c6.9-0.4,7.7,9.7,0.8,10.6c0,0-6.9,0.8-14.6,1.2l46.3,137.6l12.8-42.6
		C196.2,419.3,199.4,405.5,199.4,394.5z"
              />
            </g>
          </svg>
        </div>
        <div className={`${styles.svgLogos} flex justify-center items-center round gradient-blue`}>
          <svg className="hover:scale-150 hover:cursor-pointer transition-all"
            width="100px"
            height="100px"
            viewBox="0 -191.5 512 512"
            version="1.1"
          >
            <g>
              <path
                d="M165.324756,50.3575405 C165.324756,41.1728319 156.393418,31.4180379 140.937771,31.4180379 C123.581838,31.4180379 104.51565,44.1499443 101.60188,69.5504145 C98.624768,95.2042558 114.587158,106.605963 130.676234,106.605963 C146.76531,106.605963 155.189905,100.335024 163.804528,91.9737721 C156.393418,82.6623778 146.828653,86.9696895 144.991711,87.9198317 C142.964741,88.9333168 140.367685,90.3268588 135.046889,90.3268588 C128.839292,90.3268588 122.505011,87.5397748 122.505011,75.9480391 C162.2843,72.0207844 165.324756,59.5422492 165.324756,50.3575405 Z M145.625139,51.8777682 C145.371768,54.728195 144.231597,59.605592 124.088581,62.3293332 C128.33255,47.2537424 136.440431,46.1135717 140.177657,46.1135717 C143.661512,46.1135717 145.87851,48.8373129 145.625139,51.8777682 Z M78.2283806,54.3481381 C78.2283806,54.3481381 69.6771001,81.205493 68.9803291,83.4224916 C68.7269578,81.1421502 62.4560188,32.9382655 62.4560188,32.9382655 C47.8871706,32.9382655 40.096004,43.3264877 35.9787208,54.2847952 C35.9787208,54.2847952 25.5904986,81.205493 24.7036991,83.4858345 C24.6403563,81.3955215 23.1201287,54.6015093 23.1201287,54.6015093 C22.2333292,41.1728319 9.94482247,33.0016083 0,33.0016083 L12.0351355,106.035878 C27.3007547,105.972535 35.535321,95.6476556 39.8426327,84.689348 C39.8426327,84.689348 49.0273413,60.9357912 49.4073982,59.8589633 C49.4707411,60.8724483 55.9950513,106.035878 55.9950513,106.035878 C71.3240134,106.035878 79.5585797,96.3444266 83.992577,85.7661759 L105.465792,33.0016083 C90.3268588,33.0016083 82.3456637,43.3264877 78.2283806,54.3481381 Z M221.573178,31.2913522 C212.135098,31.2913522 204.914017,36.4221205 198.833107,43.9599159 L198.833107,43.8965731 L204.280589,0 C191.738711,0 181.540517,10.8949647 179.57689,27.1107262 L170.075467,105.465792 C177.296548,105.465792 184.961029,103.375479 189.078313,98.0546827 C192.752196,102.805394 198.263021,106.605963 206.434245,106.605963 C227.590746,106.605963 242.096251,82.0289496 242.096251,58.9721638 C241.969566,37.9423481 231.771372,31.2913522 221.573178,31.2913522 Z M219.609551,68.9803291 C217.392552,81.8389212 210.234814,90.5802301 203.330447,90.5802301 C196.362737,90.5802301 193.385624,87.476432 193.385624,87.476432 C194.715823,76.2014104 195.53928,69.2970432 198.072993,63.3428183 C200.606705,57.3885933 206.624273,47.8871706 212.895212,47.8871706 C219.039466,47.8871706 221.82655,56.0583942 219.609551,68.9803291 Z M294.924162,33.0016083 L280.165285,33.0016083 L280.228628,32.2414945 C281.242113,22.6133861 283.522455,17.5459607 291.06025,16.722504 C296.191018,16.2157615 298.47136,13.5553631 299.041445,10.6415935 C299.484845,8.36125201 300.878387,0.443399728 300.878387,0.443399728 C271.233948,0.253371273 261.922554,13.0486206 259.515526,32.5582086 L259.452184,33.0016083 L259.13547,33.0016083 C254.321415,33.0016083 249.000619,38.4490907 248.113819,45.3534579 L247.797105,47.8871706 L257.678585,47.8871706 L249.380675,116.4241 L246.846963,128.712607 C247.163677,128.712607 247.543734,128.77595 247.860448,128.77595 C261.732525,128.269207 270.60052,117.310899 272.564147,101.411852 L279.025114,47.8871706 L283.64914,47.8871706 C288.209823,47.8871706 293.53062,43.3264877 294.480762,35.7253495 L294.924162,33.0016083 Z M371.695658,31.7347519 C354.656439,31.7347519 338.567364,44.27663 333.626624,63.9762464 C328.685884,83.6758629 336.160337,106.98602 361.244093,106.98602 C386.264506,106.98602 400.706668,82.7257206 400.706668,62.5193616 C400.706668,42.4396882 387.087962,31.7347519 371.695658,31.7347519 Z M378.600025,68.3469009 C377.713225,77.2782383 373.785971,90.8336014 363.017691,90.8336014 C352.18607,90.8336014 353.706297,74.9978968 354.783125,67.4601014 C355.923296,59.4155635 360.420636,47.9505134 370.112087,47.9505134 C378.790053,47.9505134 379.61351,58.2753928 378.600025,68.3469009 Z M484.889274,54.3481381 C484.889274,54.3481381 476.337993,81.205493 475.641222,83.4224916 C475.387851,81.1421502 469.116912,32.9382655 469.116912,32.9382655 C454.548064,32.9382655 446.756897,43.3264877 442.639614,54.2847952 C442.639614,54.2847952 432.251392,81.205493 431.364592,83.4858345 C431.30125,81.3955215 429.781022,54.6015093 429.781022,54.6015093 C428.894222,41.1728319 416.605716,33.0016083 406.660893,33.0016083 L418.632686,106.035878 C433.898305,105.972535 442.132871,95.6476556 446.440183,84.689348 C446.440183,84.689348 455.624892,60.9357912 455.941606,59.8589633 C456.004949,60.8724483 462.529259,106.035878 462.529259,106.035878 C477.858221,106.035878 486.092787,96.3444266 490.526785,85.7661759 L512,33.0016083 C496.924409,33.0016083 488.943214,43.3264877 484.889274,54.3481381 Z M308.859582,0.443399728 L296.444389,100.588395 L296.444389,100.588395 L293.910677,112.940245 C294.227391,112.940245 294.607448,113.003588 294.924162,113.003588 L294.924162,113.003588 C308.289496,112.813559 317.790919,101.095138 319.564518,86.3362613 L326.722257,28.8843251 C328.875912,11.3383645 318.424347,0.443399728 308.859582,0.443399728 Z"
                fill="#4353FF"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
        <div className={`${styles.svgLogos} flex justify-center items-center round gradient-blue`}>
          <svg className="hover:scale-150 hover:cursor-pointer transition-all" width="100px" height="100px" viewBox="0 0 32 32" fill="none">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
            <path
              d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={`${styles.svgLogos} flex justify-center items-center round gradient-blue`}>
          <svg className="hover:scale-150 hover:cursor-pointer transition-all"
            fill="#000000"
            version="1.1"
            width="100px"
            height="100px"
            viewBox="0 0 512 512"
            enableBackground="new 0 0 512 512"
          >
            <g id="c133de6af664cd4f011a55de6b001b19">
              <path
                display="inline"
                d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302
		H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606
		l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062
		l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
              ></path>
            </g>
          </svg>
        </div>
        <div className={`${styles.svgLogos} flex justify-center items-center round gradient-blue`}>
          <svg className="hover:scale-150 hover:cursor-pointer transition-all" width="100px" height="100px" viewBox="0 0 256 256" version="1.1">
            <g>
              <path
                d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                fill="#F7DF1E"
              ></path>
              <path
                d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                fill="#000000"
              ></path>
              <path
                d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}