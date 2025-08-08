import { Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Interview from "./pages/Interview"
import Feedback from "./pages/Feedback"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/interview" element={<Interview/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
   </Routes>
  )
}

export default App