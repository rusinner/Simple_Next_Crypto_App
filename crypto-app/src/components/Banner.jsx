import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 50vw;
  height: 60vh;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  color: #e9fff7;
  border-radius: 10px;
  @media (max-height: 380px) {
    gap: 7rem;
  }
  @media (max-width: 768px) {
    width: 90vw;
    height: 110vh;
    background: rgba(15, 91, 55, 0.3);
    backdrop-filter: blur(7px);
    margin-top: 2rem;
    gap: 0;
  }
  @media (min-height: 600px) {
    width: 80vw;
    height: 90vh;
  }
`;
const TextContainer = styled(motion.div)`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    gap: 0.8rem;
  }
  @media (max-width: 380px) {
  }
`;
const Title = styled.h1`
  font-size: 2.2rem;
  @media (max-width: 768px) {
  }
  @media (max-width: 380px) {
    font-size: 1.2rem;
  }
`;
const Paragraph = styled.p`
  font-size: 1.3rem;
`;
const Button = styled(Link)`
  width: 100%;
  height: auto;
  border: none;
  background-color: rgb(42, 151, 112);
  padding: 0.6rem;
  border-radius: 12px;
  color: #e9fff7;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  &:hover {
    background: #e9fff7;
    color: rgb(42, 151, 112);
  }
`;
const IconsContainer = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  @media (min-height: 600px) {
    width: 60%;
  }
  @media (max-width: 912px) {
    width: 70vw;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
  }
`;
const Image = styled.img`
  width: 12rem;
  height: 12rem;
  @media (max-width: 912px) {
    width: 6rem;
    height: 6rem;
  }
`;
const Banner = () => {
  return (
    <Container>
      <TextContainer
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Take your trading to the next level</Title>
        <Paragraph>
          CryptoWorld is your all in one platform for digital currency.
        </Paragraph>
        <Button href="/coinList">
          <Paragraph>Exlore Coins</Paragraph>
        </Button>
      </TextContainer>
      <IconsContainer
        initial={{ x: "-30%", scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/analysis.svg" />
        <Image src="/investor.svg" />
        <Image src="/search.svg" />
      </IconsContainer>
    </Container>
  );
};

export default Banner;
