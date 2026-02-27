"use client";

import ProductCard from "./ProductCard";

interface Product {
    name: string;
    image: string;
    weight: string;
    price: number;
    originalPrice?: number;
    rating: number;
    badge?: "sale" | "new";
    category?: string;
}

interface ProductSectionProps {
    title: string;
    products: Product[];
    filters?: string[];
}

export default function ProductSection({ title, products, filters }: ProductSectionProps) {
    return (
        <section className="py-10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="section-title">{title}</h2>
                {filters && (
                    <div className="hidden md:flex items-center gap-6">
                        {filters.map((filter, i) => (
                            <button
                                key={filter}
                                className={`filter-tab ${i === 0 ? "active" : ""}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {products.map((product, idx) => (
                    <ProductCard key={idx} {...product} />
                ))}
            </div>
        </section>
    );
}
