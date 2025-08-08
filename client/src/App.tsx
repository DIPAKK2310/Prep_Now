import { Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Interview from "./pages/Interview"
import Feedback from "./pages/Feedback"
import Sign_In from "./pages/Sign_In"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/interview" element={<Interview/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    <Route path="/sign-in" element={<Sign_In/>}/>

   </Routes>
  )
}

export default App