import { StaticImageData } from "next/image"
import Image from "next/image";

interface Props{
    image : StaticImageData,
    title : string,
    desc : string
}
export default function FeatureChild(props:Props) {
    return (
        <div className="flex flex-row gap-4 w-96 p-4 items-start rounded-md bg-white">
            <div className="self-center">
                <Image src={props.image.src} height={props.image.height*3} width={props.image.width*3} alt="Gratis Kirim"></Image>   
            </div>
            <div className="flex flex-col gap-2 justify-between">
                <h1 className="text-xl font-bold text-gray-800">{props.title}</h1>
                <p className="text-gray-500">{props.desc}</p>
            </div>             
        </div>
    )
}