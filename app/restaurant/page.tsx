import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Jost, Dancing_Script } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-jost",
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-cursive",
});

export default function RestaurantPage() {
    return (
        <div className={`min-h-screen bg-[#f4f4f6] text-[#1a1a1a] ${jost.variable} ${dancingScript.variable} font-sans flex flex-col overflow-hidden`}>
            <Navbar />

            <main className="flex-1 w-full max-w-[1280px] mx-auto relative pt-12 pb-32">
                {/* Background Decorative Blur */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/40 blur-3xl rounded-full -z-10" />

                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">

                    {/* Left Side: Hero Image Group */}
                    <div className="w-full md:w-1/2 relative flex justify-center items-center">
                        <div className="relative w-[500px] h-[400px] hover:scale-[1.02] transition-transform duration-500 ease-in-out">
                            {/* Main Dish */}
                            <Image
                                src="/images/food-biryani.png"
                                alt="Mutton Biryani"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side: Hero Content */}
                    <div className="w-full md:w-1/2 flex flex-col relative z-20">

                        {/* Badge Label */}
                        <div className="absolute -top-10 right-10 bg-[#7a8848] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg border-4 border-[#e9efde] transform rotate-12 hover:rotate-0 transition-transform cursor-default z-30">
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">Price</span>
                            <div className="flex items-center -mt-1 font-black">
                                <span className="text-sm">₹</span>
                                <span className="text-3xl leading-none">360</span>
                            </div>
                            <span className="text-[10px] line-through opacity-70">₹410</span>
                        </div>

                        {/* Title Group */}
                        <div className="mb-4">
                            {/* Script Type Subheading */}
                            <h3 className="text-6xl text-[#6d5140] font-['var(--font-cursive)'] -mb-4 relative z-10 transform -rotate-3 ml-2 drop-shadow-sm font-bold">
                                Mutton
                            </h3>
                            {/* Main Title */}
                            <h1 className="text-8xl md:text-[110px] font-black tracking-tighter text-[#4a3424] leading-none drop-shadow-sm">
                                Biryani
                            </h1>
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="flex text-[#fc7d00] text-sm">
                                {"★★★★★".split("").map((star, i) => (
                                    <span key={i} className="drop-shadow-sm">{star}</span>
                                ))}
                            </div>
                            <span className="font-black text-lg text-[#1a1a1a] ml-1">4.5</span>
                            <span className="text-xs font-semibold text-gray-400 underline underline-offset-4 cursor-pointer hover:text-gray-600">521 Reviews</span>
                        </div>

                        {/* Description Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 max-w-lg mb-8 border border-white relative">
                            <div className="absolute inset-0 bg-white/40 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                            <p className="text-gray-600 font-medium leading-relaxed relative z-10 text-[15px]">
                                Aromatic, soft, and tender chunks of lamb layered with rice infused with the flavors of spices. The delicate blend of cardamom, cloves, and cinnamon creates a symphony of tastes in every bite.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-[#fcb34a] hover:bg-[#faa125] text-white font-black text-xs tracking-widest uppercase px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgb(252,179,74,0.3)] transition-all active:scale-95 shrink-0">
                                Order Now
                            </button>
                            <button className="bg-transparent border-2 border-[#fcb34a] text-[#fcb34a] hover:bg-[#fcb34a] hover:text-white font-black text-xs tracking-widest uppercase px-8 py-3.5 rounded-full transition-all active:scale-95 shrink-0">
                                Explore More
                            </button>
                        </div>

                    </div>

                </div>
            </main>

            {/* SVG Wavy Divider */}
            <div className="w-full relative z-30 -mt-20">
                <svg viewBox="0 0 1440 120" className="w-full h-[60px] md:h-[120px] text-white fill-current drop-shadow-sm" preserveAspectRatio="none">
                    <path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"></path>
                </svg>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 pb-12 bg-white">
                <div className="max-w-3xl mb-12">
                    <h2 className="text-4xl font-black text-[#1a1a1a] mb-4">Explore our menu</h2>
                    <p className="text-gray-500 font-medium text-15px leading-relaxed">
                        Discover a world of flavors with our carefully curated menu. From savory dishes to sweet treats, we've got something to satisfy every craving. Explore and order with ease, and enjoy a seamless dining experience.
                    </p>
                </div>

                {/* Categories Slider */}
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                    {[
                        { name: "Salad", img: "/images/product-cucumber.png" },
                        { name: "Rolls", img: "/images/product-peppers.png" },
                        { name: "Deserts", img: "/images/cat-snacks.png" },
                        { name: "Sandwich", img: "/images/product-beans.png" },
                        { name: "Cake", img: "/images/cat-bakery.png" }, /* fallback if missing */
                        { name: "Pure Veg", img: "/images/product-lemons.png" },
                        { name: "Pasta", img: "/images/product-grapes.png" },
                        { name: "Noodles", img: "/images/cat-dairy.png" }
                    ].map((cat, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 shrink-0 snap-start cursor-pointer hover:scale-105 transition-transform">
                            <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-4 border-white relative bg-gray-50">
                                <Image src={cat.img} alt={cat.name} fill className="object-cover" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 lg:gap-y-24 mt-20">
                    {/* Jeera Chawal Card */}
                    <div className="bg-[#8b9948] rounded-[30px] p-5 lg:p-6 relative mt-16 flex flex-col items-center">
                        <div className="absolute -top-[70px] w-[180px] h-[130px] drop-shadow-xl hover:scale-105 transition-transform">
                            <Image src="/images/food-chawal.png" alt="Jeera Chawal" fill className="object-contain" />
                        </div>

                        <div className="absolute top-10 right-2 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20">
                            <div className="flex items-start text-[#8b9948] font-black leading-none">
                                <span className="text-[10px] mt-[1px]">₹</span>
                                <span className="text-lg">180</span>
                            </div>
                        </div>

                        <div className="w-full mt-[50px] text-white">
                            <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Jeera</h3>
                            <h2 className="text-3xl font-black tracking-tighter mb-2 drop-shadow-sm text-white line-clamp-1">Chawal</h2>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-black">4.5 ★</span>
                            </div>

                            <p className="text-white/80 text-[11px] font-medium leading-relaxed mb-5 h-8 overflow-hidden line-clamp-2">
                                Aromatic, soft, and tender chunks of lamb layered with rice infused...
                            </p>

                            <button className="bg-[#4a3424] hover:bg-[#3d2b1e] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Kadai Chicken Card */}
                    <div className="bg-[#fcb34a] rounded-[30px] p-5 lg:p-6 relative mt-16 flex flex-col items-center">
                        <div className="absolute -top-[70px] w-[180px] h-[130px] drop-shadow-xl hover:scale-105 transition-transform">
                            <Image src="/images/food-chicken.png" alt="Kadai Chicken" fill className="object-contain" />
                        </div>

                        <div className="absolute top-10 right-2 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20">
                            <div className="flex items-start text-[#fcb34a] font-black leading-none">
                                <span className="text-[10px] mt-[1px]">₹</span>
                                <span className="text-lg">220</span>
                            </div>
                        </div>

                        <div className="w-full mt-[50px] text-white">
                            <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Kadai</h3>
                            <h2 className="text-3xl font-black tracking-tighter mb-2 drop-shadow-sm text-white line-clamp-1">Chicken</h2>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-black">4.5 ★</span>
                            </div>

                            <p className="text-white/80 text-[11px] font-medium leading-relaxed mb-5 h-8 overflow-hidden line-clamp-2">
                                Aromatic chunks of chicken cooked in a traditional Indian wok with bell peppers...
                            </p>

                            <button className="bg-[#4a3424] hover:bg-[#3d2b1e] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Palak Paneer Card */}
                    <div className="bg-[#8b9948] rounded-[30px] p-5 lg:p-6 relative mt-16 flex flex-col items-center">
                        <div className="absolute -top-[70px] w-[180px] h-[130px] drop-shadow-xl hover:scale-105 transition-transform">
                            <Image src="/images/food-paneer.png" alt="Palak Paneer" fill className="object-contain" />
                        </div>

                        <div className="absolute top-10 right-2 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20">
                            <div className="flex items-start text-[#8b9948] font-black leading-none">
                                <span className="text-[10px] mt-[1px]">₹</span>
                                <span className="text-lg">200</span>
                            </div>
                        </div>

                        <div className="w-full mt-[50px] text-white">
                            <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Palak</h3>
                            <h2 className="text-3xl font-black tracking-tighter mb-2 drop-shadow-sm text-white line-clamp-1">Paneer</h2>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-black">4.5 ★</span>
                            </div>

                            <p className="text-white/80 text-[11px] font-medium leading-relaxed mb-5 h-8 overflow-hidden line-clamp-2">
                                Fresh spinach puree cooked with chunks of soft cottage cheese and aromatic Indian spices...
                            </p>

                            <button className="bg-[#4a3424] hover:bg-[#3d2b1e] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* NEW: Chicken Pasta Card */}
                    <div className="bg-[#e26a45] rounded-[30px] p-5 lg:p-6 relative mt-16 flex flex-col items-center">
                        <div className="absolute -top-[70px] w-[180px] h-[130px] drop-shadow-xl hover:scale-105 transition-transform">
                            <Image src="/images/cat-meat.png" alt="Spicy Pasta" fill className="object-contain" />
                        </div>

                        <div className="absolute top-10 right-2 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20">
                            <div className="flex items-start text-[#e26a45] font-black leading-none">
                                <span className="text-[10px] mt-[1px]">₹</span>
                                <span className="text-lg">240</span>
                            </div>
                        </div>

                        <div className="w-full mt-[50px] text-white">
                            <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Spicy</h3>
                            <h2 className="text-3xl font-black tracking-tighter mb-2 drop-shadow-sm text-white line-clamp-1">Pasta</h2>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-black">4.8 ★</span>
                            </div>

                            <p className="text-white/80 text-[11px] font-medium leading-relaxed mb-5 h-8 overflow-hidden line-clamp-2">
                                Delicious penne pasta tossed in a fiery red arrabbiata sauce with garlic and herbs...
                            </p>

                            <button className="bg-[#4a3424] hover:bg-[#3d2b1e] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* NEW: Margherita Pizza Card */}
                    <div className="bg-[#fcb34a] rounded-[30px] p-5 lg:p-6 relative mt-16 flex flex-col items-center">
                        <div className="absolute -top-[70px] w-[180px] h-[130px] drop-shadow-xl hover:scale-105 transition-transform">
                            <Image src="/images/hero-healthy.png" alt="Margherita Pizza" fill className="object-cover rounded-full" />
                        </div>

                        <div className="absolute top-10 right-2 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20">
                            <div className="flex items-start text-[#fcb34a] font-black leading-none">
                                <span className="text-[10px] mt-[1px]">₹</span>
                                <span className="text-lg">310</span>
                            </div>
                        </div>

                        <div className="w-full mt-[50px] text-white">
                            <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Italian</h3>
                            <h2 className="text-3xl font-black tracking-tighter mb-2 drop-shadow-sm text-white line-clamp-1">Pizza</h2>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-black">4.9 ★</span>
                            </div>

                            <p className="text-white/80 text-[11px] font-medium leading-relaxed mb-5 h-8 overflow-hidden line-clamp-2">
                                Classic Neapolitan style pizza with fresh mozzarella, tomatoes and basil...
                            </p>

                            <button className="bg-[#4a3424] hover:bg-[#3d2b1e] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* NEW: Fresh Salad Card */}
                    <div className="bg-[#8b9948] rounded-[30px] p-5 lg:p-6 relative mt-16 flex flex-col items-center">
                        <div className="absolute -top-[70px] w-[180px] h-[130px] drop-shadow-xl hover:scale-105 transition-transform">
                            <Image src="/images/cat-produce.png" alt="Fresh Salad" fill className="object-cover rounded-full p-2 bg-white/20" />
                        </div>

                        <div className="absolute top-10 right-2 bg-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-md border border-gray-100 z-20">
                            <div className="flex items-start text-[#8b9948] font-black leading-none">
                                <span className="text-[10px] mt-[1px]">₹</span>
                                <span className="text-lg">150</span>
                            </div>
                        </div>

                        <div className="w-full mt-[50px] text-white">
                            <h3 className="text-2xl font-['var(--font-cursive)'] mb-[-8px] ml-1 drop-shadow-sm opacity-90">Healthy</h3>
                            <h2 className="text-3xl font-black tracking-tighter mb-2 drop-shadow-sm text-white line-clamp-1">Salad</h2>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-black">4.2 ★</span>
                            </div>

                            <p className="text-white/80 text-[11px] font-medium leading-relaxed mb-5 h-8 overflow-hidden line-clamp-2">
                                A crisp mix of fresh lettuce, cherry tomatoes, cucumbers, and a light vinaigrette dressing...
                            </p>

                            <button className="bg-[#4a3424] hover:bg-[#3d2b1e] text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-lg w-full">
                                Order Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
