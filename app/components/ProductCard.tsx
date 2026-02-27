import Image from "next/image";

interface ProductCardProps {
    name: string;
    image: string;
    weight: string;
    price: number;
    originalPrice?: number;
    rating: number;
    badge?: "sale" | "new";
    category?: string;
}

export default function ProductCard({
    name,
    image,
    weight,
    price,
    originalPrice,
    rating,
    badge,
    category = "Fruits & Vegetables",
}: ProductCardProps) {
    const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

    return (
        <div className="product-card">
            {badge && (
                <span className={`product-badge ${badge === "sale" ? "badge-sale" : "badge-new"}`}>
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
                            <span className="product-original-price">${originalPrice.toFixed(2)}</span>
                        )}
                    </div>
                    <button className="product-add-btn" aria-label="Add to cart">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
