"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dynamically import Leaflet map components (requires browser DOM)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// All 11 Simba Supermarket branches in Kigali, Rwanda
const branches = [
  {
    id: 1,
    name: "Simba Centenary",
    address: "KN 4 Ave, Centenary House, Kigali",
    phone: "+250 788 300 001",
    email: "centenary@simba.rw",
    type: "Full Service",
    coordinates: [-1.9536, 30.0606] as [number, number],
    rating: 4.9,
    reviews: 487,
    distance: "0.3 km away",
    status: "Open",
  },
  {
    id: 2,
    name: "Simba Gishushu",
    address: "KG 9 Ave, Gishushu, Kigali",
    phone: "+250 788 300 002",
    email: "gishushu@simba.rw",
    type: "Full Service",
    coordinates: [-1.9550, 30.0900] as [number, number],
    rating: 4.8,
    reviews: 352,
    distance: "1.8 km away",
    status: "Open",
  },
  {
    id: 3,
    name: "Simba Kimironko",
    address: "KG 17 Ave, Kimironko, Kigali",
    phone: "+250 788 300 003",
    email: "kimironko@simba.rw",
    type: "Full Service",
    coordinates: [-1.9410, 30.1130] as [number, number],
    rating: 4.7,
    reviews: 289,
    distance: "3.5 km away",
    status: "Open",
  },
  {
    id: 4,
    name: "Simba Kicukiro",
    address: "KK 15 Ave, Kicukiro, Kigali",
    phone: "+250 788 300 004",
    email: "kicukiro@simba.rw",
    type: "Full Service",
    coordinates: [-1.9741, 30.0781] as [number, number],
    rating: 4.6,
    reviews: 215,
    distance: "2.1 km away",
    status: "Open",
  },
  {
    id: 5,
    name: "Simba Kigali Heights",
    address: "KG 7 Ave, Kigali Heights, Kiyovu",
    phone: "+250 788 300 005",
    email: "heights@simba.rw",
    type: "Premium",
    coordinates: [-1.9530, 30.0630] as [number, number],
    rating: 4.9,
    reviews: 523,
    distance: "0.5 km away",
    status: "Open",
  },
  {
    id: 6,
    name: "Simba UTC",
    address: "KN 2 Ave, UTC Building, Kigali",
    phone: "+250 788 300 006",
    email: "utc@simba.rw",
    type: "Express",
    coordinates: [-1.9500, 30.0590] as [number, number],
    rating: 4.5,
    reviews: 198,
    distance: "0.8 km away",
    status: "Open",
  },
  {
    id: 7,
    name: "Simba Gacuriro",
    address: "KG 28 Ave, Gacuriro, Kigali",
    phone: "+250 788 300 007",
    email: "gacuriro@simba.rw",
    type: "Full Service",
    coordinates: [-1.9180, 30.1120] as [number, number],
    rating: 4.6,
    reviews: 176,
    distance: "5.2 km away",
    status: "Open",
  },
  {
    id: 8,
    name: "Simba Gikondo",
    address: "KK 31 Ave, Gikondo, Kigali",
    phone: "+250 788 300 008",
    email: "gikondo@simba.rw",
    type: "Hub",
    coordinates: [-1.9720, 30.0750] as [number, number],
    rating: 4.4,
    reviews: 143,
    distance: "1.9 km away",
    status: "Open",
  },
  {
    id: 9,
    name: "Simba Sonatube",
    address: "KK 19 Ave, Sonatube, Kigali",
    phone: "+250 788 300 009",
    email: "sonatube@simba.rw",
    type: "Express",
    coordinates: [-1.9680, 30.0820] as [number, number],
    rating: 4.3,
    reviews: 112,
    distance: "1.5 km away",
    status: "Open",
  },
  {
    id: 10,
    name: "Simba Kisimenti",
    address: "KG 11 Ave, Kisimenti, Remera",
    phone: "+250 788 300 010",
    email: "kisimenti@simba.rw",
    type: "Full Service",
    coordinates: [-1.9520, 30.0940] as [number, number],
    rating: 4.7,
    reviews: 267,
    distance: "2.0 km away",
    status: "Open",
  },
  {
    id: 11,
    name: "Simba Rebero",
    address: "KK 5 Rd, Rebero, Kigali",
    phone: "+250 788 300 011",
    email: "rebero@simba.rw",
    type: "Express",
    coordinates: [-1.9800, 30.0850] as [number, number],
    rating: 4.5,
    reviews: 156,
    distance: "3.0 km away",
    status: "Open",
  },
];

