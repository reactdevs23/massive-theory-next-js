"use client";

import React, { useState } from "react";
import classes from "./ContactUs.module.css";
import { Heading, Text, VideoBg, Wrapper } from "@/components/common";
import clsx from "clsx";
import Input from "@/components/common/Input/Input";
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompnay] = useState("");
  const [message, setMessage] = useState("");
  const socialLiks = [
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
    <Wrapper className={classes.mainWrapper} id="contact">
      <div className={clsx("container", classes.container)}>
        <VideoBg url="/video/UFO_BG.mp4" />
        <Heading xl5 highlight className={classes.heading}>
          Contact
        </Heading>
      </div>

      <div className={clsx(classes.header, "container")}>
        <Text xl highlight>
          If you have an idea for the show, a business inquiry, or want to
          collaborate on a project, feel free to drop us a message!
        </Text>{" "}
        <div className={classes.socialContainer}>
          {socialLiks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="#" className={classes.logo} />
            </a>
          ))}
        </div>
      </div>
      <div className={clsx("container", classes.contactWrapper)}>
        <div className={classes.inputWrapper}>
          <Input
            type="text"
            value={firstName}
            setValue={setFirstName}
            placeholder="First Name"
          />
          <Input
            type="text"
            value={lastName}
            setValue={setLastName}
            placeholder="Last Name"
          />
          <Input
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="Email"
          />{" "}
          <Input
            type="text"
            value={company}
            setValue={setCompnay}
            placeholder="Last Name"
          />
          <textarea
            className={classes.message}
            name="message"
            id="message"
            rows="7"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>{" "}
        </div>
        <button type="submit" className={classes.button}>
          Submit
        </button>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
