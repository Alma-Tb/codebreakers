import React from "react";
import "../Styles/Choose.css";
import { Link } from "react-router-dom";

function LandingChoose() {
  return (
    <div className="Landingchoose">
      <div className="Leftcolumn">
        <div className="HistoryRec">
          <div className="HText">
            Uncover the intriguing stories of the classical ciphers that have
            challenged and captivated generations of codebreakers and codemakers,
            shaping the course of history.
          </div>
          <div className="HButton">
            <Link to="/History" className="LearnMoreLink">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="Rightcolumn">
        <div className="CryptotoolRec">
          <div className="CText">
          Explore our Crypto Tool to delve into the world of cryptography.
          Choose from various ciphers and unlock the secrets of encryption, 
          decryption and cryptanalysis for classical ciphers. 
          </div>
          <div className="CButton">
            <Link to="/CryptoTool" className="LearnMoreLink">
              Crypto Tool
            </Link>
          </div>
        </div>
      </div>

      <div className="TextColumn">
        <div className="TextBelow">
          <div className="Text">
            Delve deeper and meet the brilliant minds who cracked these codes,
            like the Bletchley Park codebreakers who played a pivotal role in
            shaping modern cryptography. Their groundbreaking work continues to
            influence how we protect our information today.
          </div>
        </div>

        <div className="TextBelow">
          <div className="Text">
            Have you ever dreamt of deciphering secret codes? Cryptography, the
            art of securing information, offers a thrilling adventure through
            history. Discover how for centuries, from the ingenious Spartans'
            scytale to the legendary Enigma machine, ciphers safeguarded sensitive
            messages.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingChoose;
