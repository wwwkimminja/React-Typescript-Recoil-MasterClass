import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";



const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToggleBtn = styled.div`
  width: 70px;
  height: 30px;
`
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: #2f3640;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 15px;
  a {
    display:flex;
    align-items:center;
    padding:20px;
    transition: color 0.2s ease-in;
  }
  &:hover{
    a{
      color:${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
text-align:center;
`;

const Img = styled.img`
width:25px;
height:25px;
margin-right:10px;
`;
interface ICoin {
  id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,

}

interface ICoinsProps {
 
}
function Coins(){
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = ()=> setDarkAtom(prev => !prev);
    const {isLoading,data} = useQuery<ICoin[]>("allCoins",fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      
      </Header>
      {isLoading ? <Loader>Loading...</Loader>:(

        <CoinList>
        {data?.slice(0,100).map((coin) => (
          <Coin key={coin.id}>
            <Link to={{
              pathname:`${coin.id}`,
              state:{name:coin.name},

            }}>
              <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="coin symbol"/> 
              {coin.name} &rarr;
            </Link>  
          </Coin>
        ))}
      </CoinList>
        )}
    </Container>
  );
}

export default Coins;