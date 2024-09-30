import { developerSkills } from "@/app/common/constant"
export default function ProgressBar({skillIndex, skillName, skillDesc }) {
    return(
        <section className="p-8">
            <div className="flex flex-wrap justify-between items-center w-full md:max-w-4xl mx-auto mr-0">
                {skillName? 
                <div className="textSideWrapper w-full md:w-1/2 relative p-4 before:absolute before:w-[2px] before:h-full before:content-[''] before:bg-black before:-left-8 before:top-0 before:bottom-0">
                    <h2 className="text-2xl md:text-5xl font-bold md:mb-2">{skillName}</h2>
                    <p className="text-base md:text-xl">{skillDesc}</p>
                    {skillIndex?
                    <span className="absolute text-4xl md:text-5xl -left-5 -bottom-20 -rotate-90 text-[#00000080] font-semibold">
                    0{skillIndex}.-
                    </span> : ""}
                </div>
                :""}
                <div className="my-4 w-4/5 mr-0 md:w-1/2">
                {developerSkills.map((skill,index)=>(
                    <div className="progressWrapper mb-2" key={index}>
                        <label className="flex flex-row justify-between -mb-2" htmlFor={skill.skillName}><span>{skill.skillName}</span> <span>{skill.SkillScore}%</span></label>
                        <progress className="custom-progress-bar" id={skill.skillName} max="100" value={skill.SkillScore}>{skill.SkillScore}%</progress>
                    </div>
                ))}
                    
                </div>
            </div>
            
        </section>
    )
}