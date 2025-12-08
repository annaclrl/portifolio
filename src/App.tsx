import { ThemeProvider } from "./context/ThemeContext";
import Portifolio from "./pages/Portifolio"
import './global.css'

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Portifolio />
    </ThemeProvider>
    </>
    
  )
}

export default App;
