import React, { useState } from "react";
import "./Cesar.css"; // Import the CSS file

function RSA() {
  const [data, setData] = useState(0);
  const [cipherText, setCipherText] = useState(0);
  const [key, setKey] = useState(0);
  const [ed, setExpo] = useState(0);
  const [operation, setOperation] = useState("encrypt");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/rsa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
          cipherText,
          key,
          ed,
          operation,
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
        <div style={{ height: 40 }}>{/* Optional space for styling */}</div>
        <h1 className="header">RSA</h1>
        <p style={{ color: "#fff9eb", top: -10 }}>
          {" "}
          Plain Text (M) = C^d mod (p*q)
          <br />
          Cipher Text(c) = M^e mod (p*q)
        </p>
        <div className="caesar-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="data">Prime number I</label>
            <input
              type="number"
              id="data"
              value={data}
              onChange={(e) => setData(parseInt(e.target.value))}
            />
            <label htmlFor="cipherText">Prime number II</label>
            <input
              type="number"
              id="cipherText"
              value={cipherText}
              onChange={(e) => setCipherText(parseInt(e.target.value))}
            />
            <label htmlFor="key">Cipher Text / Plain Text</label>
            <input
              type="number"
              id="key"
              value={key}
              onChange={(e) => setKey(parseInt(e.target.value))}
            />
            <label htmlFor="key">Exponent </label>
            <input
              type="number"
              id="ed"
              value={ed}
              onChange={(e) => setExpo(parseInt(e.target.value))}
            />
            <label>Operation:</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="encrypt">Encrypt</option>
              <option value="decrypt">Decrypt</option>
            </select>
            <button type="submit">Process</button>
            {result && (
              <p style={{ fontFamily: "Ribeye", fontWeight: "bold" }}>
                Result: {result}
              </p>
            )}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default RSA;
