import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";

export default function Projects() {
    return(
        <div id="projects" className={`${poppins.className} projectsWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-black`}>
            <Titleoverlay overlayText="Projects" subTitle="Some of my most recent projects" mainTitle="My Featured Projected"/>    
        </div>  
    )
}