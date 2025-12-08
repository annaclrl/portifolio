import { ThemeProvider } from "./context/ThemeContext";
import Portifolio from "./pages/Portifolio"

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
