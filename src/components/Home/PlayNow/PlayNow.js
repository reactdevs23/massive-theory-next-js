import React from "react";
import classes from "./PlayNow.module.css";

import clsx from "clsx";
import { Heading, Wrapper } from "@/components/common";
import dynamic from "next/dynamic";

const ResponsivePlayer = dynamic(() => import("../../PlayVideo/PlayVideo"), {
  ssr: false,
});

const PlayNow = ({ url }) => {
  return (
    <Wrapper className={classes.wrapper} id="playingnow">
      <div className={clsx("container", classes.container)}>
        <Heading highlight xl5>
          Playing Now
        </Heading>
        <ResponsivePlayer url="https://www.youtube.com/watch?v=668nUCeBHyY" />
      </div>
    </Wrapper>
  );
};

export default PlayNow;
