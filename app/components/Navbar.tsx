"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { toggleCart, cartCount } = useCart();

  const isHome = pathname === "/";

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1280px] mx-auto px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-start">
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
        <div className="flex items-center justify-center gap-8">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Shop", dropdown: true, href: "/shop" },
            { label: "Pages", dropdown: true, href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact", href: "/contact" },
          ].map((link) => {
            // Very simple active state logic
            // For a real app, use usePathname from next/navigation
            const isActive = typeof window !== 'undefined' ? window.location.pathname === link.href : false;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive
                  ? "text-[#fc7d00]"
                  : "text-gray-700 hover:text-[#fc7d00]"
                  }`}
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className="opacity-50"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            );
          })}
        </div>

        {/* Actions - Right */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-gray-100">
            {/* User Icon & Menu */}
            <div className="relative group">
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#fc7d00] hover:border-[#fc7d00] transition-all duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-[calc(100%+8px)] right-0 w-48 bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="/auth?mode=login"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#fc7d00] transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth?mode=register"
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#fc7d00] transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>

            <button
              onClick={toggleCart}
              className="relative w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#fc7d00] hover:border-[#fc7d00] transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#fc7d00] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-[#fc7d00]/20">
                {cartCount}
              </span>
            </button>
          </div>

          <button className="h-11 px-6 bg-[#1a1a1a] hover:bg-[#fc7d00] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 active:scale-95 shadow-lg shadow-gray-200">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
