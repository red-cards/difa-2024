import {Open_Sans} from "next/font/google";

import sofaL from "@/assets/images/Sofa L.png";
import Image from "next/image";
const openSans = Open_Sans({ subsets: ["latin"] });

export default function SliderLandingPage() {
    return(
        <div className="h-96 flex flex-row justify-between px-32 py-6">
             <div className="w-96 bg-gray-100 rounded-md p-9 flex flex-col">
                <h1 className={`text-2xl font-bold whitespace-pre-line ${openSans.className}`}>TEMUKAN FURNITURE IDAMAN ANDA</h1>
                <h3 className={`py-3 pr-12 flex-grow font-light text-sm ${openSans.className}`}>Ekspresikan ruangan anda dengan furnitur sesuai kebutuhan bersama Difa Sejahtera Mebel</h3>
                <button className="bg-blue-900 flex-grow w-full rounded-md text-white text-sm">CARI FURNITURE</button>
            </div>
            <div className="bg-blue-900 rounded-br-[10rem] rounded-tr-[10rem]">
                <Image
                    src={sofaL.src}
                    alt="Sofa L"
                    width={sofaL.width + (sofaL.width/3)}
                    height={sofaL.height + (sofaL.height/3)}    
                ></Image>
            </div>
        </div>
    )
}