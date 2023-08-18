import type { Metadata } from "next";
import { Inter, Lato, Nunito } from "next/font/google";
import Footer from "./components/Footer/app.footer";
import TopBar from "./components/TopBar/app.top-bar";
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
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${lato.variable} ${nunito.variable} ${inter.variable}`}
    >
      <body className="" suppressHydrationWarning={true}>
        <div>{children}</div>
      </body>
    </html>
  );
}
