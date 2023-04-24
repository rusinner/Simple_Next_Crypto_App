import React from "react";
import styled from "styled-components";

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}`
  );
  const data = await response.json();
  return {
    props: {
      market: {
        name: data.name,
        description: data.description.en,
        image: data.image.small,
        current_price: data.market_data.current_price.usd,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
        price_change_percentage_7d: data.market_data.price_change_percentage_7d,
        price_change_percentage_14d:
          data.market_data.price_change_percentage_14d,
        price_change_percentage_30d:
          data.market_data.price_change_percentage_30d,
        price_change_percentage_60d:
          data.market_data.price_change_percentage_60d,
        price_change_percentage_200d:
          data.market_data.price_change_percentage_200d,
        price_change_percentage_1y: data.market_data.price_change_percentage_1y,
        high_24h: data.market_data.high_24h.usd,
        low_24h: data.market_data.low_24h.usd,
      },
    },
  };
};
export const getStaticPaths = async () => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/`);
  const data = await response.json();

  return {
    paths: data.map((coin) => {
      return {
        params: {
          coinId: coin.id,
        },
      };
    }),
    fallback: false,
  };
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: rgb(24, 111, 80);
  background-image: url("/homeBgMobile.jpg");
  position: absolute;
  top: 0;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 912px) {
    align-items: center;
  }
`;
const TitleContainer = styled.div`
  width: 30vw;
  flex: 0.3;
  padding: 3rem;
  display: inline-flex;
  justify-content: space-between;
  background: rgba(15, 91, 55, 0.3);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  color: #e9fff7;
  margin-top: 5rem;
  margin-left: 3rem;
  @media (max-width: 912px) {
    width: 70vw;
    margin-left: 0;
    flex: 0.1;
    padding: 1rem;
  }
`;
const Content = styled.div`
  width: 90vw;
  flex: 0.6;
  background: rgba(15, 91, 55, 0.3);
  backdrop-filter: blur(7px);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  color: #e9fff7;
  margin-top: 2rem;
  margin-left: 3rem;

  @media (max-width: 912px) {
    width: 90vw;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 0;
    flex: 0.85;
    gap: 1rem;
  }
`;
const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;
const Name = styled.h2``;
const Description = styled.p``;
const DescContainer = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;
  white-space: wrap;
  word-break: break-all;
  @media (max-width: 912px) {
    width: 70vw;
  }
`;
const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 912px) {
    gap: 1rem;
  }
`;
const ListItem = styled.li``;

const Coin = ({ market }) => {
  return (
    <Container>
      <TitleContainer>
        <Name>{market.name}</Name>
        <Logo src={market.image} />
      </TitleContainer>
      <Content>
        <List>
          <ListItem>{`Current Price: ${market.current_price} $`}</ListItem>
          <ListItem>{`24h high: ${market.high_24h} $ `}</ListItem>
          <ListItem>{`24h low:  ${market.low_24h} $`}</ListItem>
          <ListItem>{` Price change 24h % : ${market.price_change_percentage_24h} %`}</ListItem>
          <ListItem>{` Price change 7d % : ${market.price_change_percentage_7d} %`}</ListItem>
        </List>
        <List>
          <ListItem>{` Price change 14d % : ${market.price_change_percentage_14d} %`}</ListItem>
          <ListItem>{` Price change 1m % : ${market.price_change_percentage_30d} %`}</ListItem>
          <ListItem>{` Price change 2m % : ${market.price_change_percentage_60d} %`}</ListItem>
          <ListItem>{` Price change 200d % : ${market.price_change_percentage_200d} %`}</ListItem>
          <ListItem>{` Price change 1y % : ${market.price_change_percentage_1y} %`}</ListItem>
        </List>
        <DescContainer>
          <Description>{market.description}</Description>
        </DescContainer>
      </Content>
    </Container>
  );
};

export default Coin;
