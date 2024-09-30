import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import SkillsCard from "./skillsCard";
import ProgressBar from "./progressBar";

export default function Skills() {
    return(
        <div id="skills" className={`${poppins.className} skillsWrapper pt-10 md:pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-white`}>
            <Titleoverlay overlayText="Attainments" subTitle="My Skills Highlight" mainTitle="Technical Skills"/>    
            <SkillsCard skillIndex={1} skillName="Language Skills" skillDesc="Highlight My Expertise in:" skill1={100} title1="English" skill2={60} title2="German" skill3={45} title3="Chinese"/>
            <ProgressBar skillIndex={2} skillName="Developer Skills" skillDesc="Highlight My Expertise in:"/>
            <SkillsCard skillIndex={3} skillName="Design Skills" skillDesc="Highlight My Expertise in:" skill1={85} title1="Design" skill2={80} title2="Branding" skill3={95} title3="Ecommerce"/>
        </div>  
    )
}