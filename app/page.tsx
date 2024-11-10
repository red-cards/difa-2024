import FeatureLandingPage from "@/components/feature-landing-page";
import HeaderLandingPage from "@/components/header-landing-page";
import ProductlandingPage from "@/components/product-landing-page";
import SliderLandingPage from "@/components/slider-landing-page";

export default function Home() {
    return(
    <main className="flex min-h-screen flex-col">
        <HeaderLandingPage></HeaderLandingPage>
        <SliderLandingPage></SliderLandingPage>
        <FeatureLandingPage></FeatureLandingPage>
        <ProductlandingPage></ProductlandingPage>
    </main>
    )
}