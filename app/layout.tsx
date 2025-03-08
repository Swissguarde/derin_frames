import type { Metadata } from "next";
import { Jockey_One } from "next/font/google";
import "./globals.css";

const jockey_one = Jockey_One({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "FRAMES ANALYSIS",
  description: "Advanced structural analysis tool for frames analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jockey_one.className}>{children}</body>
    </html>
  );
}
