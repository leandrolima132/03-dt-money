import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default'
import { Transactions } from "./pages/Transactions"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions/>
    </ThemeProvider>
  )
}

export default App
