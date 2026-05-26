import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "杨泽群 — 思考·构建·探索",
  description: "杨泽群的个人网站。一个AI思考者、写作者与商业探索者的数字空间。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased selection:bg-accent-blue/30">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
