const _ = require('lodash');

function VigenereRepeatAnalyse(plainText, cipherText) {
    let key = "";
    cipherText = cipherText.toLowerCase();
    plainText = plainText.toLowerCase();
    const cipherTextLength = cipherText.length;
    const plainTextIndex = new Array(cipherTextLength);
    const cipherTextIndex = new Array(cipherTextLength);
    const keyIndex = new Array(cipherTextLength);
    const alphabets = new Array(26);

    //Creating the alphabets list
    for (let i = 0; i < 26; i++) {
        alphabets[i] = String.fromCharCode('a'.charCodeAt(0) + i);
    }

    //Creating the cipherTextIndex
    for (let i = 0; i < cipherTextLength; i++) {
        cipherTextIndex[i] = alphabets.indexOf(cipherText[i]);
    }

    //Creating the plainTextIndex
    for (let i = 0; i < cipherTextLength; i++) {
        plainTextIndex[i] = alphabets.indexOf(plainText[i]);
    }

    //Creating keyIndex
    for (let i = 0; i < cipherTextLength; i++) {
        keyIndex[i] = ((cipherTextIndex[i] - plainTextIndex[i]) + 26) % 26;
        //adding 26 because the result of the subtraction might be -ve &
        //we need to ensure that the result is within the range 0-25
    }

    //Finding Key
    for (let i = 0; i < cipherTextLength; i++) {
        key += alphabets[keyIndex[i]];
    }

    //Finding Original Key without padding
    let mainKey = "";
    mainKey += key[0];
    for (let i = 1; i < key.length; i++) {
        const cipher = VigenereRepeatEncrypt(plainText, mainKey);
        if (cipherText === cipher) {
            return mainKey;
        }
        mainKey += key[i];
    }

    return key.toLowerCase();
}

function VigenereRepeatDecrypt(cipherText, key) {
    let plainText = "";
    cipherText = cipherText.toLowerCase();
    const cipherTextLength = cipherText.length;
    let keyexpander = 0;
    const plainTextIndex = new Array(cipherTextLength);
    const cipherTextIndex = new Array(cipherTextLength);
    const keyIndex = new Array(cipherTextLength);
    const alphabets = new Array(26);

    //Preparing the Repeating Key
    while (key.length !== cipherTextLength) {
        key = key + key[keyexpander];
        keyexpander++;
    }

    //Creating the alphabets list
    for (let i = 0; i < 26; i++) {
        alphabets[i] = String.fromCharCode('a'.charCodeAt(0) + i);
    }

    //Creating keyIndex
    for (let i = 0; i < key.length; i++) {
        keyIndex[i] = alphabets.indexOf(key[i]);
    }

    //Creating the cipherTextIndex
    for (let i = 0; i < cipherTextLength; i++) {
        cipherTextIndex[i] = alphabets.indexOf(cipherText[i]);
    }

    //Creating the plainTextIndex
    for (let i = 0; i < cipherTextLength; i++) {
        plainTextIndex[i] = ((cipherTextIndex[i] - keyIndex[i]) + 26) % 26;
        //adding 26 because the result of the subtraction might be -ve &
        //we need to ensure that the result is within the range 0-25
    }

    //Finding Plain Text
    for (let i = 0; i < cipherTextLength; i++) {
        plainText += alphabets[plainTextIndex[i]];
    }

    return plainText;
}

function VigenereRepeatEncrypt(plainText, key) {
    let cipherText = "";
    const plainTextLength = plainText.length;
    let keyexpander = 0;
    const plainTextIndex = new Array(plainTextLength);
    const cipherTextIndex = new Array(plainTextLength);
    const keyIndex = new Array(plainTextLength);
    const alphabets = new Array(26);

    //Preparing the Repeating Key
    while (key.length !== plainTextLength) {
        key = key + key[keyexpander];
        keyexpander++;
    }

    //Creating the alphabets list
    for (let i = 0; i < 26; i++) {
        alphabets[i] = String.fromCharCode('a'.charCodeAt(0) + i);
    }

    //Creating keyIndex
    for (let i = 0; i < key.length; i++) {
        keyIndex[i] = alphabets.indexOf(key[i]);
    }

    //Creating the plainTextIndex
    for (let i = 0; i < plainTextLength; i++) {
        plainTextIndex[i] = alphabets.indexOf(plainText[i]);
    }

    //Creating the cipherTextIndex
    for (let i = 0; i < plainTextLength; i++) {
        cipherTextIndex[i] = (keyIndex[i] + plainTextIndex[i]) % 26;
    }

    //Finding Cipher Text
    for (let i = 0; i < plainTextLength; i++) {
        cipherText += alphabets[cipherTextIndex[i]];
    }

    return cipherText;
}
module.exports = {
VigenereRepeatAnalyse,
VigenereRepeatDecrypt,
VigenereRepeatEncrypt
      };
      