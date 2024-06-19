import React from "react";

function HistoryPanel() {
  return (
    <>
      <div
       
        style={{
          width: 1250,
          height: 265,
          position: "relative",
          background: "#FFB91C",
        }}
      >
        <div
          className="Header"
          style={{
            left: 300,
            top: 50,
            position: "absolute",
            color: "black",
            fontSize: 64,
            fontFamily: "Ribeye",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Explore the History
        </div>
        <div
          className="Text"
          style={{
            left: 230,
            top: 160,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "Space Grotesk",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Discover the Secrets of Classical Ciphers: From the Scytale to the
          Enigma Machine
        </div>
      </div>
    </>
  );
}
export default HistoryPanel;
