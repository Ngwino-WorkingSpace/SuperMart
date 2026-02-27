export default function Footer() {
    return (
        <footer className="footer mt-12">
            <div className="max-w-[1280px] mx-auto px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold italic mb-4">Ecolive</h3>
                        <p className="text-sm opacity-80 leading-relaxed mb-4">
                            Your trusted source for fresh, organic, and natural groceries
                            delivered straight to your door.
                        </p>
                        <div className="flex items-center gap-3">
                            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                    aria-label={social}
                                >
                                    <span className="text-xs uppercase">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {["About Us", "Shop", "Blog", "Contact Us", "FAQs"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-sm">
                            {["My Account", "Order Tracking", "Wishlist", "Shipping Policy", "Return Policy"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-3 text-sm opacity-80">
                            <li className="flex items-start gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                123 Organic Street, Green City, CA 94103
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                1-800-234-5678
                            </li>
                            <li className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                info@ecolive.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm opacity-60">
                    <p>&copy; 2026 Ecolive. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
