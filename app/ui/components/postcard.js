import { Calendar, Clock } from "phosphor-react"
import Image from "next/image"
export default function PostCard({ image, title, date, readTime, description, tags }) {
    return(
        <div className="flex items-center p-5 w-full bg-[#ffffff33] hover:bg-[#00000008] border border-[#0000001a] rounded-lg space-x-5 duration-300">
            <div className="group overflow-hidden w-1/3">
                <Image src={image} alt={title} width={100} height={100} layout="responsive" className="w-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110" unoptimized />
            </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <div className="text-black text-xl flex items-center space-x-2 mb-2">
          <span className="flex items-center space-x-1">
            <Calendar size={16} weight="bold" />
            <span>{date}</span>
          </span>
          <span className="text-sm">--</span>
          <span className="flex items-center space-x-1">
          <Clock size={16} weight="bold" />
            <span>{readTime} Min Read</span>
          </span>
        </div>
        <p className="text-black mt-2 mb-3 pb-6 border-b border-[#00000033]">{description}</p>
        <div className="mt-4 flex space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm font-medium py-1 px-2 rounded relative before:absolute before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-[#000000] before:left-0 before:top-[42%]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
    )
}