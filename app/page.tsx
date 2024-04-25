import Image from "next/image";
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
import sofaL from "@/assets/images/Sofa L.png";
import logo from "@/assets/images/logo-02 1.png";
import sofaRetro from "@/assets/images/Sofa Retro 1.png";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
        <div className="flex w-full h-screen relative">
            <div className="flex w-full h-screen">
                <div className="w-2/5 flex flex-col">
                <Image
                    src={logo.src}
                    alt="Logo Difa"
                    width={logo.width}
                    height={logo.height}
                    className="mx-auto"
                />
                </div>
                <div className="h-3/5 w-3/5 bg-blue-900 rounded-bl-[10rem]">
                    <ul className="flex justify-evenly text-white py-3">
                        <li>Product</li>
                        <li>Our Store</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="h-3/6 w-2/6 bg-white bg-opacity-70 top-40 left-56 absolute rounded-2xl p-9 flex flex-col">
                <h1 className={`text-4xl font-semibold whitespace-pre-line ${openSans.className}`}>TEMUKAN FURNITURE IDAMAN ANDA</h1>
                <h3 className="py-3 pr-12 flex-grow">Ekspresikan ruangan anda dengan furnitur sesuai kebutuhan bersama Difa Sejahtera Mebel</h3>
                <div className="flex justify-evenly">
                    <select name="" id="" className="w-full h-8 border rounded-md">
                        <option value="">A</option>
                        <option value="">B</option>
                        <option value="">C</option>
                        <option value="">D</option>
                    </select>
                    <button className="bg-blue-900 flex-grow ml-3 w-64 rounded-md text-white">CARI FURNITURE</button>
                </div>
            </div>
            <Image
            src={sofaL.src}
            alt="Sofa L"
            width={sofaL.width}
            height={sofaL.height}
            className="absolute right-20 top-56"            
            />
        </div>
        <div className="w-full h-full bg-gray-300 py-12 px-24 flex">
            <div className="w-64 h-fit p-6 mr-12 my-auto bg-blue-900 text-white rounded-md ">
                <h1 className={`text-xl font-semibold whitespace-pre-line ${openSans.className}`}>BEST FAVORITE FURNITURE</h1>
                <p className={`text-sm whitespace-pre-line pt-3 ${openSans.className}`}>Rekomendasi furniture untuk ruangan anda </p>
                <div className="flex justify-end pt-6">
                    <button className="bg-yellow-500 py-3 px-6 rounded-full">Cari</button>
                </div>
            </div>
            <div className="w-full">
                <div className="w-56 h-80 bg-white rounded-2xl mr-6 relative overflow-visible inline-block">
                    <div className="h-1/2 bg-gray-100 rounded-t-2xl overflow-hidden relative">
                        <Image
                            src={sofaRetro.src}
                            alt="item 1"
                            layout="fill"
                            objectFit="cover"
                            className="bg-gray-100"
                            
                        />
                    </div>
                    <div className="h-1/2 p-3 flex flex-col text-center justify-evenly">
                        <h1 className="text-xl font-semibold">Sofa Retro</h1>
                        <h1 className="text-sm line-through decoration-red-500">IDR 2.000.000</h1>
                        <h1 className="text-base">IDR 1.500.000</h1>
                    </div>
                    <div className="h-11 w-28 bg-blue-700 absolute top-[-10px] right-[-10px] rounded-tr-lg rounded-bl-[35px] text-center flex flex-col justify-center">
                        <div className="text-white italic text-sm">
                            Disc 20%
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="w-56 h-80 bg-white rounded-2xl mr-6 relative overflow-visible inline-block">
                    <div className="h-1/2 bg-gray-100 rounded-t-2xl overflow-hidden relative">
                        <Image
                            src={sofaRetro.src}
                            alt="item 1"
                            layout="fill"
                            objectFit="cover"
                            className="bg-gray-100"
                            
                        />
                    </div>
                    <div className="h-1/2 p-3 flex flex-col text-center justify-evenly">
                        <h1 className="text-xl font-semibold">Sofa Retro</h1>
                        <h1 className="text-sm line-through decoration-red-500">IDR 2.000.000</h1>
                        <h1 className="text-base">IDR 1.500.000</h1>
                    </div>
                    <div className="h-11 w-28 bg-blue-700 absolute top-[-10px] right-[-10px] rounded-tr-lg rounded-bl-[35px] text-center flex flex-col justify-center">
                        <div className="text-white italic text-sm">
                            Disc 20%
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="w-56 h-80 bg-white rounded-2xl mr-6 relative overflow-visible inline-block">
                    <div className="h-1/2 bg-gray-100 rounded-t-2xl overflow-hidden relative">
                        <Image
                            src={sofaRetro.src}
                            alt="item 1"
                            layout="fill"
                            objectFit="cover"
                            className="bg-gray-100"
                            
                        />
                    </div>
                    <div className="h-1/2 p-3 flex flex-col text-center justify-evenly">
                        <h1 className="text-xl font-semibold">Sofa Retro</h1>
                        <h1 className="text-sm line-through decoration-red-500">IDR 2.000.000</h1>
                        <h1 className="text-base">IDR 1.500.000</h1>
                    </div>
                    <div className="h-11 w-28 bg-blue-700 absolute top-[-10px] right-[-10px] rounded-tr-lg rounded-bl-[35px] text-center flex flex-col justify-center">
                        <div className="text-white italic text-sm">
                            Disc 20%
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="w-56 h-80 bg-white rounded-2xl mr-6 relative overflow-visible inline-block">
                    <div className="h-1/2 bg-gray-100 rounded-t-2xl overflow-hidden relative">
                        <Image
                            src={sofaRetro.src}
                            alt="item 1"
                            layout="fill"
                            objectFit="cover"
                            className="bg-gray-100"
                            
                        />
                    </div>
                    <div className="h-1/2 p-3 flex flex-col text-center justify-evenly">
                        <h1 className="text-xl font-semibold">Sofa Retro</h1>
                        <h1 className="text-sm line-through decoration-red-500">IDR 2.000.000</h1>
                        <h1 className="text-base">IDR 1.500.000</h1>
                    </div>
                    <div className="h-11 w-28 bg-blue-700 absolute top-[-10px] right-[-10px] rounded-tr-lg rounded-bl-[35px] text-center flex flex-col justify-center">
                        <div className="text-white italic text-sm">
                            Disc 20%
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                
            </div>
        </div>
        <div className="w-full flex flex-col items-center">
            <div>
                <div>
                    
                </div>
            </div>
            <div>ad</div>
        </div>
    </main>
  );
}
