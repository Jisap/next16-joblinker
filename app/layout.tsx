import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda, Unbounded } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./UI-Components/layoutWrapper";


const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap"
});
const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobLiker",
  description: "JobLiker Job Portal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${merienda.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
