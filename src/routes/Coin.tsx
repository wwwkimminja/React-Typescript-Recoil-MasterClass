import { useParams } from "react-router-dom";

interface RoutParams {
    coinId:string;
}

function Coin() {

    const {coinId} = useParams<RoutParams>();
  return <h1>Coin : {coinId} </h1>;
}
export default Coin;
