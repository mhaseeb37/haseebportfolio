import Image from 'next/image';

export default function TestimonialCard({ data }) {
    return (
        <div className="flex items-start gap-x-4 relative px-10 py-8 border border-black mr-2 shadow-lg max-w-4xl min-h-52 mx-auto">
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
                <h2 className="text-3xl font-bold">{data.name}</h2>
                <p className="text-lg font-medium">{data.title} -- <a href={data.website} className="underline">{data.website}</a></p>

                <p className="mt-4 text-base leading-relaxed">
                    {data.review}
                </p>
            </div>
        </div>
    );
}
