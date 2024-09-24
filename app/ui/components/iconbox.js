import Image from "next/image";

export default function IconBox(props) {
    return(
    
  <div className="flex items-center space-x-4">
    <div className="flex items-center justify-center w-12 h-12 p-2 border border-black rounded-full">
      <Image src={`/assets/${props.iconname}.png`} width={100} height={100} alt={props.iconname}/>
    </div>
    <p className="text-black">
      <a href={props.url} target="_blank">{props.data}</a>
    </p>
  </div>
    )
}