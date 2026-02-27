"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const cartItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    description: "Thin Crust",
    price: 77.6,
    quantity: 2,
    image: "/images/pizza.png",
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "Whole wheat bun",
    price: 82.6,
    quantity: 2,
    image: "/images/burger.png",
  },
];

export default function CartSidebar() {
  const { isCartOpen, closeCart } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryCharge = 10;
  const total = subtotal + deliveryCharge;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />

          {/* Sidebar Receipt Container */}
          <motion.div
            initial={{ x: "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "110%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              // Genuine Receipt Cut-outs using CSS Masking
              // This creates actual holes in the container, its background, and its shadow.
              WebkitMaskImage: `radial-gradient(circle at 0 64%, transparent 12px, black 13px), radial-gradient(circle at 100% 64%, transparent 12px, black 13px)`,
              WebkitMaskComposite: "source-in",
              maskImage: `radial-gradient(circle at 0 64%, transparent 12px, black 13px), radial-gradient(circle at 100% 64%, transparent 12px, black 13px)`,
              maskComposite: "intersect",
            }}
            className="fixed top-1/2 -translate-y-1/2 right-4 h-[92vh] w-full max-w-[380px] bg-white text-[#1a1a1a] z-[70] shadow-2xl rounded-[32px] flex flex-col border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={closeCart}
              className="absolute top-5 right-6 text-gray-300 hover:text-gray-900 transition-colors z-[72]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="px-6 py-6 flex flex-col h-full relative">
              {/* Cart Header */}
              <div className="mb-4 mt-2">
                <div className="flex items-center gap-2 mb-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#e53e3e]"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                  </svg>
                  <h2 className="text-xl font-extrabold tracking-tight">
                    Cart
                  </h2>
                </div>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                  Order ID: #1099
                </span>
              </div>

              {/* Order Type Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1 rounded-full mb-6">
                <button className="bg-[#e53e3e] text-white rounded-full py-1.5 text-[10px] font-bold shadow-sm">
                  Delivery
                </button>
                <button className="text-gray-500 py-1.5 text-[10px] font-bold">
                  Dine In
                </button>
                <button className="text-gray-500 border-l border-gray-200 py-1.5 text-[10px] font-bold">
                  Takeaway
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto space-y-6 pr-1 scrollbar-hide py-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center p-1.5 shrink-0 border border-gray-100">
                      <div className="bg-orange-50 rounded-full w-10 h-10 flex items-center justify-center text-xl">
                        {item.name.includes("Pizza") ? "🍕" : "🍔"}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm text-gray-800 truncate">
                            {item.name}
                          </h4>
                          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">
                            {item.description}
                          </p>
                        </div>
                        <button className="p-1.5 bg-white border border-gray-100 text-gray-400 rounded-lg hover:bg-gray-50 transition-all flex-shrink-0 shadow-sm">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full border border-gray-200/50">
                          <button className="text-gray-400 hover:text-gray-900 font-bold text-xs">
                            -
                          </button>
                          <span className="text-xs font-black text-gray-700 w-3 text-center">
                            {item.quantity}
                          </span>
                          <button className="text-gray-400 hover:text-gray-900 font-bold text-xs">
                            +
                          </button>
                        </div>
                        <span className="text-sm font-black text-[#1a1a1a] ml-auto">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dashed Line Section (Aligns with Cut-outs) */}
              <div className="relative py-6">
                <div className="absolute top-1/2 left-[-32px] right-[-32px] border-t-2 border-dashed border-gray-200 z-10" />
              </div>

              {/* Promo Code */}
              <div className="relative mb-6">
                <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl p-1 shadow-sm">
                  <input
                    type="text"
                    placeholder="Promotion Code"
                    className="flex-1 bg-transparent py-2.5 px-3 text-[10px] font-semibold placeholder:text-gray-300 focus:outline-none"
                  />
                  <button className="bg-[#1a1a1a] text-white font-black py-2 px-4 rounded-lg text-[9px] tracking-widest hover:bg-black transition-all shadow-md">
                    TRYNEW
                  </button>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2 mb-6 border-t border-gray-50 pt-4">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Sub Total
                  </span>
                  <span className="text-xs font-extrabold text-[#1a1a1a]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Delivery Charge
                  </span>
                  <span className="text-xs font-extrabold text-[#1a1a1a]">
                    ${deliveryCharge.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 px-1 border-t-2 border-dashed border-gray-100">
                  <span className="text-base font-black tracking-tight text-[#1a1a1a]">
                    TOTAL
                  </span>
                  <span className="text-lg font-black text-[#e53e3e]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Confirm Order Button */}
              <button className="w-full bg-[#1a1a1a] hover:bg-black text-white font-black py-3.5 rounded-2xl text-[11px] uppercase tracking-widest transition-all active:scale-[0.98] shadow-lg shadow-black/10">
                Confirm Order
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
