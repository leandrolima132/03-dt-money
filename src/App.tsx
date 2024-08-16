import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { Transactions } from "./pages/Transactions"
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  )
}

export default App
