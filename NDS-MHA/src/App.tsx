import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./style/theme/defaultTheme";

export function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}


