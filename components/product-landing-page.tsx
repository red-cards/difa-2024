import {Bebas_Neue} from "next/font/google";
import CatalogLandingPage from "./catalog-landing-page";
const bebasNeue = Bebas_Neue({subsets:['latin'],weight:'400'});

export default function ProductlandingPage() {
    return(
        <div className="flex flex-col pt-10 justify-center items-center">
            <h1 className={`${bebasNeue.className} text-5xl underline underline-offset-4 decoration-yellow-400 text-blue-900`}>Our Products</h1>
            <div className="h-[48rem]">
                <CatalogLandingPage></CatalogLandingPage>
            </div>
        </div>
    )
}