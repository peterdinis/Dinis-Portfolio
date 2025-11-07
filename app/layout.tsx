import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  variable: "--font-minecraft",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Dinis - Minecraft Portfolio",
  description: "A blocky portfolio built with Minecraft style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} font-minecraft`}
      >
        {children}
      </body>
    </html>
  );
}
