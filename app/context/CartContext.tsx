"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string; // Updated to string since product ids can be strings
  name: string;
  category?: string; // e.g. "Fruits & Vegetables"
  color?: string; // For checkout page compatibility
  size?: string; // e.g. weight like "1kg" or size like "S"
  price: number;
  quantity: number;
  image: string;
  type?: "Delivery" | "Dine In" | "Takeaway";
}

interface CartContextType {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  cartSubtotal: number;
  activeTab: "Delivery" | "Dine In" | "Takeaway";
  isLoaded: boolean;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setActiveTab: (tab: "Delivery" | "Dine In" | "Takeaway") => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeTab, setActiveTab] = useState<"Delivery" | "Dine In" | "Takeaway">("Delivery");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("simba_cart");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (e) {
          console.error("Failed to parse cart from local storage", e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem("simba_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Compute stats based on activeTab
  const activeCartItems = cartItems.filter(item => (item.type || "Delivery") === activeTab);
  const cartCount = activeCartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = activeCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const addToCart = (newItem: CartItem) => {
    // If no type is provided, default to Delivery
    const itemType = newItem.type || "Delivery";

    setCartItems((prevItems) => {
      // Items are unique not just by ID but also by order type
      const existingItem = prevItems.find((item) => item.id === newItem.id && (item.type || "Delivery") === itemType);
      if (existingItem) {
        // Increment quantity if it already exists
        return prevItems.map((item) =>
          item.id === newItem.id && (item.type || "Delivery") === itemType
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add new item
      return [...prevItems, { ...newItem, quantity: 1, type: itemType }];
    });

    // Switch to the appropriate tab so the user sees what they just added
    setActiveTab(itemType);
    openCart(); // Automatically open cart when adding
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        cartItems,
        cartCount,
        cartSubtotal,
        activeTab,
        isLoaded,
        toggleCart,
        openCart,
        closeCart,
        setActiveTab,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
