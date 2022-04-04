import { useState } from "react";
import styled from "styled-components";


interface CircleProps {
    bgColor:string;
    borderColor?:string;
}
interface ContainerProps {
    bgColor:string;
    borderColor:string;
}
const Container = styled.div<ContainerProps>`
width:200px;
height:200px;
background-color: ${(props)=>props.bgColor};
border-radius:50%;
border: 1px solid ${props => props.borderColor}
`;
function Circle({bgColor,borderColor }:CircleProps){
    const [counter,setCounter]=useState(1);
    return <Container bgColor ={bgColor} borderColor ={borderColor?? bgColor}/>
}

export default Circle;