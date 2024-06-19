import React, { useState } from "react";
import "./Cesar.css"; // Import the CSS file

function Caesar() {
  const [data, setData] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [key, setKey] = useState(0);
  const [operation, setOperation] = useState("encrypt");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/cesar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: operation === "encrypt" || "analyse" ? data : "", // Send data only for encrypt
          cipherText: operation !== "encrypt" ? cipherText : "", // Send cipherText for others
          key,
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
      <div style={{ height: 690, backgroundColor: "#163823" }}>
        <div style={{ height: 50 }}>{/* Optional space for styling */}</div>
        <h1 className="header">Cesar Cipher</h1>
        <div className="caesar-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="data">Plain Text:</label>
            <textarea
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              disabled={operation === "decrypt"} // Disable for decrypt
            />
            <label htmlFor="cipherText">Cipher Text:</label>
            <textarea
              id="cipherText"
              value={cipherText}
              onChange={(e) => setCipherText(e.target.value)}
              disabled={operation === "encrypt"} // Disable for encrypt only
            />
            <label htmlFor="key">Key:</label>
            <input
              type="number"
              id="key"
              value={key}
              onChange={(e) => setKey(parseInt(e.target.value))}
              disabled={operation === "analyse"} // Disable for analyse
            />
            <label>Operation:</label>
            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="encrypt">Encrypt</option>
              <option value="decrypt">Decrypt</option>
              <option value="analyse">Analyse</option>
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

export default Caesar;
