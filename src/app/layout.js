import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

import Head from "next/head";

export const metadata = {
  title: "Massive Theory",
  description: "...",
};
export default function RootLayout({ children }) {
  const episodes = [
    {
      img: "/images/episodes/episode1.png",
      info: "Gateway Experience – CIA’s Guide to Transcend Spacetime",
      to: "#",
      latest: true,
    },
    {
      img: "/images/episodes/episode2.png",
      info: "First Contact with Aliens – Dark Forest Theory & the Prime Directive",
      to: "#",
      latest: true,
    },
    {
      img: "/images/episodes/episode3.png",
      info: "Can We Create Conscious Artificial Intelligence?",
      to: "#",
      latest: true,
    },
    {
      img: "/images/episodes/episode1.png",
      info: "Gateway Experience – CIA’s Guide to Transcend Spacetime",
      to: "#",
    },
    {
      img: "/images/episodes/episode2.png",
      info: "First Contact with Aliens – Dark Forest Theory & the Prime Directive",
      to: "#",
    },
    {
      img: "/images/episodes/episode3.png",
      info: "Can We Create Conscious Artificial Intelligence?",
      to: "#",
    },
    {
      img: "/images/episodes/episode1.png",
      info: "Gateway Experience – CIA’s Guide to Transcend Spacetime",
      to: "#",
    },
    {
      img: "/images/episodes/episode2.png",
      info: "First Contact with Aliens – Dark Forest Theory & the Prime Directive",
      to: "#",
    },
    {
      img: "/images/episodes/episode3.png",
      info: "Can We Create Conscious Artificial Intelligence?",
      to: "#",
    },
  ];
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
