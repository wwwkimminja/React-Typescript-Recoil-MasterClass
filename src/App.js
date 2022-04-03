import styled,{keyframes} from "styled-components";

const Wapper= styled.div`
 display: flex;
 height:100vh;
 width:100vw;
 justify-content:center;
 align-items:center;

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

const Emoji = styled.div`
font-size: 36px;
`;
const Box = styled.div`
background-color: tomato;
height:200px;
width: 200px;
animation: ${rotationAnimation} 1s linear infinite;
display:flex;
justify-content:center;
align-items: center;
${Emoji}:hover {
  font-size:98px;
}
`;
function App() {
  return (
<Wapper>
  <Box>
    <Emoji >🤩</Emoji>
  </Box>
    <Emoji >👻</Emoji>
</Wapper>
  );
}

export default App;
