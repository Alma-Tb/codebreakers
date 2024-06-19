const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

const app = express();
const port = process.env.PORT || 4000; // Use environment variable or default to 3000
const columnar = require("./columnar.js");
const vigenerauto = require("./vigenerea.js");
const vigenererepeat = require("./vigener.js");
const rsa = require("./rsa.js");
const dh = require("./DiffieHellman.js");

// Function to check if a character is a letter (a-z or A-Z)
function isLetter(char) {
  return (
    char.toLowerCase().charCodeAt(0) >= 97 &&
    char.toLowerCase().charCodeAt(0) <= 122
  );
}

// Function to shift a character based on key and encryption/decryption
function shiftChar(char, shift, isEncrypt) {
  const alphabetStart =
    char.toUpperCase() === char ? "A".charCodeAt(0) : "a".charCodeAt(0);
  const newCharValue = char.charCodeAt(0) + (isEncrypt ? shift : -shift);

  let position = newCharValue - alphabetStart;
  if (position < 0) {
    position += 26;
  } else if (position > 25) {
    position -= 26;
  }

  return String.fromCharCode(position + alphabetStart);
}

// Function to encrypt plain text using Caesar cipher
function cesarEncrypt(plainText, key) {
  let cipherText = "";
  for (let i = 0; i < plainText.length; i++) {
    const char = plainText[i];
    if (isLetter(char)) {
      cipherText += shiftChar(char, key, true);
    } else {
      cipherText += char; // Keep non-letters unchanged
    }
  }
  return cipherText;
}

// Function to decrypt cipher text using Caesar cipher
function cesarDecrypt(cipherText, key) {
  let plainText = "";
  for (let i = 0; i < cipherText.length; i++) {
    const char = cipherText[i];
    if (isLetter(char)) {
      plainText += shiftChar(char, key, false);
    } else {
      plainText += char; // Keep non-letters unchanged
    }
  }
  return plainText;
}

// Function to analyse cipher text and get the shift key (for educational purposes)
function cesarAnalyse(plainText, cipherText) {
  if (!plainText.length || !cipherText.length) {
    return res
      .status(400)
      .json({ error: "Empty plain text or cipher text for analyse" });
  }

  const ptIndex = plainText[0].toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
  const ctIndex = cipherText[0].toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
  return (ctIndex - ptIndex + 26) % 26;
}

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Configure CORS to allow requests from your React application's origin (adjust as needed)
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
  })
);

// POST route handler for '/cesar' endpoint
app.post("/cesar", (req, res) => {
  const { data, cipherText, key, operation } = req.body;
  console.log(data);
  console.log(cipherText);
  // Check for missing data and send appropriate error response
  if (!key || !operation) {
    return res
      .status(400)
      .json({ error: "Missing required data (key or operation)" });
  }
  let result;
  // Process data based on the operation
  if (operation === "encrypt") {
    result = cesarEncrypt(data, key);
  } else if (operation === "decrypt") {
    result = cesarDecrypt(cipherText, key);
  } else if (operation === "analyse") {
    // Ensure both plain text and cipher text are provided for analysis
    if (!data || !cipherText) {
      return res
        .status(400)
        .json({
          error: "Missing required data (plainText and cipherText for analyse)",
        });
    }
    result = cesarAnalyse(data, cipherText);
  } else {
    return res.status(400).json({ error: "Invalid operation" });
  }

  // Send the result as JSON response
  res.json({ result });
});

//POST route for '/columnar' endpoint
app.post("/columnar", (req, res) => {
  const { data, cipherText, key, operation } = req.body;
  console.log(data);
  console.log(cipherText);

  // Check for missing data and send appropriate error response
  if (!key || !operation) {
    return res
      .status(400)
      .json({ error: "Missing required data (key or operation)" });
  }

  // Parse the key from the request body
  const keyString = req.body.key;
  const keyArray = keyString.split(",").map(Number);

  let result;
  // Process data based on the operation
  if (operation === "encrypt") {
    result = columnar.ColumnarEncrypt(data, keyArray);
  } else if (operation === "decrypt") {
    result = columnar.ColumnarDecrypt(cipherText, keyArray);
  } else if (operation === "analyse") {
    // Ensure both plain text and cipher text are provided for analysis
    if (!data || !cipherText) {
      return res
        .status(400)
        .json({
          error: "Missing required data (plainText and cipherText for analyse)",
        });
    }
    result = columnar.ColumnarAnalyse(data, cipherText);
  } else {
    return res.status(400).json({ error: "Invalid operation" });
  }

  // Send the result as JSON response
  res.json({ result });
});

