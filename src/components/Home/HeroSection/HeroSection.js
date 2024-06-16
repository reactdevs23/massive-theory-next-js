import React from "react";
import classes from "./HeroSection.module.css";
import { Heading, Highlight, Text, VideoBg, Wrapper } from "../../common";
import clsx from "clsx";

const HeroSection = () => {
  const socialLinks = [
    {
      logo: "/images/youtube.png",
      link: "#",
    },
    {
      logo: "/images/rumble.png",
      link: "#",
    },
    {
      logo: "/images/odysee.png",
      link: "#",
    },
  ];

  return (
    <Wrapper className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <VideoBg url="/video/Canvas_Alien_Loop.mp4" />

        <div className={classes.infoContainer}>
          <Heading xl4 base0 className={classes.heading}>
            <Highlight> Animated stories</Highlight> about the past, present and
            future of <Highlight>humanity</Highlight>.
          </Heading>
          <Text xl2 light highlight>
            Watch the Series on
          </Text>
          <div className={classes.socialContainer}>
            {socialLinks.map((social, i) => (
              <a href={social.link} target="_blank" rel="noreferrer" key={i}>
                <img src={social.logo} alt="#" className={classes.logo} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
