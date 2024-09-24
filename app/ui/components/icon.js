import Image from "next/image"
export default function Icon(props) {
    return(
        <div className="flex items-center justify-center w-12 h-12 p-2 border border-black rounded-full hover:bg-yellow-100">
            <a href={props.url} target="_blank">
                <Image src={`/assets/${props.iconname}.png`} width={100} height={100} alt={props.iconname}/>
            </a>
        </div>
    )
}