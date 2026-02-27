import ProductCard from "./ProductCard";

const dealProducts = [
    {
        name: "Awesome Steel Lamp",
        image: "/images/product-cucumber.png",
        weight: "500g",
        price: 18.33,
        originalPrice: 24.99,
        rating: 4,
        badge: "sale" as const,
        category: "Fruits & Vegetables",
    },
    {
        name: "Mediocre Linen Keyboard",
        image: "/images/product-beans.png",
        weight: "per Kg",
        price: 6.89,
        originalPrice: 9.99,
        rating: 3,
        badge: "sale" as const,
        category: "Organic & Snacks",
    },
    {
        name: "Fantastic Granite Car",
        image: "/images/product-peppers.png",
        weight: "2 lb",
        price: 98.28,
        rating: 5,
        category: "Fruits & Vegetables",
    },
    {
        name: "Synergistic Plastic Watch",
        image: "/images/product-lemons.png",
        weight: "3 units",
        price: 114.06,
        rating: 4,
        category: "Fruits & Vegetables",
    },
];

export default function DealOfMonth() {
    return (
        <section className="py-10">
            <div className="deal-section p-8 lg:p-12">
                <h2 className="section-title text-center mb-10">Deal Of The Month</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {dealProducts.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
