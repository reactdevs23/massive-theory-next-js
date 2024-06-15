import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

import Head from "next/head";
import { Metadata } from "next";

export const metadata = {
  title: "...",
  description: "...",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-lt-installed={true}>
      <Head />
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
