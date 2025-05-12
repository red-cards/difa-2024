import { StaticImageData } from "next/image"
import Image from "next/image";

interface Props{
    image ?: string,
    title : string,
    amount : string
}

function formatAmount(amountStr: string): string {
    const amountNum = parseInt(amountStr, 10);
    if (isNaN(amountNum)) {
        return amountStr; // Return original string if it's not a valid number
    }
    // Using 'de-DE' locale for dot as thousands separator
    return amountNum.toLocaleString('de-DE');
}

export default function CatalogChild(props: Props){
    return (
        <div className="bg-white rounded-md h-96 flex flex-col overflow-hidden">
            <div className="flex h-3/4 bg-gray-100">
                {props.image ? (
                <Image 
                    src={props.image} 
                    alt={props.title}
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="w-full h-full m-auto"
                />
                ) : (
                    <span className="text-gray-400">No Image</span> // Placeholder if no image
                )}
            </div>
            <div className="h-1/4 bg-blue-900 text-white font-bold">
                <div className=" px-4 pt-4 pb-2 truncate ">
                {props.title}
                </div>
                <div className="px-4 truncate text-gray-100 font-extralight">
                Rp. {formatAmount(props.amount)}
                </div>
            </div>
        </div>
    )
}