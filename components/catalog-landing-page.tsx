import {Open_Sans} from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });
import sofaL from "@/assets/images/Sofa L.png";
import Image from "next/image";
import CatalogChild from "./catalog-child";

export default function CatalogLandingPage() {
    return (
        <div className="flex flex-row px-32 py-16 gap-5">
            <div className="w-96">
                <div className="p-4 bg-gray-100 rounded-md">
                    <h1 className={`${openSans.className} text-blue-900 font-bold`}>Category</h1>
                    <br />
                    <h1>Meja</h1>
                    <h1>Meja</h1>
                    <h1>Meja</h1>
                </div>
            </div>
            <div className="w-[48rem] grid grid-cols-3 gap-4">
                <CatalogChild image={sofaL} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"} amount={"999.999.999"}                
                />
                <CatalogChild image={sofaL} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"} amount={"999.999.999"}                
                />
                <CatalogChild image={sofaL} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"} amount={"999.999.999"}                
                />
                <CatalogChild image={sofaL} title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"} amount={"999.999.999"}                
                />
            </div>
        </div>
    )
}