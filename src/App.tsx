import {useState} from 'react';
import Router from "./Router";
import {ReactQueryDevtools} from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { darkTheme,lightTheme } from './theme';
import GlobalStyle from "./global-style";

function App() {
  const [isDark,setIsDark] = useState(false);

  const toggleDark = () => setIsDark(current => !current);
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme:lightTheme}>
  
      <GlobalStyle />
      <Router isDark = {isDark} toggleDark ={toggleDark}/>
      <ReactQueryDevtools initialIsOpen ={true} />
      </ThemeProvider>
    </>
  );
}
export default App;
