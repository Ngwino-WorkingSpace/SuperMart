"use client";

import Image from "next/image";
import { Alfa_Slab_One } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const alfa = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

export default function CheckoutPage() {
  const { cartItems, cartSubtotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const discount = cartItems.length > 0 ? 30 : 0;
  const shipping = 0;
  const total = cartItems.length > 0 ? cartSubtotal - discount + shipping : 0;

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#1a1a1a] font-sans flex flex-col relative overflow-hidden">
      <Navbar />

      <main className="flex-1 pb-12">
        {/* Stepper Header (Compacted) */}
        <div className="pt-8 pb-6 w-full max-w-xl mx-auto mt-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1.5 left-0 w-full h-[2px] bg-gray-200 -z-10" />
            <div className="absolute top-1.5 left-0 w-1/2 h-[2px] bg-[#fc7d00] -z-10" />

            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-[#fc7d00]" />
              <span className="text-[10px] font-semibold text-gray-600">Order</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#fc7d00]" />
              <span className="text-[10px] font-semibold text-gray-600">Shipping</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-[#fc7d00] flex items-center justify-center shadow-[0_0_0_3px_rgba(252,125,0,0.2)]">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <span className="text-[10px] font-semibold text-gray-800">Payment</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-200" />
              <span className="text-[10px] font-semibold text-gray-600">Review</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 px-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Items Card */}
            <div className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${alfa.className} text-lg tracking-wide text-[#fc7d00]`}>
                  Items <span className="text-gray-400 font-sans tracking-normal font-medium text-xs">({cartItems.length} items)</span>
                </h2>
                <button
                  onClick={clearCart}
                  className={`text-[#e53e3e] flex items-center gap-1 ${alfa.className} text-xs tracking-wide hover:opacity-80 transition-opacity`}
                >
                  <TrashIcon /> Remove all
                </button>
              </div>

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="relative flex gap-4 p-3 rounded-lg border border-gray-50/80 shadow-sm bg-gradient-to-b from-white to-gray-50/20">
                    <div className="relative w-20 h-20 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply" />
                    </div>

                    <div className="flex-1 py-0.5">
                      <h3 className={`${alfa.className} text-base text-[#1a1a1a] mb-0.5 tracking-wide`}>
                        {item.name}
                      </h3>
                      <div className="space-y-0.5 mb-2.5">
                        <p className="text-[10px] font-semibold text-gray-400">{item.category || item.size || "Item"}</p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 flex items-center justify-center bg-[#fc7d00] text-white rounded font-medium hover:bg-[#e67200] transition-colors text-xs"
                        >
                          -
                        </button>
                        <span className="w-3 text-center text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 flex items-center justify-center bg-[#fc7d00] text-white rounded font-medium hover:bg-[#e67200] transition-colors text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between py-0.5">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#e53e3e] hover:opacity-70 transition-opacity"
                      >
                        <CloseIcon />
                      </button>
                      <span className={`${alfa.className} text-base text-[#1a1a1a] tracking-wide`}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <div className="text-center py-6 text-gray-400 text-sm font-normal">Your cart is empty</div>
                )}
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50">
              <h2 className={`${alfa.className} text-lg tracking-wide text-[#fc7d00] mb-4`}>
                Order summary
              </h2>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-gray-600">
                  <span>Subtotal</span>
                  <span className="text-[#1a1a1a]">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="w-full h-px bg-orange-50/50" />

                <div className="flex justify-between items-center text-xs font-semibold text-gray-600">
                  <span>Discount</span>
                  <span className="text-[#1a1a1a]">-${discount}</span>
                </div>
                <div className="w-full h-px bg-orange-50/50" />

                <div className="flex justify-between items-center text-xs font-semibold text-gray-600">
                  <span>Shipping</span>
                  <span className="text-[#1a1a1a]">FREE</span>
                </div>
                <div className="w-full h-px bg-orange-50/50" />

                <div className="flex justify-between items-center pt-2">
                  <span className={`${alfa.className} text-base tracking-wide text-[#1a1a1a]`}>
                    Total Price
                  </span>
                  <span className={`${alfa.className} text-base tracking-wide text-[#fc7d00]`}>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 sticky top-20">
              <h2 className={`${alfa.className} text-xl tracking-wide text-[#fc7d00] mb-5`}>
                Checkout
              </h2>

              {/* Payment Options */}
              <div className="flex gap-3 mb-5">
                <div className="flex-1 flex items-center justify-center py-2 px-1 border rounded-lg border-gray-100 shadow-sm cursor-pointer hover:border-[#fc7d00] transition-colors">
                  <div className="relative w-8 h-5">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center py-2 px-1 border rounded-lg border-[#fc7d00] bg-orange-50/20 shadow-sm cursor-pointer">
                  <div className="relative w-10 h-5">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="VISA" fill className="object-contain" />
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center py-2 px-1 border rounded-lg border-gray-100 shadow-sm cursor-pointer hover:border-[#fc7d00] transition-colors">
                  <div className="relative w-12 h-5">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" fill className="object-contain" />
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 mb-1.5">
                    Cardholder name
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-slate-100 rounded-md p-2 text-xs font-medium focus:outline-none focus:border-[#fc7d00] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-500 mb-1.5">
                    Card number
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-slate-100 rounded-md p-2 text-xs font-medium focus:outline-none focus:border-[#fc7d00] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500 mb-1.5">
                      Expiration date
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-slate-100 rounded-md p-2 text-xs font-medium focus:outline-none focus:border-[#fc7d00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-500 mb-1.5">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-slate-100 rounded-md p-2 text-xs font-medium focus:outline-none focus:border-[#fc7d00] transition-colors"
                    />
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r from-[#fc7d00] to-[#e67200] text-white py-3 rounded-lg mt-5 shadow-[0_4px_12px_rgb(252,125,0,0.25)] hover:opacity-90 transition-opacity active:scale-[0.98] ${alfa.className} text-base tracking-normal`}>
                  Pay now
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Icons
function TrashIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
