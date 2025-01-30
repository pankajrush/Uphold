import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import TwoStep from "./components/twostepverify/TwoStep"
import Important from "./components/important/Important"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/twostepverify" element={<TwoStep/>}/>
        <Route path="/important" element={<Important/>}/>
      </Routes>
    </Router>
  )
}

export default App
