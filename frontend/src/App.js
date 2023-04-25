// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DaftarMenu from "./components/DaftarMenu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DaftarMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
