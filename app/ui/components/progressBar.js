import { useEffect, useState, useRef } from 'react';
import { developerSkills } from "@/app/common/constant";

export default function ProgressBar({ skillIndex, skillName, skillDesc }) {
  const [progressValues, setProgressValues] = useState(developerSkills.map(() => 0)); // Initial progress values
  const progressRefs = useRef([]); // Ref for each progress bar

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = progressRefs.current.indexOf(entry.target);
          const skillScore = developerSkills[index].SkillScore;
          let start = 0;
          const increment = skillScore / 100;
          const interval = setInterval(() => {
            start += increment;
            if (start >= skillScore) {
              clearInterval(interval);
              setProgressValues((prev) =>
                prev.map((value, i) => (i === index ? skillScore : value))
              );
            } else {
              setProgressValues((prev) =>
                prev.map((value, i) => (i === index ? start : value))
              );
            }
          }, 10); // Speed of animation (adjust as needed)
        }
      });
    }, { threshold: 0.5 });

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="p-8">
      <div className="flex flex-wrap justify-between items-center w-full md:max-w-4xl mx-auto mr-0">
        {skillName ? (
          <div className="textSideWrapper w-full md:w-1/2 relative p-4 before:absolute before:w-[2px] before:h-full before:content-[''] before:bg-black before:-left-8 before:top-0 before:bottom-0">
            <h2 className="text-2xl md:text-5xl font-bold md:mb-2">{skillName}</h2>
            <p className="text-base md:text-xl">{skillDesc}</p>
            {skillIndex ? (
              <span className="absolute text-4xl md:text-5xl -left-5 -bottom-20 -rotate-90 text-[#00000080] font-semibold">
                0{skillIndex}.-
              </span>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div className="my-4 w-4/5 mr-0 md:w-1/2">
          {developerSkills.map((skill, index) => (
            <div className="progressWrapper mb-2" key={index}>
              <label className="flex flex-row justify-between -mb-2" htmlFor={skill.skillName}>
                <span>{skill.skillName}</span> <span>{skill.SkillScore}%</span>
              </label>
              <progress
                className="custom-progress-bar"
                id={skill.skillName}
                max="100"
                value={progressValues[index]}
                ref={(el) => (progressRefs.current[index] = el)}
              >
                {progressValues[index].toFixed(0)}%
              </progress>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
