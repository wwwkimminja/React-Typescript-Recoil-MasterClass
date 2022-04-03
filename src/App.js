import styled,{keyframes} from "styled-components";

const Wapper= styled.div`
 display: flex;
`;
const rotationAnimation = keyframes`
0%{
transform:rotate(0deg);
border-radius:0px:
}
50%{

border-radius:100px;
}
100%{
  transform:rotate(360deg);
border-radius:0px:
}
`;
const Box = styled.div`
background-color: tomato;
height:200px;
width: 200px;
animation: ${rotationAnimation} 1s linear infinite;
display:flex;
justify-content:center;
align-items: center;
span{
  font-size: 36px;
  &:hover{
    font-size: 50px;
  }
  &:active {
    opacity:0;
  }
}

`
function App() {
  return (
<Wapper>
  <Box>
    <span>🤩</span>
  </Box>
</Wapper>
  );
}

export default App;
