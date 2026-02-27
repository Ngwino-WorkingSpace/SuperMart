import React from "react";
import ProductDetailsView from "../../components/ProductDetailsView";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Product {
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

// Mock data fetcher
const fetchProduct = (id: string): Product => {
  const products: Record<string, Product> = {
    "1": {
      id: "1",
      name: "Fresh Cucumber",
      category: "Fruits & Vegetables",
      price: 18.33,
      originalPrice: 24.99,
      description:
        "Organic cucumbers grown with care. Crisp, refreshing, and perfect for salads or snacks. Our cucumbers are harvested daily to ensure maximum freshness for our customers.",
      images: [
        "/images/product-cucumber.png",
        "/images/product-cucumber.png",
        "/images/product-cucumber.png",
      ],
      sizes: ["500g", "1kg", "2kg"],
      colors: ["#22c55e", "#15803d"],
    },
    "2": {
      id: "2",
      name: "Organic Beans",
      category: "Fruits & Vegetables",
      price: 6.89,
      originalPrice: 9.99,
      description:
        "Nutrient-rich organic green beans. Packed with fiber and vitamins, these beans are a versatile addition to any healthy meal.",
      images: ["/images/product-beans.png", "/images/product-beans.png"],
      sizes: ["per Kg", "2 Kg"],
      colors: ["#16a34a"],
    },
    "3": {
      id: "3",
      name: "Bell Peppers",
      category: "Fruits & Vegetables",
      price: 98.28,
      description:
        "Colorful and sweet bell peppers. Great for roasting, stuffing, or eating raw for a crunchy snack.",
      images: ["/images/product-peppers.png"],
      sizes: ["2 lb", "5 lb"],
      colors: ["#ef4444", "#fbbf24", "#22c55e"],
    },
  };

  return products[id] || products["1"];
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = fetchProduct(params.id);

  return (
    <>
      <TopBar />
      <Navbar />
      <ProductDetailsView product={product} />
      <Footer />
    </>
  );
}
