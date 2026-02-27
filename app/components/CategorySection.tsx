import Image from "next/image";

const categories = [
    { name: "Breakfast & Cereal", image: "/images/cat-breakfast.png" },
    { name: "Produce", image: "/images/cat-produce.png" },
    { name: "Dairy", image: "/images/cat-dairy.png" },
    { name: "Meat & Seafood", image: "/images/cat-meat.png" },
    { name: "Snacks & Lunch Ideas", image: "/images/cat-snacks.png" },
    { name: "Frozen Foods", image: "/images/cat-frozen.png" },
];

export default function CategorySection() {
    return (
        <section className="py-12">
            <h2 className="section-title text-center mb-10">Shop by category</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {categories.map((cat) => (
                    <div key={cat.name} className="category-item">
                        <div className="category-circle">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                width={90}
                                height={90}
                                className="object-cover rounded-full"
                            />
                        </div>
                        <span className="category-name">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
