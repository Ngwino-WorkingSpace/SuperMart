import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simba - Fresh Organic Groceries",
  description:
    "Shop fresh, organic fruits, vegetables, dairy, and more at Simba. Best deals on healthy food delivered to your door.",
};

import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
