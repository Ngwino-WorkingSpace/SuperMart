"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Alfa_Slab_One } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dynamically import LeafletMap to avoid SSR issues (Leaflet requires window/DOM)
const LeafletMap = dynamic(() => import("../components/LeafletMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center animate-pulse">
            <div className="flex flex-col items-center gap-2 text-gray-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-xs font-semibold">Loading map...</span>
            </div>
        </div>
    ),
});

const alfa = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-[#fffaf5] text-[#1a1a1a] font-sans flex flex-col overflow-hidden relative">
            <Navbar />

            <main className="flex-1 pb-12">
                {/* Header Section */}
                <section className="relative bg-[#fff3e6] py-10 md:py-16 rounded-b-[30px] md:rounded-b-[50px] px-4 overflow-hidden">
                    {/* Decorative Arrows Left */}
                    <div className="absolute top-10 left-4 md:left-16 flex gap-1 opacity-20">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={`l-${i}`} width="12" height="18" viewBox="0 0 24 24" fill="none" stroke="#fc7d00" strokeWidth="2.5">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        ))}
                    </div>

                    {/* Decorative Arrows Right */}
                    <div className="absolute bottom-10 right-4 md:right-16 flex gap-1 opacity-20">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={`r-${i}`} width="12" height="18" viewBox="0 0 24 24" fill="none" stroke="#fc7d00" strokeWidth="2.5">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center relative z-10">
                        <h1 className={`${alfa.className} text-3xl md:text-5xl text-[#1a1a1a] mb-3 tracking-wide`}>
                            Contact Us
                        </h1>

                        {/* Wavy line decorative */}
                        <div className="flex justify-center mb-4 opacity-30">
                            <svg width="80" height="12" viewBox="0 0 120 20" fill="none">
                                <path d="M0 10 Q 15 0, 30 10 T 60 10 T 90 10 T 120 10" stroke="#fc7d00" strokeWidth="3" fill="none" />
                            </svg>
                        </div>

                        <p className="text-gray-500 font-medium text-[11px] max-w-sm mx-auto leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                </section>

                {/* Logo Section */}
                <section className="py-6 max-w-4xl mx-auto px-4 border-b border-orange-50/50">
                    <div className="flex flex-wrap justify-between items-center gap-6 opacity-40 grayscale">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-1.5 font-bold text-sm tracking-wider">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5H5.5L12 6.5z" />
                                </svg>
                                LOGOIPSUM
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-4xl mx-auto px-4 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left: Contact Form */}
                        <div className="space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-[#fff3e6] placeholder:text-gray-400 text-xs font-semibold p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#fc7d00]/50 transition-all border border-transparent"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full bg-[#fff3e6] placeholder:text-gray-400 text-xs font-semibold p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#fc7d00]/50 transition-all border border-transparent"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-[#fff3e6] placeholder:text-gray-400 text-xs font-semibold p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#fc7d00]/50 transition-all border border-transparent"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full bg-[#fff3e6] placeholder:text-gray-400 text-xs font-semibold p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#fc7d00]/50 transition-all border border-transparent resize-none"
                            />
                            <button className="bg-[#fc7d00] hover:bg-[#e67200] text-white text-[10px] uppercase font-bold py-2.5 px-6 rounded-full transition-all active:scale-95 shadow-lg shadow-orange-500/20 tracking-wider">
                                Submit Button
                            </button>
                        </div>

                        {/* Right: Newsletter Card */}
                        <div>
                            <div className="bg-[#1a1a1a] rounded-2xl p-6 h-full shadow-xl relative overflow-hidden flex flex-col justify-center">
                                {/* Decorative background shape */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#fc7d00]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                                <h3 className="text-xl font-black text-white mb-2 relative z-10">Our Newsletters</h3>
                                <p className="text-gray-400 text-[10px] font-medium leading-relaxed mb-5 max-w-[200px] relative z-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                </p>

                                <form className="space-y-2 relative z-10" onSubmit={e => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white text-xs font-semibold p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#fc7d00] transition-all"
                                    />
                                    <button className="w-full bg-[#fc7d00] hover:bg-[#e67200] text-white text-[10px] font-bold py-3 rounded-full transition-all active:scale-95 shadow-md shadow-orange-500/20 uppercase tracking-widest">
                                        Submit Button
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Info Cards Row */}
                <section className="max-w-4xl mx-auto px-4 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Card 1 - Dark */}
                        <div className="bg-[#1a1a1a] text-white rounded-2xl p-5 shadow-lg flex flex-col justify-center items-start min-h-[110px] hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="p-1.5 bg-white/10 rounded-lg text-[#fc7d00]">
                                    <PhoneIcon />
                                </div>
                                <h4 className="font-bold text-sm tracking-wide">(+876) 765 665</h4>
                            </div>
                            <p className="text-[9px] text-gray-400 font-medium leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.
                            </p>
                        </div>

                        {/* Card 2 - Orange tinted */}
                        <div className="bg-[#fff3e6] text-[#1a1a1a] rounded-2xl p-5 shadow-sm border border-orange-50 flex flex-col justify-center items-start min-h-[110px] hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="p-1.5 bg-orange-100/50 rounded-lg text-[#fc7d00]">
                                    <MailIcon />
                                </div>
                                <h4 className="font-bold text-sm tracking-wide">mail@simba.id</h4>
                            </div>
                            <p className="text-[9px] text-gray-500 font-medium leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.
                            </p>
                        </div>

                        {/* Card 3 - White */}
                        <div className="bg-white text-[#1a1a1a] rounded-2xl p-5 shadow-[0_4px_15px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center items-start min-h-[110px] hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="p-1.5 bg-gray-50 rounded-lg text-[#fc7d00]">
                                    <MapPinIcon />
                                </div>
                                <h4 className="font-bold text-sm tracking-wide">London Eye London</h4>
                            </div>
                            <p className="text-[9px] text-gray-500 font-medium leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Map Section */}
                <section className="max-w-4xl mx-auto px-4 mt-8">
                    <div className="w-full h-[240px] md:h-[300px] rounded-2xl overflow-hidden shadow-md border border-gray-100 relative">
                        <LeafletMap
                            center={[51.5033, -0.1196]}
                            zoom={15}
                            markerPosition={[51.5033, -0.1196]}
                            popupText="SuperMart — London Eye Branch"
                        />
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

// Icons
function PhoneIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 8 10 5 10-5" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
