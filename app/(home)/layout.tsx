import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Roboto({
  weight: ["400", "500"],
  preload: false,
});

export const metadata: Metadata = {
  title: "ZheQi-Blog",
  description: "A blog about web development and programming.",
};

const Header = dynamic(() => import("@/components/The/header"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
