"use client";

import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Head from "next/head";

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
