import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import About from "./Pages/About"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage  />}></Route>
      <Route path="about-us" element={<About  />}></Route>
    </Routes>
  </BrowserRouter>
}

export default App
