import React from "react";
import "../../App.css"; // Assuming your global styles are imported here

function AboutPanel() {
  return (
    <div className="DiscoverTheHistoryPanel">
      <div className="about-content">
        <br /> <br />
        <br />
        <h2>About Us</h2>
        <br /> <br />
        <br />
        <p>
          The Codebreakers is a comprehensive web application developed as a
          capstone project for the CN6136 / SEC407 Number Theory and
          Cryptography course. Our mission is to explore the fascinating world
          of cryptography, providing tools, resources, and educational content
          on various cryptographic algorithms and their historical significance.
          <br /> <br />
          <br />
          Whether you're a student of history, a cryptography enthusiast, or
          simply curious about how codes and ciphers have shaped our world, we
          invite you to delve into our tools like AES, RSA, and Vigenère cipher,
          explore the history from Bletchley Park to Enigma, and discover the
          secrets of secure communication through the ages.
          <br /> <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default AboutPanel;
