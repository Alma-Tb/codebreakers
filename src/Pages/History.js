import React from "react";
import "../Components/Styles/History.css"; // Import your global styles here

function History() {
  return (
    <div className="HistoryPage">
      <div className="HistoryContent">
        <h1>History of Cryptography</h1>
        <p>
          Cryptography has a rich history dating back thousands of years,
          evolving alongside the need for secure communication and information
          protection. From ancient times to the modern era, cryptographic
          techniques have played a pivotal role in shaping military tactics,
          diplomatic relations, and technological advancements.
        </p>
        <p>
          Explore the milestones of cryptography, from the early substitution
          ciphers of Caesar and Vigenère to the revolutionary advances in
          symmetric and asymmetric encryption algorithms like AES and RSA. Each
          era brings new challenges and innovations, reflecting the ongoing
          battle between code makers and code breakers.
        </p>
      </div>

      <div className="HistorySections">
        <div className="HistorySection">
          <h2>Bletchley Park and the Enigma Machine</h2>
          <p>
            Discover the pivotal role Bletchley Park played during World War II
            in breaking the Enigma machine's codes, a turning point in the
            history of cryptography.
          </p>
          <a
            href="https://bletchleypark.org.uk/our-story/"
            target="_blank"
            rel="noopener noreferrer"
            className="LearnMoreButton"
          >
            Learn More
          </a>
        </div>
        <div className="HistorySection">
          <h2>Development of AES (Advanced Encryption Standard)</h2>
          <p>
            Learn about the development and adoption of AES, a symmetric
            encryption standard used worldwide for secure data transmission.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
            target="_blank"
            rel="noopener noreferrer"
            className="LearnMoreButton"
          >
            Learn More
          </a>
        </div>
        <div className="HistorySection">
          <h2>The Future of Cryptography</h2>
          <p>
            Explore the ongoing advancements in cryptography, including quantum
            computing challenges, post-quantum cryptography, and the future of
            secure communication.
          </p>
          <a
            href="https://www.genre.com/us/knowledge/publications/2023/september/the-future-of-cryptography-and-quantum-computing-en"
            target="_blank"
            rel="noopener noreferrer"
            className="LearnMoreButton"
          >
            Learn More
          </a>
          
        </div>
        
      </div>
      
      <br /> <br /><br />
    </div>
  );
}

export default History;
