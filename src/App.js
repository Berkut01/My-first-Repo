import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import DetailProduct from "./pages/DetailProduct";
import DetailMinuman from "./pages/DetailMinuman";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/home.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detail" element={<DetailProduct/>} />
        <Route path="/detaile" element={<DetailMinuman/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
