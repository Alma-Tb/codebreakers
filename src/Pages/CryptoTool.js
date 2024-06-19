import React from "react";
import { Link } from "react-router-dom";
import "../Components/Styles/CryptoTool.css";

function CryptoTool() {
  return (
    <div className="crypto-tool-container">

      <div className="header-block">
        
        <div className="header">Choose a cipher</div>
      </div>

      <div className="cipher-buttons">
        <Link to="/Cesar" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">Caesar</div>
          </div>
        </Link>

        <Link to="/RSA" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">RSA</div>
          </div>
        </Link>

        <Link to="/Columnar" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">Columnar</div>
          </div>
        </Link>

        <Link to="/VigenereAuto" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">Vigenere AutoKey</div>
          </div>
        </Link>

        <Link to="/VigenereRepeat" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">Vigenere Repeating</div>
          </div>
        </Link>

        <Link to="/Affine" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">Affine</div>
          </div>
        </Link>

        <Link to="/AES" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">AES</div>
          </div>
        </Link>

        <Link to="/DiffieHellman" className="cipher-button">
          <div className="button-content">
            <div className="ellipse"></div>
            <div className="circle"></div>
            <div className="text">Diffie Hellman</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CryptoTool;
