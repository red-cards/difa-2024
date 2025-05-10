import { StaticImageData } from "next/image"
import Image from "next/image";

interface Props{
    image : StaticImageData,
    title : string,
    amount : string
}

export default function CatalogChild(props: Props){
    return (
        <div className="bg-gray-100 rounded-md h-96 flex flex-col border border-gray-100 overflow-hidden">
            <div className="flex h-3/4 bg-gray-50">
                <Image 
                    src={props.image.src} 
                    alt={props.image.blurDataURL ?? 'undefined'}
                    layout="responsive"
                    width={1}
                    height={1}
                    objectFit="cover"
                    className="w-full h-3/4 m-auto"
                />
            </div>
            <div className="h-1/4 bg-white text-gray-900">
                <div className=" px-4 pt-4 pb-2 truncate ">
                {props.title}
                </div>
                <div className="px-4 truncate bg-white text-gray-900">
                Rp.{props.amount} 
                </div>
            </div>
        </div>
    )
}