//POST route for '/vigenerauto' endpoint
app.post("/vigenerauto", (req, res) => {
  const { data, cipherText, key, operation } = req.body;
  console.log(data);
  console.log(cipherText);

  // Check for missing data and send appropriate error response
  if (!key || !operation) {
    return res
      .status(400)
      .json({ error: "Missing required data (key or operation)" });
  }

  let result;
  // Process data based on the operation
  if (operation === "encrypt") {
    result = vigenerauto.encryptAutokey(data, key);
  } else if (operation === "decrypt") {
    result = vigenerauto.decryptAutokey(cipherText, key);
  } else if (operation === "analyse") {
    // Ensure both plain text and cipher text are provided for analysis
    if (!data || !cipherText) {
      return res
        .status(400)
        .json({
          error: "Missing required data (plainText and cipherText for analyse)",
        });
    }
    result = vigenerauto.VigenereAutoAnalyse(data, cipherText);
  } else {
    return res.status(400).json({ error: "Invalid operation" });
  }

  // Send the result as JSON response
  res.json({ result });
});

//POST route for '/vigenerrepeat' endpoint
app.post("/vigenerrepeat", (req, res) => {
  const { data, cipherText, key, operation } = req.body;
  console.log(data);
  console.log(cipherText);

  // Check for missing data and send appropriate error response
  if (!key || !operation) {
    return res
      .status(400)
      .json({ error: "Missing required data (key or operation)" });
  }

  let result;
  // Process data based on the operation
  if (operation === "encrypt") {
    result = vigenererepeat.VigenereRepeatEncrypt(data, key);
  } else if (operation === "decrypt") {
    result = vigenererepeat.VigenereRepeatDecrypt(cipherText, key);
  } else if (operation === "analyse") {
    // Ensure both plain text and cipher text are provided for analysis
    if (!data || !cipherText) {
      return res
        .status(400)
        .json({
          error: "Missing required data (plainText and cipherText for analyse)",
        });
    }
    result = vigenererepeat.VigenereRepeatAnalyse(data, cipherText);
  } else {
    return res.status(400).json({ error: "Invalid operation" });
  }

  // Send the result as JSON response
  res.json({ result });
});

// POST route for '/rsa' endpoint
app.post("/rsa", (req, res) => {
  const { data, cipherText, key, ed, operation } = req.body;

  // Check for missing data and send appropriate error response
  if (!key || !ed || !operation || !data || !cipherText) {
    return res
      .status(400)
      .json({ error: "Missing required data (p,q,e or m)" });
  }

  let result;
  // Process data based on the operation
  if (operation === "encrypt") {
    result = rsa.RSAEncrypt(data, cipherText, key, ed);
  } else if (operation === "decrypt") {
    result = rsa.RSADecrypt(data, cipherText, key, ed);
  }

  // Send the result as JSON response
  res.json({ result });
});

// POST route for '/DiffieHellman' endpoint
app.post("/DiffieHellman", (req, res) => {
  const { data, cipherText, key, ed} = req.body;
  console.log(data);
  console.log(cipherText);
  console.log(key);
  console.log(ed);

  // Check for missing data and send appropriate error response
  if (!key || !ed|| !data || !cipherText) {
    return res
      .status(400)
      .json({ error: "Missing required data (p,g or private keys)" });
  }

  let result;
  // Process data based on the operation
  result = dh.GetKeys(data, cipherText, key, ed);
  console.log(result);

  // Send the result as JSON response
  res.json({ result });
});
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
