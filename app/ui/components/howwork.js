import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";

export default function HowIWork() {
    return(
        <div id="howwork" className={`${poppins.className} workWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-white`}>
            <Titleoverlay overlayText="How I Work" subTitle="How I Work" mainTitle="My Working Process"/>    
        </div>  
    )
}