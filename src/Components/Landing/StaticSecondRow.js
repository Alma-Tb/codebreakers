import "../Styles/Hero.css";

function StaticSecondRow({ text }) {
  return (
    <div className="home-animation-1-row">
      {text.split("").map((char, index) => (
        <span key={index} className="animated-char">
          {char} {/* Display the character */}
          <span className="animated-char-circle"></span>{" "}
          {/* Add the circle behind */}
        </span>
      ))}
    </div>
  );
}

export default StaticSecondRow;
