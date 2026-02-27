import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-6">
            <div className="hero-section flex flex-col lg:flex-row gap-4 p-6 lg:p-8">
                {/* Left - Main Hero */}
                <div className="flex-1 flex flex-col lg:flex-row items-center gap-6">
                    <div className="flex-1 py-6 lg:py-10 lg:pl-6">
                        <span className="hero-badge inline-block mb-4">100% PURE & NATURE</span>
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--text-dark)' }}>
                            Fresh Mango<br />Juice Just Fruit
                        </h2>
                        <p className="hero-price mb-6">
                            Start from <span>$39.99</span>
                        </p>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                    <div className="flex-shrink-0 w-[250px] h-[280px] lg:w-[300px] lg:h-[320px] relative">
                        <Image
                            src="/images/hero-mango.png"
                            alt="Fresh Mango Juice"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right - Promo Cards */}
                <div className="w-full lg:w-[300px] flex flex-col gap-4">
                    {/* 40% Off Card */}
                    <div className="promo-card promo-card-yellow p-5 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold leading-tight mb-1" style={{ color: 'var(--text-dark)' }}>
                                40% Off<br />Everyday Fresh
                            </h3>
                            <p className="text-xs opacity-70">Fresh Produce Order Today</p>
                        </div>
                        <div className="w-[100px] h-[90px] relative flex-shrink-0">
                            <Image
                                src="/images/hero-fresh.png"
                                alt="Everyday Fresh"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* 20% Off Card */}
                    <div className="promo-card promo-card-green p-5 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold leading-tight mb-1" style={{ color: 'var(--text-dark)' }}>
                                20% Off<br />Healthy Food
                            </h3>
                            <p className="text-xs opacity-70">Start from $29.99</p>
                        </div>
                        <div className="w-[100px] h-[90px] relative flex-shrink-0">
                            <Image
                                src="/images/hero-healthy.png"
                                alt="Healthy Food"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
