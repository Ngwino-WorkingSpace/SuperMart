import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";
import PromoBanners from "./components/PromoBanners";
import DealOfMonth from "./components/DealOfMonth";
import Footer from "./components/Footer";

const featuredProducts = [
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
    category: "Fruits & Vegetables",
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
  {
    name: "Mediocre Paper Hat",
    image: "/images/product-grapes.png",
    weight: "1 Kg",
    price: 12.01,
    rating: 3,
    category: "Fruits & Vegetables",
  },
];

const bestSellerProducts = [
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
    category: "Fruits & Vegetables",
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
  {
    name: "Mediocre Paper Hat",
    image: "/images/product-grapes.png",
    weight: "1 Kg",
    price: 12.01,
    rating: 3,
    category: "Fruits & Vegetables",
  },
];

const filters = ["All product", "Organic Produce", "Fresh Vegetables", "Fresh Fruit"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Global content container with large side padding */}
      <div className="max-w-[1440px] mx-auto px-24">
        <HeroSection />
        <CategorySection />

        {/* Light gray background for featured section */}
        <div className="bg-[#f8f8f8] -mx-24 px-24">
          <ProductSection
            title="Featured Produce"
            products={featuredProducts}
            filters={filters}
          />
        </div>

        <PromoBanners />

        <ProductSection
          title="Best Seller"
          products={bestSellerProducts}
          filters={filters}
        />

        <DealOfMonth />
      </div>

      <Footer />
    </div>
  );
}
