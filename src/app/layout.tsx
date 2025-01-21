import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NYC Subway Quiz",
  description: "Test your knowledge of the NYC subway system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable}`}>
      <body className={"font-[family-name:var(--font-inter-tight)] antialiased"}>{children}</body>
    </html>
  );
}
