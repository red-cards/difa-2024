"use client"
import logo from "@/assets/images/logo-02 1.png";
import Image from "next/image";
import {Open_Sans} from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

import { useWindowSize } from "@/hook/use-breakpoint";
import MenuChild from "./menu-child";

export default function HeaderLandingPage() {
    const size = useWindowSize
    return <div className="flex flex-row bg-white bg-opacity-50 px-32 items-center justify-between sticky top-0 z-10">
        <Image src={logo.src} height={logo.height/2} width={logo.width/2} alt="Logo Difa Mebel"></Image>
        <div className={`${openSans.className} flex flex-row gap-5 text-blue-900 font-bold`}>
            <MenuChild title="Home"></MenuChild>
            <MenuChild title="Product"></MenuChild>
            <MenuChild title="FAQ"></MenuChild>
            <MenuChild title="Our Store"></MenuChild>
        </div>
    </div>
} 