
import { useQuery } from "react-query";
import { fetchCoinTickers } from "./api";
import styled from "styled-components";

const PriceContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
 

`;
const Box = styled.div`
display: flex;
justify-content: space-between;
border-radius: 10px;
margin-top: 10px;
padding:10px 20px;
font-size: small;
background-color: ${(props) => props.theme.boxColor};
div:last-child{
  color:tomato;
    
}

`;

interface IPrice{
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD:{
        ath_date: string;
  ath_price :number;
  market_cap :number;
  market_cap_change_24h :number;
  percent_change_1h :number;
  percent_change_1y :number;
  percent_change_6h :number;
  percent_change_7d :number;
  percent_change_12h :number;
  percent_change_15m :number;
  percent_change_24h :number;
  percent_change_30d :number;
  percent_change_30m :number;
  percent_from_price_ath :number;
  price :number;
  volume_24h :number;
  volume_24h_change_24h :number;
      }
  
    }
}
interface PriceProps{
    coinId:string;
}
function Price({coinId}:PriceProps){
    const {isLoading,data}=useQuery<IPrice>(["price",coinId],()=>fetchCoinTickers(coinId),{
        //refetchInterval:10000
    });
   const price = data?.quotes.USD;
    return <div>{isLoading ? "Loading price...": (
        <PriceContainer>
          <Box>
          <div>Market Cap:</div>
          <div>${price?.market_cap}</div>
          </Box>
        
          <Box>
          <div>Percent Change 15m:</div>
          <div>{price?.percent_change_15m}%</div>
          </Box>
         
          <Box>
          <div>Percent Change 30m:</div>
          <div>{price?.percent_change_30m}%</div>
          </Box>
         
          <Box>
          <div>Percent Change 1h:</div>
          <div>{price?.percent_change_1h}%</div>
          </Box>
         
          <Box>
          <div>Percent Change 6h:</div>
          <div>{price?.percent_change_6h}%</div>
          </Box>
         
          <Box>
          <div>Percent Change 12h:</div>
          <div>{price?.percent_change_12h}%</div>
          </Box>
         
          <Box>
          <div>Percent Change 24h:</div>
          <div>{price?.percent_change_24h}%</div>
          </Box>
         
          </PriceContainer>
      
    )}</div>;

}

export default Price;