import React from "react";
import classes from "./LatestEpisodes.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import Link from "next/link";

const LatestEpisodes = () => {
  const episodes = [
    {
      img: "/images/episodes/episode1.png",
      info: "Gateway Experience – CIA’s Guide to Transcend Spacetime",
      to: "#",
      isLatest: true,
    },
    {
      img: "/images/episodes/episode2.png",
      info: "First Contact with Aliens – Dark Forest Theory & the Prime Directive",
      to: "#",
      isLatest: true,
    },
    {
      img: "/images/episodes/episode3.png",
      info: "Can We Create Conscious Artificial Intelligence?",
      to: "#",
      isLatest: true,
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
  const latestEpisodes = episodes.filter((episode) => episode.isLatest);

  return (
    <Wrapper className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <Heading xl5 highlight className={classes.heading}>
          Latest Episodes
        </Heading>

        <div className={classes.episodes}>
          {latestEpisodes.map((episode, i) => (
            <Link href={`/${i + 1}`} className={classes.episode} key={i}>
              <img src={episode.img} alt="#" className={classes.img} />
              <Text highlight xl textCenter className={classes.text}>
                {episode.info}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default LatestEpisodes;
