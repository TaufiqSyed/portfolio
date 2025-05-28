import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const courier_prime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier-prime",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Taufiq Syed | Portfolio",
  description: "Taufiq Syed. Showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${courier_prime.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
