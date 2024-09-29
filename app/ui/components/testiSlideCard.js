import Image from 'next/image';

export default function TestimonialCard({ data }) {
    return (
        <div className="flex flex-col md:flex-row items-start gap-x-4 relative px-10 py-8 border border-black md:mr-2 shadow-lg md:max-w-4xl md:min-h-52 mx-auto">
            {/* Avatar Section */}
            <div className="">
                <div className="rounded-full w-24 h-24 overflow-hidden">
                    <Image 
                        src="/assets/clientpic.png" // Replace with the actual image path
                        alt={`${data.name}'s photo`} 
                        width={100} 
                        height={100} 
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="">
                <h2 className="text-3xl font-bold mb-4">{data.name}</h2>
                <p className="text-sm font-bold">{data.title} -- <a href={data.website} className="font-normal hover:underline">{data.website.replace(/https?:\/\/|\/$/g, '')}</a></p>

                <p className="mt-4 text-base leading-relaxed">
                &quot;{data.review}&quot;
                </p>
            </div>
        </div>
    );
}