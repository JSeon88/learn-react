import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet-async";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loading = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

type CoinType = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

function Coins() {
  const { isLoading, data } = useQuery<CoinType[]>("coins", fetchCoins);
  const setDarkModeAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkMode = () => {
    setDarkModeAtom((prev) => !prev);
  };
  return (
    <>
      <Container>
        <Helmet>
          <title>코인</title>
        </Helmet>
        <Header>
          <Title>코인</Title>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </Header>

        <CoinList>
          {isLoading ? (
            <Loading>Loading...</Loading>
          ) : (
            data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <Img
                    src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))
          )}
        </CoinList>
      </Container>
    </>
  );
}

export default Coins;
