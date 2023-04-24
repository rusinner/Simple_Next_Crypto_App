import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/Pagination";
export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  );
  const data = await response.json();
  return {
    props: {
      markets: data,
      totalCount: data.length,
    },
  };
};

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url("homeBgMobile.jpg");
  background-position: center;
  background-size: cover;
  padding: 4.4rem;
`;
const CoinsContainer = styled.div`
  width: 90vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Coins = styled.ul`
  list-style-type: none;
`;
const CoinItem = styled(Link)`
  width: 80vw;
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  border-bottom: 1px solid black;
  cursor: pointer;
  text-decoration: none;
  color: #e9fff7;
  @media (max-width: 768px) {
    gap: 0.5rem;
    font-size: 0.6rem;
  }
  &:hover {
    background-color: black;
  }
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const CoinText = styled.h3``;

const PaginationBox = styled(Pagination)`
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin-top: 2rem;
`;

const CoinList = ({ markets }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedMarkets = paginate(markets, currentPage, pageSize);

  return (
    <Container>
      <CoinsContainer>
        {paginatedMarkets.map((market, index) => (
          <Coins key={index}>
            <CoinItem href={`/coins/${market.id}`}>
              <Image src={market.image} />
              <CoinText>{`Market name : ${market.name}`}</CoinText>
              <CoinText>{` 24h high: ${market.high_24h}`}</CoinText>
              <CoinText>{` 24h low: ${market.low_24h}`}</CoinText>
              <CoinText>{` 24h change %: ${market.price_change_percentage_24h}`}</CoinText>
            </CoinItem>
          </Coins>
        ))}
      </CoinsContainer>

      <PaginationBox
        items={markets.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </Container>
  );
};

export default CoinList;
