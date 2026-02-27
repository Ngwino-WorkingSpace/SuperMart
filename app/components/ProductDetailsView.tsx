"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface ProductDetails {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
}

export default function ProductDetailsView({
  product,
}: {
  product: ProductDetails;
}) {
  const { openCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const tabs = ["DESCRIPTION", "CHARACTERISTICS", "DELIVERY", "REVIEWS"];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-['Poppins']">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 flex justify-between items-center bg-white sticky top-0 z-10">
        <Link
          href="/shop"
          className="flex items-center gap-2 text-gray-400 hover:text-[#fc7d00] transition-colors group"
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
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span className="text-sm font-semibold uppercase tracking-widest">
            Back
          </span>
        </Link>
        <Link
          href="/"
          className="text-gray-300 hover:text-gray-900 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image Section */}
          <div className="space-y-8">
            <div className="relative aspect-square bg-[#f8f8f8] rounded-[40px] overflow-hidden flex items-center justify-center p-12 group">
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-400 hover:text-[#fc7d00] transition-all opacity-0 group-hover:opacity-100"
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === 0 ? product.images.length - 1 : prev - 1,
                  )
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-gray-400 hover:text-[#fc7d00] transition-all opacity-0 group-hover:opacity-100"
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === product.images.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden bg-[#f8f8f8] p-4 transition-all border-2 ${
                    activeImage === idx
                      ? "border-[#fc7d00] shadow-md scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${idx}`}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl font-black mb-2 uppercase tracking-tight">
                {product.name}
              </h1>
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-6">
                {product.category}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-[#fc7d00]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl font-bold text-gray-200 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex border-b border-gray-100 gap-8 overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[10px] font-black tracking-[0.2em] transition-all relative ${
                      activeTab === tab
                        ? "text-[#fc7d00]"
                        : "text-gray-300 hover:text-gray-600"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fc7d00] rounded-full" />
                    )}
                  </button>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-500 font-medium max-w-xl">
                {product.description}
                <span className="text-[#fc7d00] cursor-pointer ml-1 font-bold">
                  Read more...
                </span>
              </p>
            </div>

            {/* Selectors */}
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                  Size
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-11 px-6 rounded-xl text-xs font-black transition-all border-2 ${
                        selectedSize === size
                          ? "bg-[#fc7d00] border-[#fc7d00] text-white shadow-lg shadow-orange-200"
                          : "bg-white border-gray-50 text-gray-400 hover:border-gray-200 hover:text-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                  Color
                </span>
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-4 transition-all transform hover:scale-125 ${
                        selectedColor === color
                          ? "border-gray-100 scale-125 shadow-lg"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 border-2 border-gray-100 hover:border-gray-900 h-16 rounded-3xl flex items-center justify-center gap-3 transition-all group">
                <span className="text-xs font-black uppercase tracking-widest">
                  In Favorites
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:fill-red-500 group-hover:stroke-red-500 transition-all"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button
                onClick={openCart}
                className="flex-[1.2] bg-[#fc7d00] hover:bg-[#e67200] text-white h-16 rounded-3xl flex items-center justify-center text-xs font-black uppercase tracking-widest shadow-xl shadow-orange-200 transition-all active:scale-[0.98]"
              >
                In Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
