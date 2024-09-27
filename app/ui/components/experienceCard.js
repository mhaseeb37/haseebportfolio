export default function ExperienceCard({data}) {
    return(
        <div className={`expCardWrapper pt-14 pl-10 w-full md:max-w-2xl text-white relative before:block before:absolute before:-inset-0 before:w-[2px] before:-left-0.5 before:bg-white before:h-[80%] before:top-[20%]`}>
            <h3 className="font-semibold text-xl leading-none mb-4">({data.tenure})</h3>
            <h2 className="font-bold text-4xl leading-none mb-6">{data.title}:</h2>
            <p className="font-normal text-lg leading-normal">{data.description}</p>
        </div>
    )
}