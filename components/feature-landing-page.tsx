import kirim from "@/assets/images/kirim.png";
import bayar from "@/assets/images/bayar.png";
import rakit from "@/assets/images/rakit.png";
import FeatureChild from "./feature-child";



export default function FeatureLandingPage() {
    return(
        <div className="flex flex-row justify-center gap-6 mt-16 px-32 py-4 bg-gray-100">
            <FeatureChild image={kirim} title="Free Ongkir" desc="Gratis ongkos pengiriman untuk kota Malang, untuk informasi pengiriman luar kota atau luar jawa dapat menghubungi admin"></FeatureChild>            
            <FeatureChild image={bayar} title="Pembayaran Flexibel" desc="Pembayaran dapat melakukan dengan proses tunai, kredit, dan pembayaran ditempat konsumen"></FeatureChild>            
            <FeatureChild image={rakit} title="Free Rakit" desc="Gratis biaya rakit untuk daerah yang dapat dijangkau tim pengiriman kami."></FeatureChild>   
        </div>
    )
}