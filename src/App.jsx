//Hooks
import { BrowserRouter as Router } from "react-router-dom"
import AppContent from "./routes/AppRoutes"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App


/* 
  1 = Validar se tem users logado para carrear pages;
  2 = redirencionar para o login caso não esteja logado;


*/