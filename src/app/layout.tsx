import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
