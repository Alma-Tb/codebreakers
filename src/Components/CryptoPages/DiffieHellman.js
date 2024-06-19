import React, { useState } from "react";
import "./Cesar.css"; // Import the CSS file

function DiffieHellman() {
  const [data, setData] = useState(0);
  const [cipherText, setCipherText] = useState(0);
  const [key, setKey] = useState(0);
  const [ed, setExpo] = useState(0);
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/DiffieHellman", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
          cipherText,
          key,
          ed,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseData = await response.json();
      setResult(responseData.result);
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <div style={{ height: 700, backgroundColor: "#163823" }}>
        <div style={{ height: 100 }}>{/* Optional space for styling */}</div>
        <h1 className="header">DiffieHellman</h1>
        <div className="caesar-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="data">Prime modulus</label>
            <input
              type="number"
              id="data"
              value={data}
              onChange={(e) => setData(parseInt(e.target.value))}
            />
            <label htmlFor="cipherText">Generator</label>
            <input
              type="number"
              id="cipherText"
              value={cipherText}
              onChange={(e) => setCipherText(parseInt(e.target.value))}
            />
            <label htmlFor="key">Alice's private key</label>
            <input
              type="number"
              id="key"
              value={key}
              onChange={(e) => setKey(parseInt(e.target.value))}
            />
            <label htmlFor="key">Bob's private key</label>
            <input
              type="number"
              id="ed"
              value={ed}
              onChange={(e) => setExpo(parseInt(e.target.value))}
            />

            <button type="submit">Generate Shared Keys</button>
            {result && (
              <p style={{ fontFamily: "Ribeye", fontWeight: "bold" }}>
                Shared secret key computed by Alice:{result[0]}
                <br />
                Shared secret key computed by Bob: {result[0]}{" "}
              </p>
            )}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default DiffieHellman;
