import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import StaticSecondRow from "./StaticSecondRow";

function AnimatedRow({ rowId, text }) {
  const [chars, setChars] = useState(text.split("").map(() => false)); 
  const [isDelayOver, setIsDelayOver] = useState(false); // Flag for delay completion

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelayOver(true); 
    }, 10); 

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isDelayOver) {
      const intervalId = setInterval(() => {
        setChars((prevChars) =>
          prevChars.map((isVisible, index) =>
            isVisible ? !isVisible : Math.random() > 0.5
          )
        );
      }, 550); // Adjust animation speed as needed

      return () => clearInterval(intervalId);
    }
  }, [isDelayOver]);

  const [isVisible, setIsVisible] = useState(true); // Initially visible

  useEffect(() => {
    if (rowId !== "home-animation-1-row-2") {
      // Hide rows 1 and 3 after delay
      setTimeout(() => setIsVisible(false), 10000); // Adjust delay
    }
  }, [rowId]);

  return (
    <div id={rowId} className="home-animation-1-row">
      {chars.map((isVisible, index) => (
        <span
          key={index}
          className="animated-char"
          data-target-char={isVisible ? "true" : "false"}
          style={{
            display:
              isDelayOver && index !== 0 && index !== text.length - 1
                ? "block"
                : "none",
          }}
        >
          {isVisible ? text[index] : " "} {/* Display letter or space */}
          <span className="animated-char-circle"></span>{" "}
          {/* Add circle behind letter */}
        </span>
      ))}
    </div>
  );
}
function Hero() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false); // State to control second text visibility

  const runAnimation = () => {
   
    setTimeout(() => {
     
      const allRows = document.querySelectorAll(".home-animation-1-row");
      allRows[0].style.display = "none";
      //allRows[1].style.display = 'none';
      allRows[2].style.display = "none";
      setIsAnimationDone(true);
    }, 10000);
  };

  useEffect(() => {
    runAnimation(); // Call runAnimation on component mount
  }, []);

  useEffect(() => {
    if (isAnimationDone) {
      
      setTimeout(() => {
        setShowSecondText(true);
        document.getElementById("home-animation-1-text-1").style.display =
          "none";
      }, 5000);
    }
  }, [isAnimationDone]);

  return (
    <div
      className="home-section-full-size align-items-start home-secion-dark"
      id="home-start"
    >
      <div className="container">
        <div className="row justify-content-center align-items-top">
          <div className="col-12 text-center">
            <div id="home-animation-1">
              {/* Row 1 (14 letters) */}
              <AnimatedRow
                rowId="home-animation-1-row-1"
                text="2 ? B 1 I G H S 6 I # H X A K 9 I O F !"
              />

              <div style={{ height: 10 }}></div>
              {/* Row 2 (THE CODE BREAKERS) */}
              {isAnimationDone ? (
                <StaticSecondRow text="T H E C O D E B R E A K E R S" />
              ) : (
                <AnimatedRow
                  rowId="home-animation-1-row-2"
                  text="T H E C O D E B R E A K E R S"
                />
              )}
              <div style={{ height: 10 }}></div>
              {/* Row 3 (14 letters) */}
              <AnimatedRow
                rowId="home-animation-1-row-3"
                text="W 9 N S 2 V 5 ! Z 8 6 R K J L E A S 4 L H"
              />
            </div>
          </div>
          <div style={{ height: 50 }}></div>{" "}
          <div className="col-12 text-center">
            {isAnimationDone && !showSecondText && (
              <div
                id="home-animation-1-text-1"
                className="home-animation-1-textb"
              >
                Welcome to The Codebreakers <br /> your one-stop online resource
                for exploring <br />
                the fascinating world of cryptography!
              </div>
            )}
            {isAnimationDone && showSecondText && (
              <div
                id="home-animation-1-text-2"
                className="home-animation-1-textb"
              >
                Honoring the Codebreakers: <br /> From Bletchley Park to Enigma
                and Beyond.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
