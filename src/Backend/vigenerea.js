const _ = require('lodash');
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encryptAutokey(plaintext, key) {
  let ciphertext = '';
  let runningKey = key;

  for (let i = 0; i < plaintext.length; i++) {
    const charIndex = getCharIndex(plaintext[i]);
    const shift = getCharIndex(runningKey[i % runningKey.length]);
    const newIndex = (charIndex + shift) % ALPHABET.length;
    ciphertext += getChar(newIndex);
    runningKey += plaintext[i];
  }

  return ciphertext;
}

function decryptAutokey(ciphertext, key) {
  let plaintext = '';
  let runningKey = key;

  for (let i = 0; i < ciphertext.length; i++) {
    const charIndex = getCharIndex(ciphertext[i]);
    const shift = getCharIndex(runningKey[i % runningKey.length]);
    const newIndex = (charIndex - shift + ALPHABET.length) % ALPHABET.length;
    plaintext += getChar(newIndex);
    runningKey += plaintext[i];
  }

  return plaintext;
}

function getCharIndex(char) {
    return ALPHABET.indexOf(char.toUpperCase());
  }
  
  function getChar(index) {
    return ALPHABET[index % ALPHABET.length];
  }
  
  function VigenereAutoAnalyse(plainText, cipherText) {
    let key = "";
    cipherText = cipherText.toLowerCase();
    plainText = plainText.toLowerCase();
    let cipherTextLength = cipherText.length;
    let plainTextIndex = new Array(cipherTextLength);
    let cipherTextIndex = new Array(cipherTextLength);
    let keyIndex = new Array(cipherTextLength);
    let alphabets = new Array(26);

    // Creating the alphabets list
    for (let i = 0; i < 26; i++) {
        alphabets[i] = String.fromCharCode('a'.charCodeAt(0) + i);
    }

    // Creating the cipherTextIndex
    for (let i = 0; i < cipherTextLength; i++) {
        cipherTextIndex[i] = alphabets.indexOf(cipherText[i]);
    }

    // Creating the plainTextIndex
    for (let i = 0; i < cipherTextLength; i++) {
        plainTextIndex[i] = alphabets.indexOf(plainText[i]);
    }

    // Creating keyIndex
    for (let i = 0; i < cipherTextLength; i++) {
        keyIndex[i] = ((cipherTextIndex[i] - plainTextIndex[i]) + 26) % 26;
        // Adding 26 because the result of the subtraction might be negative &
        // we need to ensure that the result is within the range 0-25
    }

    // Finding Key
    for (let i = 0; i < cipherTextLength; i++) {
        key += alphabets[keyIndex[i]];
    }

    // Finding Original Key without padding
    let mainKey = "";
    mainKey += key[0];
    for (let i = 1; i < key.length; i++) {
        let plain = encryptAutokey(plainText, mainKey);
        if (cipherText === plain) {
            return mainKey;
        }
        // Add letter from padded key :(
        // mainKey += mainKey[i];
        mainKey += key[i];
    }

    return key.toLowerCase();
}

  module.exports = {
decryptAutokey,
encryptAutokey,
VigenereAutoAnalyse,
  };
  