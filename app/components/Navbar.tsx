export default function Navbar() {
    return (
        <nav className="navbar sticky top-0 z-50">
            {/* Upper navbar with logo and actions */}
            <div className="max-w-[1280px] mx-auto px-12 py-4 flex items-center justify-between">
                {/* Phone */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>1-800-234-5678</span>
                </div>

                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold" style={{ color: 'var(--green-primary)', fontFamily: "'Poppins', sans-serif" }}>
                        <span className="italic">Ecolive</span>
                    </h1>
                </div>

                {/* User actions */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <div className="text-sm">
                            <span className="text-gray-400 text-xs block leading-tight">Hello</span>
                            <span className="font-medium text-gray-700">Sign In or Register</span>
                        </div>
                    </div>

                    {/* Cart */}
                    <div className="relative cursor-pointer">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                        </svg>
                        <span className="cart-badge">0</span>
                    </div>
                </div>
            </div>

            {/* Nav links */}
            <div className="border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-12 py-3 flex items-center justify-center gap-8">
                    {["Home", "Shop", "Pages", "Offers", "Blog", "Contact"].map((link) => (
                        <a key={link} href="#" className="nav-link flex items-center gap-1">
                            {link}
                            {["Shop", "Pages"].includes(link) && (
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1 opacity-50">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
