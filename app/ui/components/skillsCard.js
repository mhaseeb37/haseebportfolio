import React from "react";
import CountUp from "react-countup";

const SkillsCard = ({skillIndex, skillName, skillDesc, skill1, title1, skill2, title2, skill3,title3 }) => {
  return (
    <section className="p-8">
      <div className="flex flex-wrap justify-between items-center w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {skillName? 
          <div className="textSideWrapper w-full md:w-1/3 relative p-4 before:absolute before:w-[2px] before:h-full before:content-[''] before:bg-black before:-left-8 before:top-0 before:bottom-0">
            <h2 className="text-2xl md:text-5xl font-bold md:mb-2">{skillName}</h2>
            <p className="text-base md:text-xl">{skillDesc}</p>
            {skillIndex?
            <span className="absolute text-4xl md:text-5xl -left-5 -bottom-20 -rotate-90 text-[#00000080] font-semibold">
              0{skillIndex}.-
            </span> : ""}
          </div>
        :""}
        
        <div className="flex flex-col md:flex-row align-baseline md:justify-center md:space-x-8 counterSideWrapper w-full md:w-2/3">
        {skill1 && title1?
          <div className="flex flex-col w-full mb-4 md:mb-0 md:w-1/3 items-center">
            <div className="relative w-full h-full mb-4">
              <span className="mx-auto text-2xl md:text-5xl p-8 w-52 h-52 font-bold border-[6px] border-black rounded-full flex items-center justify-center">
                <CountUp
                  start={0}
                  end={skill1}
                  duration={5}
                  suffix="%"
                  enableScrollSpy={true} // set this to true
                  scrollSpyOnce={true} // set this to true
                />
              </span>
            </div>
            <span className="mt-2 font-medium text-lg border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white hover:cursor-pointer">
              {title1}
            </span>
          </div>
          :""}
          {skill2 && title2?
          <div className="flex flex-col w-full mb-4 md:mb-0 md:w-1/3 items-center">
            <div className="relative w-full h-full mb-4">
              <span className="mx-auto text-2xl md:text-5xl p-8 w-52 h-52 font-bold border-[6px] border-black rounded-full flex items-center justify-center">
                <CountUp
                  start={0}
                  end={skill2}
                  duration={5}
                  suffix="%"
                  enableScrollSpy={true} // set this to true
                  scrollSpyOnce={true} // set this to true
                />
              </span>
            </div>
            <span className="mt-2 font-medium text-lg border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white hover:cursor-pointer">
              {title2}
            </span>
          </div>
          :""}
          {skill3 && title3?
          <div className="flex flex-col w-full mb-4 md:mb-0 md:w-1/3 items-center">
            <div className="relative w-full h-full mb-4">
              <span className="mx-auto text-2xl md:text-5xl p-8 w-52 h-52 font-bold border-[6px] border-black rounded-full flex items-center justify-center">
                <CountUp
                  start={0}
                  end={skill3}
                  duration={5}
                  suffix="%"
                  enableScrollSpy={true} // set this to true
                  scrollSpyOnce={true} // set this to true
                />
              </span>
            </div>
            <span className="mt-2 font-medium text-lg border border-black py-2 px-4 rounded-full hover:bg-black hover:text-white hover:cursor-pointer">
              {title3}
            </span>
          </div>: ""}
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
