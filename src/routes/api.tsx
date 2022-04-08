const BASE_URL =`https://api.coinpaprika.com/v1`;

export function fetchCoins(){
    return fetch(`${BASE_URL}/coins`)
    .then((response) => response.json());
} 

 export function fetchCoinInfo(coinId:string){

   return fetch(`${BASE_URL}/coins/${coinId}`).then(response => {
       if(!response.ok){
           throw new Error(`Http error!${response.status}`);

       }else{
           return response.json();
       }
   })

 }
export function fetchCoinTickers(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(response => response.json()); 
} 

export function fetchCoinHistory(coinId:string){
    const endDate = Math.floor(Date.now()/1000);
    //startDate is 2 weeks ago from endDate : endDate - 60sec*60min*24hour*7day*2weeks
    const startDate = endDate - 60*60*24*7*2;
    return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then(response => response.json());

}