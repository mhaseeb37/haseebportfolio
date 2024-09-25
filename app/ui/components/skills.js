import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";

export default function Skills() {
    return(
        <div id="skills" className={`${poppins.className} skillsWrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
            <Titleoverlay overlayText="Attainments" subTitle="My Skills Highlight" mainTitle="Technical Skills"/>    
        </div>  
    )
}