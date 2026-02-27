export default function TopBar() {
    return (
        <div className="bg-[#f5f5f5] border-b border-gray-200">
            <div className="max-w-[1280px] mx-auto px-12 py-2 flex items-center justify-between">
                {/* Left - Contact Info */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="mailto:contact@simba.com" className="flex items-center gap-2 hover:text-[#fc7d00] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        contact@simba.com
                    </a>
                    <a href="tel:+18002345678" className="flex items-center gap-2 hover:text-[#fc7d00] transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        +1 800-234-5678
                    </a>
                </div>

                {/* Right - Social Icons */}
                <div className="flex items-center gap-3">
                    {[
                        { label: "Instagram", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" },
                        { label: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                        { label: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href="#"
                            className="w-7 h-7 rounded-full bg-[#fc7d00] flex items-center justify-center hover:bg-[#d96a00] transition-colors"
                            aria-label={social.label}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none">
                                <path d={social.icon} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
