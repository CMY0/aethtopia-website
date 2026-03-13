import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Aethtopia · 创造有灵魂的 AI 生命",
  description: "Aethtopia 是数字生命宇宙平台，提供 Proto（拓拓）、Vowen（窝窝）、Topia（泡泡）、Lapal（伴伴）四大平台，创造、陪伴、连接 AI 生命体。",
  keywords: ["AI生命", "数字生命", "AI Being", "Aethtopia", "拓拓", "伴伴", "窝窝", "泡泡"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
