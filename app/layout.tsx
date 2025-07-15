import type { Metadata } from "next";
import { Bodoni_Moda, Hubot_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Terminal from "@/components/terminal";
import Footer from "@/components/footer";
import ChatBubble from "@/components/home/chat-bubble";
import { siteMetadata } from "@/config/siteConfig";
import { Analytics } from "@vercel/analytics/react";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hubotSans.variable} ${bodoni.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Terminal />
        <ChatBubble />
        <Analytics />
      </body>
    </html>
  );
}
