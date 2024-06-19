import React from "react";
import "../Components/Styles/About.css";

function About() {
  return (
    <div className="about-container">
      <section className="section">
        <h2>About theCODEBREAKERS</h2>
        <p>
          This web application was developed as a capstone project for the
          Number Theory and Cryptography course CN6136 / SEC407. Its goal is to
          provide users with an interactive platform to learn about historical
          ciphers, modern cryptography techniques, and tools for encrypting and
          decrypting messages.
        </p>
      </section>

      <section className="section">
        <h2>Development Details</h2>
        <p>
          The ciphers were originally written in C# and later converted to
          JavaScript using AI tools. This conversion was necessary to facilitate
          communication with the server, as integrating the C# code directly
          with the backend proved to be very complex and time-consuming. The
          project wouldn't have been completed by the submission deadline
          without this conversion.
        </p>
        <p>
          I used React.js for the frontend development and JavaScript and
          Node.js for the backend.
        </p>
      </section>

      <section className="section">
        <h2>Behind the Scenes</h2>
        <p>
          As the team lead of the crypto department at "Suppoяt ASU," I created
          a GitHub repo called "The Crypto Queen" aimed at helping my students
          and beginners navigate the complex world of cryptography. It acts as a
          curated reference for valuable online resources, addressing the
          challenge of finding reliable information on daunting yet fascinating
          crypto concepts. daunting yet facsinating crypto concepts.
        </p>
        <p>
          The repo's name, "The Crypto Queen," originated from an evening
          conversation at Suppoяt ASU, where my fascination with cryptography
          earned me the title after the past team lead, "Crypto Queen Kawthar."
        </p>
        <p>
          Inspired by this, I developed theCODEBREAKERS, a web app that
          integrates the resources and the code I develop. It's designed to
          explore historical ciphers, modern cryptography, and the history,
          offering a cohesive learning experience for enthusiasts and learners
          alike.
        </p>
      </section>

      <section className="section">
        <h2>Future Plans</h2>
        <p>
          Future updates will introduce additional ciphers like Affine, AES, and
          DES. I'll also integrate more resources to enhance learning and
          exploration of cryptography.
        </p>
      </section>

      <section className="section">
        <h2>Contact Me</h2>
        <p>
          If you have any questions, suggestions, or feedback regarding my
          project, please feel free to contact me at 20201701813@cis.asu.edu.eg.
        </p>
      </section>
    </div>
  );
}

export default About;
