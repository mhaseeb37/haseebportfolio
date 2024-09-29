export default function ExperienceCard({data}) {
    return(
        <div className={`expCardWrapper pt-14 p-5 md:pl-10 w-full md:max-w-2xl text-black relative before:block before:absolute before:-inset-0 before:w-[2px] before:-left-0.5 before:bg-black before:h-[80%] before:top-[20%]`}>
            <h3 className="font-semibold text-xl leading-none mb-4">({data.tenure})</h3>
            <h2 className="font-bold text-2xl md:text-4xl leading-none mb-6">{data.title}:</h2>
            <p className="font-normal text-base md:text-lg leading-normal">{data.description}</p>
        </div>
    )
}