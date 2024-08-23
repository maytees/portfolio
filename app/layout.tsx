import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "400", "600", "700", "900", "800"],
});

export const metadata: Metadata = {
  title: "Maytham Ajam",
  description: "Portfolio webesite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>{children}</body>
    </html>
  );
}
