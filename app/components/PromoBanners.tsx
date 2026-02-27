import Image from "next/image";

export default function PromoBanners() {
    return (
        <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fruit Basket Banner */}
                <div className="promo-banner promo-banner-green flex items-center p-8 cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex-1 z-10">
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2" style={{ color: 'var(--green-primary)' }}>
                            Fresh vegetable &<br />Fruit basket
                        </h3>
                        <p className="text-sm" style={{ color: 'var(--text-gray)' }}>
                            Fresh Product Order Today
                        </p>
                    </div>
                    <div className="w-[160px] h-[140px] relative flex-shrink-0">
                        <Image
                            src="/images/banner-fruit.png"
                            alt="Fresh Fruit Basket"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Seafood Banner */}
                <div className="promo-banner promo-banner-dark flex items-center p-8 cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="flex-1 z-10">
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2 text-white">
                            Best Cuisine From the<br />sea of America
                        </h3>
                        <p className="text-sm text-gray-300">
                            Premium seafood available everyday
                        </p>
                    </div>
                    <div className="w-[160px] h-[140px] relative flex-shrink-0">
                        <Image
                            src="/images/hero-healthy.png"
                            alt="Best Seafood Cuisine"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
