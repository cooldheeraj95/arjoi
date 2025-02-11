import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import IconLink from "./Utilities/mini-comps/IconLink";

const Footer = () => {
  return (
    <footer className="txt-center">
      <hr />

      <div className="links-container grid-container">
        <div className="links grid-item">
          <Link to="/about">About</Link>
        </div>
        <div className="links grid-item">
          <Link to="/work">OUR WORK</Link>
        </div>
        <div className="links grid-item">
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>

      <div className="icons-container social-icons-container">
        <IconLink
          data={{
            icon: "/assets/social-icon-facebook.png",
            title: "Facebook",
            url: "https://www.fb.com",
          }}
        />

        <IconLink
          data={{
            icon: "/assets/social-icon-insta.png",
            title: "Instagram",
            url: "https://www.instagram.com",
          }}
        />

        <IconLink
          data={{
            icon: "/assets/social-icon-twitter.png",
            title: "Twitter",
            url: "https://www.twitter.com",
          }}
        />

        <IconLink
          data={{
            icon: "/assets/social-icon-youtube.png",
            title: "Youtube",
            url: "https://www.youtube.com/",
          }}
        />
      </div>

      <address>863 LG-1 Shalimar garden near gurdwara sahib, Uttar Pradesh 201005</address>

      <div className="mail-container">
        <a href="mailto:hello@Arjoi.in">hello@arjoigroup.in</a>
      </div>

      <hr />
      <p className="rte txt-center">© Copyright Arjoi Group 2020</p>
    </footer>
  );
};

export default Footer;
