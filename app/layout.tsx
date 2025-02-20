import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Johannes Snildal",
  description: "Portfolio of Johannes Snildal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={`${GeistSans.className} antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}