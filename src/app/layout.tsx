"use client";
import type { Metadata } from "next";
import { Inter, Lato, Nunito } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthContextProvider } from "./context/AuthProvider";

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
      <body
        className="bg-body object-cover bg-cover"
        suppressHydrationWarning={true}
      >
        <AuthContextProvider>
          <SessionProvider>
            <div className="w-full ">{children}</div>
          </SessionProvider>
        </AuthContextProvider>
        {/* <Script src="../../node_modules/tw-elements/dist/js/tw-elements.umd.min.js" /> */}
      </body>
    </html>
  );
}
