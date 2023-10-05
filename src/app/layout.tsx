"use client";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter, Lato, Nunito } from "next/font/google";
import { useEffect } from "react";
import { AuthContextProvider } from "./context/AuthProvider";
import { SocketContextProvider } from "./context/socket-context";
import "./globals.css";

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
        className="bg-body object-cover bg-cover body-scrollbar"
        suppressHydrationWarning={true}
      >
        <AuthContextProvider>
          <SocketContextProvider>
            <SessionProvider>
              <div className="w-full">{children}</div>
            </SessionProvider>
          </SocketContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
