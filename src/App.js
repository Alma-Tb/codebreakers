import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/NavBar/Navbar";
import About from "./Pages/About";

import Landing from "./Pages/Landing";
import History from "./Pages/History";
import CryptoTool from "./Pages/CryptoTool";
import RSA from "./Components/CryptoPages/RSA";
import Cesar from "./Components/CryptoPages/Cesar";
import Columnar from "./Components/CryptoPages/Columnar";
import VigenereAuto from "./Components/CryptoPages/VigenereAuto";
import VigenereRepeat from "./Components/CryptoPages/VigenereRepeat";
import DiffieHellman from "./Components/CryptoPages/DiffieHellman";
import AES from "./Components/CryptoPages/AES";
import Affine from "./Components/CryptoPages/Affine";
import Documentation from "./Pages/Documentation";
import Resouces from "./Pages/Resources";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} /> {/* Home page */}
            <Route path="/about" element={<About />} /> 
            <Route path="/History" element={<History />} />
            <Route path="/CryptoTool" element={<CryptoTool />} />
            <Route path="/RSA" element={<RSA />} />
            <Route path="/Cesar" element={<Cesar />} />
            <Route path="/VigenereAuto" element={<VigenereAuto />} />
            <Route path="/VigenereRepeat" element={<VigenereRepeat />} />
            <Route path="/columnar" element={<Columnar />} />
            <Route path="/DiffieHellman" element={<DiffieHellman />} />
            <Route path="/Documentation" element={<Documentation />} />
            <Route path="/AES" element={<AES />} />
            <Route path="/Affine" element={<Affine />} />
            <Route path="/resources" element={<Resouces />} />
          </Routes>
        </BrowserRouter>

        <footer className="App-footer">
          <p style={{ color: "white" }}>&copy; The Codebreakers 2024</p>
        </footer>
      </div>
    </>
  );
}

export default App;