export default function LocationsPage() {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [mounted, setMounted] = useState(false);
  const [defaultIcon, setDefaultIcon] = useState<any>(null);
  const [selectedIcon, setSelectedIcon] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        // Prominent orange marker for all branches
        setDefaultIcon(
          L.divIcon({
            className: "simba-branch-marker",
            html: `<div style="width:32px;height:32px;background:#fc7d00;border:3px solid white;border-radius:50%;box-shadow:0 2px 10px rgba(252,125,0,.45);display:flex;align-items:center;justify-content:center;position:relative;"><svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5'><path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7'/><path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'/><path d='M2 7h20'/></svg></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -30],
          })
        );
        // Bigger highlighted marker for selected branch
        setSelectedIcon(
          L.divIcon({
            className: "simba-selected-marker",
            html: `<div style="width:44px;height:44px;background:#1a1c1e;border:3px solid #fc7d00;border-radius:50%;box-shadow:0 4px 20px rgba(252,125,0,.6);display:flex;align-items:center;justify-content:center;animation:pulse-marker 2s infinite;"><svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#fc7d00' stroke-width='2.5'><path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7'/><path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'/><path d='M2 7h20'/></svg></div>`,
            iconSize: [44, 44],
            iconAnchor: [22, 44],
            popupAnchor: [0, -42],
          })
        );
      });
    }
  }, []);

  const mapCenter: [number, number] = selectedBranch?.coordinates || [-1.9441, 30.0619];

  return (
    <div className="min-h-screen bg-[#fffcf8] text-[#1a1a1a] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Side: Map */}
        <div className="flex-1 relative bg-[#f0f4f8] overflow-hidden">
          {/* Map Controls */}
          {/* Map Controls */}
          <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <button className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider bg-gray-100 border-b border-gray-200">
                Map
              </button>
              <button className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-gray-50 transition-all text-gray-400">
                Satellite
              </button>
            </div>
          </div>

          {/* Search Overlay */}
          {/* Search Overlay */}
          <div className="absolute top-4 right-4 z-[1000] w-full max-w-[320px]">
            <div className="bg-white shadow-xl rounded-full p-1 flex items-center border border-gray-100">
              <input
                type="text"
                placeholder="Panel number, zip, or city..."
                className="flex-1 bg-transparent px-4 py-2 text-xs font-semibold focus:outline-none placeholder:text-gray-300"
              />
              <button className="bg-[#1a1c1e] text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">
                Go
              </button>
            </div>
          </div>

          {/* Interactive Leaflet Map of Rwanda */}
          {/* Full-bleed Leaflet Map */}
          <div className="absolute inset-0">
            {mounted && typeof window !== "undefined" ? (
              <>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
                <style>{`
                  @keyframes pulse-marker {
                    0%, 100% { box-shadow: 0 4px 20px rgba(252,125,0,.6); }
                    50% { box-shadow: 0 4px 30px rgba(252,125,0,.9), 0 0 0 12px rgba(252,125,0,.15); }
                  }
                  .leaflet-popup-content-wrapper {
                    padding: 0 !important;
                    border-radius: 14px !important;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
                  }
                  .leaflet-popup-content {
                    margin: 0 !important;
                    width: auto !important;
                  }
                  .leaflet-popup-tip {
                    box-shadow: none !important;
                  }
                  .leaflet-popup-close-button {
                    top: 6px !important;
                    right: 6px !important;
                    width: 22px !important;
                    height: 22px !important;
                    font-size: 16px !important;
                    color: #999 !important;
                    background: #f5f5f5 !important;
                    border-radius: 50% !important;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                  }
                  .leaflet-popup-close-button:hover {
                    color: #333 !important;
                    background: #eee !important;
                  }
                `}</style>
                <MapContainer
                  center={selectedBranch ? mapCenter : [-1.9550, 30.0800]}
                  zoom={selectedBranch ? 15 : 13}
                  scrollWheelZoom={true}
                  style={{ height: "100%", width: "100%", zIndex: 0 }}
                  key={selectedBranch?.id || "default"}
                  maxBounds={[[-2.85, 28.85], [-1.04, 30.90]]}
                  maxBoundsViscosity={1.0}
                  minZoom={8}
                  maxZoom={18}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  {branches.map((branch) => {
                    const isSelected = selectedBranch?.id === branch.id;
                    return (
                      <Marker
                        key={branch.id}
                        position={branch.coordinates}
                        icon={isSelected && selectedIcon ? selectedIcon : defaultIcon}
                        eventHandlers={{ click: () => setSelectedBranch(branch) }}
                      >
                        <Popup>
                          <div style={{ width: 320, fontFamily: 'system-ui, -apple-system, sans-serif', padding: 0 }}>
                            {/* Top section: Photo + Info */}
                            <div style={{ display: 'flex', gap: 12, padding: '12px 12px 8px 12px' }}>
                              {/* Store Photo */}
                              <div style={{ width: 80, height: 80, borderRadius: 10, overflow: 'hidden', flexShrink: 0, background: '#f3f3f3' }}>
                                <img
                                  src="/images/cat-produce.png"
                                  alt={branch.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </div>
                              {/* Info */}
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                                  <span style={{ fontSize: 14, fontWeight: 800, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 160 }}>
                                    Simba — {branch.name}
                                  </span>
                                  <span style={{ fontSize: 10, fontWeight: 700, background: '#fc7d00', color: 'white', padding: '3px 10px', borderRadius: 20, flexShrink: 0 }}>
                                    {branch.status}
                                  </span>
                                </div>
                                {/* Rating */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
                                  <span style={{ color: '#fbbf24', fontSize: 14 }}>★</span>
                                  <span style={{ fontWeight: 700, fontSize: 12, color: '#1a1a1a' }}>{branch.rating}</span>
                                  <span style={{ fontSize: 11, color: '#999' }}>({branch.reviews} reviews)</span>
                                </div>
                                {/* Address */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#666', marginBottom: 3 }}>
                                  <span style={{ flexShrink: 0 }}>�</span>
                                  <span>{branch.address}</span>
                                </div>
                                {/* Distance */}
                                <div style={{ fontSize: 11, color: '#fc7d00', fontWeight: 600, marginBottom: 3, paddingLeft: 18 }}>
                                  {branch.distance}
                                </div>
                                {/* Phone */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#666' }}>
                                  <span style={{ flexShrink: 0 }}>📞</span>
                                  <span>{branch.phone}</span>
                                </div>
                              </div>
                            </div>
                            {/* Separator */}
                            <div style={{ height: 1, background: '#f0f0f0', margin: '4px 12px' }} />
                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: 8, padding: '8px 12px 12px 12px' }}>
                              <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates[0]},${branch.coordinates[1]}`}
                                target="_blank"
                                rel="noreferrer"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#fc7d00', color: 'white', fontWeight: 700, fontSize: 12, padding: '10px 0', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', border: 'none' }}
                              >
                                📍 Get Directions
                              </a>
                              <a
                                href={`tel:${branch.phone}`}
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: 'white', color: '#333', fontWeight: 700, fontSize: 12, padding: '10px 0', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', border: '1.5px solid #e5e5e5' }}
                              >
                                📞 Call Now
                              </a>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    );
                  })}
                </MapContainer>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center animate-pulse">
                <div className="flex flex-col items-center gap-2 text-gray-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs font-semibold">Loading map...</span>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 right-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3">
              <h5 className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-2">Legend</h5>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2b7cff]" />
                  <span className="text-[10px] font-medium text-gray-600">Simba Branch</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#fc7d00] ring-2 ring-[#fc7d00]/30 ring-offset-1" />
                  <span className="text-[10px] font-medium text-gray-600">Selected Branch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 'Hide' Button for Sidebar (Design consistency) */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl border border-gray-100 p-2 rounded-l-xl flex items-center justify-center hover:bg-gray-50 transition-all group">
            <div className="flex flex-col items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="text-[8px] font-black uppercase tracking-tighter [writing-mode:vertical-lr]">
                Hide
              </span>
            </div>
          </button>
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full md:w-[380px] bg-gray-50 border-l border-gray-100 flex flex-col overflow-y-auto custom-scrollbar p-6 space-y-6">
          {/* Contacts Section */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#fc7d00]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Contacts
                </h3>
              </div>
              <button className="text-gray-300 hover:text-gray-900 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
            </div>

            <div className="relative z-10">
              <h4 className="text-base font-bold text-[#1a1a1a] mb-1">
                {selectedBranch.name}
              </h4>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Branch Manager |{" "}
                {selectedBranch.address.split(",")[1]?.trim() || "Unit"}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fc7d00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {selectedBranch.phone}
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-600">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fc7d00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {selectedBranch.email}
                </div>
              </div>
            </div>
          </section>

          {/* Products Section (Filters) */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#fc7d00]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Services
                </h3>
              </div>
              <button className="text-gray-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Fresh Store", active: true, color: "#fc7d00" },
                { label: "Electronics", active: true, color: "#34d399" },
                { label: "Home Delivery", active: true, color: "#fbbf24" },
                { label: "Pharmacy", active: false, color: "#f87171" },
                { label: "Pharmacy Store", active: true, color: "#60a5fa" },
                { label: "Wholesale", active: false, color: "#a78bfa" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${item.active ? "bg-[#fc7d00] border-[#fc7d00]" : "border-gray-200"}`}
                  >
                    {item.active && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span
                    className={`text-[10px] font-bold ${item.active ? "text-gray-700" : "text-gray-300"}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-300 font-medium mt-4">
              * Colored services available at this branch
            </p>
          </section>

          {/* Packages & Promotions */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-[#fc7d00]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">
                  Promotions
                </h3>
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-black text-[#1a1a1a]">
                15% off Fresh Veggies in March
              </h4>
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                **Prices vary based on branch inventory and seasonal
                availability.
              </p>
              <button className="text-[#fc7d00] text-[10px] font-black uppercase tracking-widest mt-2 hover:underline">
                View bundles
              </button>
            </div>
          </section>

          {/* All Branches List */}
          <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
              Nearby Branches
            </h3>
            <div className="space-y-4">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`cursor-pointer pb-3 border-b border-gray-50 last:border-0 transition-all ${selectedBranch.id === branch.id ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-bold text-[#1a1a1a]">
                        {branch.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-medium">
                        {branch.address}
                      </p>
                    </div>
                    <span className="text-[9px] font-black text-[#fc7d00] uppercase tracking-tighter bg-[#fff3e6] px-2 py-0.5 rounded">
                      {branch.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
