import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-12 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Image
                        src="/Logo.png"
                        alt="Simba"
                        width={50}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Nav links - Center */}
                <div className="flex items-center gap-8">
                    {[
                        { label: "Home", active: true },
                        { label: "About", active: false },
                        { label: "Shop", active: false, dropdown: true },
                        { label: "Pages", active: false, dropdown: true },
                        { label: "Blog", active: false },
                        { label: "Contact", active: false },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href="#"
                            className={`text-sm font-medium transition-colors flex items-center gap-1 ${link.active
                                ? "text-[#fc7d00]"
                                : "text-gray-700 hover:text-[#fc7d00]"
                                }`}
                        >
                            {link.label}
                            {link.dropdown && (
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </a>
                    ))}
                </div>

                {/* Right - CTA Button */}
                <div className="flex items-center">
                    <button className="px-6 py-2.5 rounded-full border-2 border-[#fc7d00] text-[#fc7d00] text-sm font-semibold hover:bg-[#fc7d00] hover:text-white transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}
