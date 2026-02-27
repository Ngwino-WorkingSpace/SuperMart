import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecolive - Fresh Organic Groceries",
  description: "Shop fresh, organic fruits, vegetables, dairy, and more at Ecolive. Best deals on healthy food delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
