import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter, Space_Grotesk } from "next/font/google";

import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS

export const metadata: Metadata = {
  title: "Teemu Aitomeri - Full Stack Developer",
  description: "The best portfolio in the hood.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={styles.layout}>
        <Navbar />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
