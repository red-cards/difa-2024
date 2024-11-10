import {Open_Sans} from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

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
            <div className="w-[48rem] h-[72rem] flex flex-row gap-5">
                <div className="bg-gray-100 rounded-md w-80">Item 1</div>
                <div className="bg-gray-100 rounded-md w-80">Item 1</div>
            </div>
        </div>
    )
}