import React from "react";
import classes from "./LatestEpisodes.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";

const LatestEpisodes = () => {
  const episodes = [
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
    <Wrapper id="section1">
      <div className={clsx("container", classes.container)}>
        <Heading xl5 highlight>
          Latest Episodes
        </Heading>

        <div className={classes.episodes}>
          {episodes.map((episode, i) => (
            <div className={classes.episode} key={i}>
              <img src={episode.img} alt="#" className={classes.img} />
              <Text highlight xl textCenter className={classes.text}>
                {episode.info}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestEpisodes;
