import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import LatestEpisodes from "@/components/Home/LatestEpisodes/LatestEpisodes";
import PlayNow from "@/components/Home/PlayNow/PlayNow";
import SupportTheShow from "@/components/Home/SupportTheShow/SupportTheShow";

import React from "react";
import SingleEpisode from "./allepisodes/[single-episode]/page";

const Home = () => {
  return (
    <>
      {/* <SingleEpisode /> */}
      <HeroSection />
      <LatestEpisodes />
      <PlayNow />
      <SupportTheShow />
      <ContactUs />
    </>
  );
};

export default Home;
