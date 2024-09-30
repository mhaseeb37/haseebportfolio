import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import { projects } from "@/app/common/constant";
import ProjectItem from "./projectCard";

export default function Projects() {
    return(
        <div id="projects" className={`${poppins.className} projectsWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-white`}>
            <Titleoverlay overlayText="Projects" subTitle="Some of my most recent projects" mainTitle="My Featured Projected"/>    
            <div className="flex flex-wrap gap-y-5 md:gap-10 mt-8">
                {projects.map((project,index)=>(
                    console.log(project),
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </div>  
    )
}