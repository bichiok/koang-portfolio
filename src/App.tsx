import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/home.tsx'
import Projects from './components/projects.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
