"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const checkoutItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    brand: "Simba Fresh",
    image: "/images/pizza.png",
    size: "Thin Crust",
    quantity: 2,
    price: 77.6,
  },
  {
    id: 2,
    name: "Cheese Burger",
    brand: "Simba Fresh",
    image: "/images/burger.png",
    size: "Whole wheat bun",
    quantity: 2,
    price: 82.6,
  },
  {
    id: 3,
    name: "Fresh Tomatoes",
    brand: "Simba Farm",
    image: "/images/product-peppers.png",
    size: "1kg",
    quantity: 1,
    price: 12.5,
  },
];

export default function CheckoutPage() {
  const [items, setItems] = useState(checkoutItems);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const updateQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="h-screen flex flex-col bg-white font-['Poppins'] text-[#1a1a1a] overflow-hidden">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Navbar />

      <main className="flex-1 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-24 py-12 h-full flex flex-col lg:flex-row gap-16">
          {/* Left Side: Order Details */}
          <div className="flex-[1.5] h-full flex flex-col pr-6 min-w-0">
            <h1 className="text-4xl font-black tracking-tight mb-8 shrink-0">
              Checkout
            </h1>

            {/* Table Header - Fixed */}
            <div className="grid grid-cols-[3fr_1fr_1.5fr_1fr_40px] gap-4 pb-6 border-b border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400 shrink-0">
              <span>Product</span>
              <span className="text-center">Size</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Total Price</span>
              <span></span>
            </div>

            {/* Items List - Scrollable */}
            <div className="flex-1 overflow-y-auto scrollbar-hide divide-y divide-gray-50 py-2">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-[3fr_1fr_1.5fr_1fr_40px] gap-4 py-6 items-center"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gray-50 rounded-[20px] flex items-center justify-center p-2.5 relative overflow-hidden group border border-gray-100/50">
                      {/* Circle Background for Image like in screenshot */}
                      <div className="absolute inset-1.5 bg-[#f8f8f8] rounded-full transform group-hover:scale-110 transition-transform duration-500" />
                      <div className="relative w-full h-full flex items-center justify-center text-2xl">
                        {item.name.includes("Pizza")
                          ? "🍕"
                          : item.name.includes("Burger")
                            ? "🍔"
                            : "🍅"}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-[10px] font-semibold text-gray-400 capitalize">
                        {item.brand}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative">
                      <select className="appearance-none bg-gray-50 border border-transparent rounded-lg px-3 py-1.5 text-[10px] font-bold focus:border-[#fc7d00] outline-none cursor-pointer pr-8">
                        <option>{item.size}</option>
                        <option>Large</option>
                        <option>Standard</option>
                      </select>
                      <svg
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40"
                        width="8"
                        height="5"
                        viewBox="0 0 10 6"
                        fill="none"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center gap-3 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100/50">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-gray-400 hover:text-[#1a1a1a] font-bold text-base transition-colors"
                      >
                        −
                      </button>
                      <span className="text-xs font-black text-[#1a1a1a] w-3 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-gray-400 hover:text-[#1a1a1a] font-bold text-base transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-black text-[#1a1a1a]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Bottom - Fixed */}
            <div className="shrink-0 pt-6 border-t border-gray-100 mt-2">
              <div className="flex flex-col items-end space-y-2.5">
                <div className="flex justify-between w-full max-w-[240px]">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Subtotal:
                  </span>
                  <span className="text-base font-black">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between w-full max-w-[240px]">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Shipping:
                  </span>
                  <span className="text-base font-black">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between w-full max-w-[240px] pt-3 border-t-2 border-dashed border-gray-100">
                  <span className="text-lg font-black uppercase tracking-tight">
                    Total:
                  </span>
                  <span className="text-xl font-black text-[#fc7d00]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-[11px] font-black text-[#1a1a1a] hover:text-[#fc7d00] transition-colors group"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform">
                    ←
                  </span>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Payment Info */}
          <div className="flex-1 h-full flex items-start">
            <div className="w-full bg-[#fcfcfc] border border-gray-100 rounded-[40px] p-6 shadow-sm">
              <h3 className="text-xl font-black mb-6">Payment Info</h3>

              <div className="space-y-5">
                {/* Payment Method Selector */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Payment Method:
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all duration-300 ${paymentMethod === "card" ? "border-[#fc7d00] bg-white shadow-md" : "border-gray-100 bg-transparent"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-[#fc7d00]" : "border-gray-200"}`}
                        >
                          {paymentMethod === "card" && (
                            <div className="w-2 h-2 bg-[#fc7d00] rounded-full" />
                          )}
                        </div>
                        <div className="flex items-center gap-3">
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
                            <rect
                              x="1"
                              y="4"
                              width="22"
                              height="16"
                              rx="2"
                              ry="2"
                            />
                            <line x1="1" y1="10" x2="23" y2="10" />
                          </svg>
                          <span className="text-xs font-bold">Credit Card</span>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setPaymentMethod("paypal")}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all duration-300 ${paymentMethod === "paypal" ? "border-[#fc7d00] bg-white shadow-md" : "border-gray-100 bg-transparent"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === "paypal" ? "border-[#fc7d00]" : "border-gray-200"}`}
                        >
                          {paymentMethod === "paypal" && (
                            <div className="w-2 h-2 bg-[#fc7d00] rounded-full" />
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944 3.729a.641.641 0 01.632-.54h7.49c1.93 0 3.397.436 4.41 1.29 1.144.966 1.7 2.41 1.623 4.258-.2 4.67-2.903 7.112-7.14 7.112h-2.183a.641.641 0 00-.632.54l-2.068 4.948z" />
                          </svg>
                          <span className="text-xs font-bold">PayPal</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Card Details */}
                <form
                  className="space-y-3.5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">
                      Name on Card:
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-100 px-4 py-3 rounded-xl text-xs font-bold focus:border-[#fc7d00] focus:shadow-lg focus:shadow-orange-50 outline-none transition-all placeholder:text-gray-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">
                      Card Number:
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="•••• •••• •••• 6573"
                        className="w-full bg-white border border-gray-100 px-4 py-3 rounded-xl text-xs font-bold focus:border-[#fc7d00] focus:shadow-lg focus:shadow-orange-50 outline-none transition-all placeholder:text-gray-200"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                        <div className="w-5 h-3.5 bg-[#EB001B] rounded-sm opacity-20" />
                        <div className="w-5 h-3.5 bg-[#F79E1B] rounded-sm opacity-20" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">
                        Expiration Date:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <select className="bg-white border border-gray-100 px-2 py-3 rounded-xl text-[10px] font-bold focus:border-[#fc7d00] outline-none">
                          <option>08</option>
                          <option>09</option>
                        </select>
                        <select className="bg-white border border-gray-100 px-2 py-3 rounded-xl text-[10px] font-bold focus:border-[#fc7d00] outline-none">
                          <option>2032</option>
                          <option>2033</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 px-1">
                        CVV:
                      </label>
                      <input
                        type="text"
                        placeholder="243"
                        className="w-full bg-white border border-gray-100 px-4 py-3 rounded-xl text-xs font-bold focus:border-[#fc7d00] outline-none transition-all placeholder:text-gray-200"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-[#fc7d00] hover:bg-[#e67100] text-white font-black py-4 rounded-[20px] text-xs uppercase tracking-widest transition-all shadow-xl shadow-orange-100 active:scale-[0.98] mt-2">
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
