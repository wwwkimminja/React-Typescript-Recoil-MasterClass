import Router from "./Router";
import {ReactQueryDevtools} from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { darkTheme,lightTheme } from './theme';
import GlobalStyle from "./global-style";
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

function App() {
 const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme:lightTheme}>
  
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen ={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
