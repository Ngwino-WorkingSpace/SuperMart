import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simba - Fresh Organic Groceries",
  description:
    "Shop fresh, organic fruits, vegetables, dairy, and more at Simba. Best deals on healthy food delivered to your door.",
};

import { Jost } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSideBar";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <body className={jost.className}>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
