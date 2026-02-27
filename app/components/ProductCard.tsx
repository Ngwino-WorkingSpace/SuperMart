"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id?: string;
  name: string;
  image: string;
  weight: string;
  price: number;
  originalPrice?: number;
  rating: number;
  badge?: "sale" | "new";
  category?: string;
  variant?: "vertical" | "horizontal";
}

export default function ProductCard({
  id = "1",
  name,
  image,
  weight,
  price,
  originalPrice,
  rating,
  badge,
  category = "Fruits & Vegetables",
  variant = "vertical",
}: ProductCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

  if (variant === "horizontal") {
    return (
      <Link href={`/product/${id}`} className="block h-full cursor-pointer">
        <div className="flex flex-row items-center !bg-white !rounded-xl !border !border-gray-100 !overflow-hidden group !h-auto relative">
          {badge && (
            <span
              className={`product-badge ${badge === "sale" ? "badge-sale" : "badge-new"} !absolute !top-2 !left-2 !z-10`}
            >
              {badge === "sale" ? "Sale" : "New"}
            </span>
          )}

          {/* Left side: Image */}
          <div className="!bg-gray-50/50 !p-4 !h-full w-[160px] flex-shrink-0 flex items-center justify-center">
            <Image
              src={image}
              alt={name}
              width={100}
              height={100}
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Right side: Content */}
          <div className="p-5 flex-1 flex flex-col justify-center min-w-0 h-full">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="!text-[9px] !bg-white !text-gray-400 !border !border-gray-100 !px-2 !py-0.5 !rounded !uppercase !font-bold tracking-tight">
                  {category}
                </span>
                <div className="product-rating text-[8px] flex gap-0.5 opacity-60">
                  {stars.map((filled, i) => (
                    <span key={i} className="star text-[#fc7d00]">
                      {filled ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="!text-sm !font-black !mb-1 !leading-tight !text-gray-900 group-hover:!text-[#fc7d00] !transition-colors">
                {name}
              </h3>
              <p className="!text-[10px] !text-gray-400 !font-medium">
                {weight}
              </p>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="!text-[17px] !font-black !text-gray-900">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="!text-[10px] !font-medium !text-gray-300 !line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 h-9 rounded-lg border border-gray-100 text-[9px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95">
                  + Cart
                </button>
                <button className="flex-1 h-9 rounded-lg bg-[#1a1a1a] text-white text-[9px] font-bold uppercase tracking-widest hover:bg-[#fc7d00] transition-all shadow-sm active:scale-95">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/product/${id}`} className="block h-full cursor-pointer">
      <div className="product-card h-full">
        {badge && (
          <span
            className={`product-badge ${badge === "sale" ? "badge-sale" : "badge-new"}`}
          >
            {badge === "sale" ? "Sale" : "New"}
          </span>
        )}

        <div className="product-image-wrap">
          <Image
            src={image}
            alt={name}
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        <div className="p-4">
          <span className="product-category-tag">{category}</span>
          <h3 className="product-title">{name}</h3>
          <p className="product-weight">{weight}</p>

          <div className="product-rating mb-2">
            {stars.map((filled, i) => (
              <span key={i} className="star">
                {filled ? "★" : "☆"}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="product-price">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="product-original-price">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              className="product-add-btn"
              aria-label="Add to cart"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Cart logic placeholder
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1V13M1 7H13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
