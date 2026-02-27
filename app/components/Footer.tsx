export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 relative overflow-hidden pt-20 pb-10">
            <div className="max-w-[1440px] mx-auto px-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-xl font-black tracking-tighter mb-4" style={{ color: '#fc7d00' }}>SIMBA SUPERMARKET</h3>
                        <p className="text-[10px] tracking-[0.2em] text-gray-400 font-medium uppercase font-sans">
                            FRESHNESS · QUALITY · SUSTAINABILITY.
                        </p>
                    </div>

                    {/* Work Column (SHOP) */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] text-gray-300 font-bold uppercase mb-6">SHOP</h4>
                        <ul className="space-y-3">
                            {["FRESH PRODUCE", "DAIRY & EGGS", "MEAT & SEAFOOD", "BAKERY", "BEVERAGES"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-xs font-bold tracking-tight hover:text-[#fc7d00] transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] text-gray-300 font-bold uppercase mb-6">CONNECT</h4>
                        <ul className="space-y-3">
                            {["INSTAGRAM", "FACEBOOK", "LINKEDIN", "TWITTER", "EMAIL"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-xs font-bold tracking-tight hover:text-[#fc7d00] transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info Column */}
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] text-gray-300 font-bold uppercase mb-6">INFO</h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs font-bold leading-relaxed mb-1">AVAILABLE FOR</p>
                                <p className="text-xs font-bold leading-relaxed">24/7 ONLINE ORDERS.</p>
                            </div>
                            <div className="pt-4">
                                <p className="text-[10px] tracking-[0.1em] text-gray-400 uppercase">LOCATION</p>
                                <p className="text-xs font-bold">KIGALI, RWANDA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-[1px] bg-gray-100 w-full mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
                    <p className="text-[10px] tracking-[0.2em] text-gray-400 font-medium uppercase">
                        © 2026 SIMBA SUPERMARKET. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-gray-400 font-medium uppercase mt-4 md:mt-0">
                        SIMBA DIGITAL EXPERIENCE V1.0 <span className="ml-2" style={{ color: '#fc7d00' }}>●</span>
                    </p>
                </div>

                {/* Huge Background Text */}
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
                    <h2 className="text-[25vw] font-black tracking-tighter leading-none opacity-80" style={{ color: '#feeddb' }}>
                        SIMBA
                    </h2>
                </div>
            </div>
        </footer>
    );
}
