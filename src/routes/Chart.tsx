import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
time_close: string;
open: number;
high: number;
low: number;
close: number;
volume: number;
market_cap: number;
}

interface ChartProps {
    coinId:string;
    isDark:boolean;
}

function Chart({coinId,isDark}:ChartProps){
    const {isLoading,data} =useQuery<IHistorical[]>(["ohlcv",coinId],()=>fetchCoinHistory(coinId),{
       // refetchInterval:10000
    });
    return <div> {isLoading ? "Loading chart..." : (
    <ApexChart type= "line" 

    series={[
        {
            name:"Price",
            data:data?.map(price => price.close)as number[]

        },
    ]}
   
    options={{
        theme:{
            mode:isDark?"dark":"light",
        },
        chart:{
            height:300,
            width: 500,
            toolbar:{
                show:false,
            },
            background: "tranparent",
        },
        grid:{ show: false},
        stroke:{
            curve:"smooth",
            width: 3,

        },
        yaxis:{
            show:false,
        },
        xaxis:{
            axisBorder:{
                show:false,
            },
            axisTicks:{
                show:false,
            },
            labels:{
                show:false,
            },
            type:"datetime",
            categories: data?.map((price)=>price.time_close),
            
        },
        fill:{
            type:"gradient",
            gradient:{
                gradientToColors: ["#4cd137"],stops:[0,100]
            },
        },
            colors: ["#00a8ff"],
            tooltip: {
                y:{
                    //2 decimal place
                    formatter:(value) =>`$${value.toFixed(2)}`,
                },
            },
}}
    />
    )}
    </div>
        ;

}

export default Chart;