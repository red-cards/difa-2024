"use client"
import logo from "@/assets/images/logo-02 1.png";
import Image from "next/image";
import {Open_Sans} from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

import { useWindowSize } from "@/hook/use-breakpoint";
import MenuChild from "./menu-child";

export default function HeaderLandingPage() {
    const size = useWindowSize; // This variable is declared but not used, consider removing if not needed.

    const scrollToProducts = () => {
        const productsSection = document.getElementById('our-products-section');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return <div className="flex flex-row bg-white bg-opacity-50 px-32 items-center justify-between sticky top-0 z-10">
        <Image src={logo.src} height={logo.height/2} width={logo.width/2} alt="Logo Difa Mebel"></Image>
        <div className={`${openSans.className} flex flex-row gap-5 text-blue-900 font-bold`}>
            <MenuChild title="Home"></MenuChild>
            <button 
                onClick={scrollToProducts} 
                className="appearance-none bg-transparent border-none p-0 text-inherit font-inherit cursor-pointer hover:text-blue-700" // Basic styling for the button
            >
                <MenuChild title="Product"></MenuChild>
            </button>
            <MenuChild title="FAQ"></MenuChild>
            <MenuChild title="Our Store"></MenuChild>
        </div>
    </div>
} 