import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";

const FooterBanner = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(15, 91, 55, 0.2);
  backdrop-filter: blur(7px);
  color: #e9fff7;
  @media (max-width: 768px) {
    width: 80vw;
    background: rgba(15, 91, 55, 0.3);
    border-radius: 10px;
    justify-content: center;
  }
`;
const InnerContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterLink = styled(Link)`
  display: inline-flex;
  gap: 0.3rem;
  text-decoration: none;
  color: #e9fff7;
  &:hover {
    text-decoration: underline;
  }
`;
const FooterLinkEx = styled.a`
  display: inline-flex;
  gap: 0.3rem;
  text-decoration: none;
  color: #e9fff7;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterBanner
      initial={{ y: "40%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <InnerContainer>
        <FooterLink href="/">
          <HomeRoundedIcon /> Home
        </FooterLink>
        <FooterLink href="/CoinList">
          <PaidRoundedIcon /> CoinList
        </FooterLink>
        <FooterLinkEx href="https://www.coingecko.com/" target="_blank">
          <ApiRoundedIcon /> CoinGecko
        </FooterLinkEx>
      </InnerContainer>
      <InnerContainer>
        <FooterLink href="#">
          <ContactPhoneRoundedIcon />
          Contact
        </FooterLink>
        <FooterLinkEx
          href="https://goo.gl/maps/QHBQK7uitfgiuJTx7"
          target="_blank"
        >
          <PersonSearchRoundedIcon />
          Find Us
        </FooterLinkEx>
        <FooterLinkEx
          href="https://en.wikipedia.org/wiki/Cryptocurrency"
          target="_blank"
        >
          <LocalLibraryRoundedIcon />
          Cryptocurrency
        </FooterLinkEx>
      </InnerContainer>
    </FooterBanner>
  );
};

export default Footer;
