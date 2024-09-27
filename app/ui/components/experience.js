import Titleoverlay from "./titleoverlay";
import { poppins } from "../fonts";
import ExperienceCard from "./experienceCard";
import { experienceData } from "@/app/common/constant";

export default function Experience() {
    //console.log("From Ex.js",experienceData)
    return(
        <div id="experiences" className={`${poppins.className} expWrapper pt-32 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl text-white`}>
            <Titleoverlay overlayText="Experiences" subTitle="Highlight My key Experiences" mainTitle="My Experience" />
            <div className="experienceWrapper border-[#ffffff50] border-l-2 mt-14">
                {experienceData.map((experience, index) => (
                    <ExperienceCard data={experience} key={index} />
                ))}
            </div>
        </div>
    )
}