import { Heading, Text, Wrapper } from "@/components/common";

import clsx from "clsx";
import dynamic from "next/dynamic";
import classes from "./SingleEpisode.module.css";

const ResponsivePlayer = dynamic(
  () => import("../../../components/PlayVideo/PlayVideo"),
  {
    ssr: false,
  }
);

const SingleEpisodes = () => {
  return (
    <Wrapper className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <Heading xl2 highlight textCenter className={classes.heading}>
          Gateway Experience - CIA’s Guide to Transcend Spacetime
        </Heading>
        <ResponsivePlayer url="https://www.youtube.com/watch?v=668nUCeBHyY" />
        <button className={clsx(classes.button, classes.transcript)}>
          TRANSCRIPT
        </button>
        <Text xl2 base0>
          Imagine someone sitting quietly in a dark room. He closes his eyes,
          and with the power of his mind alone, he can visualize the exact
          location of a nuclear sub hidden in the ocean thousands of miles away.
          Can a human being possess such ability?
        </Text>{" "}
        <Text xl2 base0>
          During the Cold War, the US government received a classified report
          saying that the KGB and the Soviet military had been pouring money
          into parapsychological research, such as ESP, remote viewing, and
          psychokinesis. Such programs started as far back as the 1920s, and
          Soviet scientists had already perfected their application for
          espionage purposes.
        </Text>{" "}
        <Text xl2 base0>
          Fear of missing out prompted the U.S. Army and the CIA to set up their
          own psychic research programs immediately. The American public was
          left in the dark until the CIA declassified this information decades
          later.One of these reports is called the Gateway Process—a training
          system designed to help you transcend the limit of spacetime by using
          … wait for it … meditation. Superpowers! How?
        </Text>{" "}
        <Text xl2 base0>
          The basis of “Gateway Experience” comes from research conducted by
          Robert Monroe, a radio broadcasting executive whose book popularized
          the term “out-of-body experience.” To understand Monroe’s technique,
          we first need to understand brainwaves. The brain is an
          electrochemical organ. Brainwaves are oscillating electrical voltages
          in the brain, measuring just a few millionths of a volt. These
          oscillations are the product of billions of neurons communicating with
          each other through electrical currents. When humans are wide awake,
          the brain functions at a beta frequency, and when they are asleep, the
          brain functions at the theta frequency.
        </Text>{" "}
        <button className={clsx(classes.button, classes.citations)}>
          CITATIONS
        </button>
        <div className={classes.linkContainer}>
          <a
            className={classes.link}
            href="https://www.frontiersin.org/articles/10.3389/fnhum.2018.00315/full"
            target="_blank"
            rel="noreferrer"
          >
            https://www.frontiersin.org/articles/10.3389/fnhum.2018.00315/full
          </a>
          <a
            className={classes.link}
            href="https://hbr.org/2015/01/mindfulness-can-literally-change-your-brain"
            target="_blank"
            rel="noreferrer"
          >
            https://hbr.org/2015/01/mindfulness-can-literally-change-your-brain
          </a>
          <a
            className={classes.link}
            href="https://news.harvard.edu/gazette/story/2018/04/harvard-researchers-study-how-mindfulness-may-change-the-brain-in-depressed-patients"
            target="_blank"
            rel="noreferrer"
          >
            https://news.harvard.edu/gazette/story/2018/04/harvard-researchers-study-how-mindfulness-may-change-the-brain-in-depressed-patients
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleEpisodes;
