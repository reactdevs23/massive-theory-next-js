import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { navItem: "HOME", to: "/", page: true },
    { navItem: "PLAYING NOW", to: "/#playingnow" },
    { navItem: "EPISODES", to: "/allepisodes", page: true },
    { navItem: "SUPPORT", to: "/#support" },
    { navItem: "CONTACT", to: "/#contact" },
  ];

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

  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const pathName = usePathname();
  const regex = /^\/$/;

  const handleNavigation = (path) => {
    setSidebar(false);
    router.push(path)?.then(() => {
      if (path.includes("#")) {
        const id = path.split("#")[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  };

  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          href="/"
          className={[classes.navItem, classes.logoContainer].join(" ")}
        >
          <img src="/images/logo.svg" alt="#" className={classes.logo} />
        </Link>
        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {navItems.map((el, i) => (
            <ScrollLink
              key={i}
              to={el.to.split("#")[1]}
              spy={true}
              smooth={true}
              duration={500}
              className={classes.navItem}
              onClick={() => {
                pathName !== regex.test("/") && handleNavigation(el.to);
              }}
            >
              {el.navItem}
            </ScrollLink>
          ))}
          <div
            className={clsx(
              classes.socialContainer,
              classes.socialContainerMobile
            )}
          >
            {socialLinks.map((social, i) => (
              <a href={social.link} target="_blank" rel="noreferrer" key={i}>
                <img src={social.logo} alt="#" className={classes.socialLogo} />
              </a>
            ))}
          </div>
          <IoMdClose
            className={clsx(classes.icon, classes.closeIcon)}
            onClick={() => setSidebar(false)}
          />
        </div>
        <div className={classes.socialContainer}>
          {socialLinks.map((social, i) => (
            <a href={social.link} target="_blank" rel="noreferrer" key={i}>
              <img src={social.logo} alt="#" className={classes.socialLogo} />
            </a>
          ))}
        </div>
        <div className={classes.buttonContainer}>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar(false)}
            />
          ) : (
            <AiOutlineAlignRight
              className={classes.icon}
              onClick={() => setSidebar(true)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
