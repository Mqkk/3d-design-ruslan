import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Form } from "@/components/Sections/Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "../styles/globals.scss";

const inter = Inter({
  display: "swap",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "3D Design",
  description: "The best design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <Header />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
