import Image from "next/image"
export default function SocialIcon(props) {
    return(
        <div className="group flex items-center justify-center w-12 h-12 p-2 border border-white rounded-full hover:bg-white">
            <a href={props.url} target="_blank">
                <Image src={`/assets/${props.iconname}.png`} width={100} height={100} alt={props.iconname} className="invert group-hover:invert-0"/>
            </a>
        </div>
    )
}