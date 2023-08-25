"use client";
import type { Metadata } from "next";
import { Inter, Lato, Nunito } from "next/font/google";
import Footer from "./components/Footer/app.footer";
import TopBar from "./components/TopBar/app.top-bar";
import "./globals.css";
import Script from "next/script";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Zeraverse App",
  description: "Zeraverse by create next app",
  icons: {
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${lato.variable} ${nunito.variable} ${inter.variable}`}
    >
      <body className="bg-body object-cover bg-cover">
        <div className="w-full ">{children}</div>
        {/* <Script src="../../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" /> */}
      </body>
    </html>
  );
}
