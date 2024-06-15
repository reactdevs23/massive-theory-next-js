"use client";

import React, { useState } from "react";
import classes from "./SupportTheShow.module.css";
import { Heading, Text, Wrapper } from "@/components/common";
import clsx from "clsx";
import Input from "@/components/common/Input/Input";
const SupportTheShow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const helpsList = [
    "Creating New Content",
    "Illustration",
    "Animation",
    "Original Music and Licenses",
    "Website Security",
    "Exploring New Technology",
    "Making Us Platform Independent",
    "Covering Operational Expenses",
  ];
  return (
    <Wrapper className={classes.mainWrapper} id="support">
      <div className={classes.wrapper}>
        <div className={clsx("container", classes.container)}>
          <Heading xl5 highlight className={classes.heading}>
            Support the Show
          </Heading>
        </div>
      </div>{" "}
      <div className={clsx(classes.subscriberContainer, "container")}>
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
            Become a Subscriber
          </Heading>

          <Text base0 xl>
            To show your support for us as content creators and help spread our
            message, subscribing to our newsletter is the best action you can
            take right now.{" "}
          </Text>
          <Text base0 xl>
            By subscribing, you'll be helping us achieve our goal of becoming
            platform-independent, allowing us to stay connected as the digital
            landscape continues to evolve.
          </Text>
          <Text base0 xl>
            Rest assured that your information will never be shared with
            third-parties, so you'll only receive updates when a new episode
            drops. Join our audience today and be a part of our journey!
          </Text>
        </div>
        <form className={classes.subscribeForm} onSubmit={() => {}}>
          <Text highlight xl>
            Subscribe to Show Updates and New Release:
          </Text>
          <div className={classes.inputs}>
            <Input
              value={name}
              setValue={setName}
              type="text"
              placeholder="Name"
            />{" "}
            <Input
              value={email}
              setValue={setEmail}
              type="email"
              placeholder="Email"
            />
          </div>
          <button type="submit" className={classes.button}>
            Subscribe
          </button>
        </form>
      </div>{" "}
      <div className={clsx(classes.donationContainer, "container")}>
        <div className={classes.donationBox}>
          <Heading xl4 highlight className={classes.title}>
            Want to Make a Donation?
          </Heading>
          <img
            src=" /images/home/donation.png"
            alt="#"
            className={classes.img}
          />
        </div>
        <div className={classes.infoContainer}>
          <Heading xl4 highlight className={classes.title}>
            Your Support Helps With
          </Heading>

          <Text base0 xl>
            Making a donation is quick, secure, and effortless through either
            credit card or bank account. We appreciate your generous support.
          </Text>
          <Text base0 xl>
            Your generous support helps us to create more content, grow the
            show, and have more impact. Your donation will be used for:
          </Text>
          <ul className={classes.helpsLists}>
            {helpsList.map((list, i) => (
              <li className={classes.list} key={i}>
                <Text base0 xl>
                  {list}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SupportTheShow;
