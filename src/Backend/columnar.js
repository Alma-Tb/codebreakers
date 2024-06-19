const _ = require('lodash');

function ColumnarDetermineKeyLength(plainText, firstChar, secondChar) {
  plainText = plainText.toLowerCase();

  let counter = 0;
  let numberOfColumns = 2;
  let resultLength = 0;
  let keyLength = 0;

  while (numberOfColumns < 50) {
    const charArray = _.times(50, _.times(numberOfColumns, _.constant(' '))); // Create a 50xN char array filled with spaces

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        if (counter < plainText.length) {
          charArray[i][j] = plainText[counter];
          counter++;
        }
      }
    }

    for (let i = 0; i < numberOfColumns; i++) {
      if (charArray[0][i] === firstChar && charArray[1][i] === secondChar) {
        resultLength = 1;
        break;
      }
    }

    if (resultLength === 1) {
      keyLength = numberOfColumns;
      break;
    } else {
      counter = 0;
      numberOfColumns++;
    }
  }

  return keyLength;
}

function generateKeyPermutations(keyLength) {
    // Helper function to swap elements in an array
    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
    // Recursive function to generate permutations
    function permute(arr, start, end, permutations) {
      if (start === end) {
        permutations.push([...arr]); // Copy the array to avoid mutation
        return;
      }
  
      for (let i = start; i <= end; i++) {
        swap(arr, start, i);
        permute(arr, start + 1, end, permutations);
        swap(arr, i, start);
      }
    }
  
    const numbers = [];
    for (let i = 1; i <= keyLength; i++) {
      numbers.push(i);
    }
  
    const permutations = [];
    permute(numbers, 0, numbers.length - 1, permutations);
    return permutations;
  }

function ColumnarTestKey(key, plainText, cipherText) {
  const encryptedText = ColumnarEncrypt(plainText, key);
  return encryptedText === cipherText;
}

function ColumnarTestDecKey(key, plainText, cipherText) {
  const decryptedText = ColumnarDecrypt(cipherText, key);
  return decryptedText === plainText;
}

function ColumnarPrintColumnsSeparately(matrix) {
  // Not applicable in server-side rendering, comment out
  // console.log('Matrix:');
  // for (let i = 0; i < matrix.length; i++) {
  //   console.log(matrix[i].join(' '));
  // }
}

function findKeyIndexFromList(keyList, key) {
  return _.findIndex(keyList, (item) => item === key);
}


function ColumnarAnalyse1(plainText, cipherText) {
    plainText = plainText.toLowerCase();
    cipherText = cipherText.toLowerCase();
  
    const firstChar = cipherText[0];
    const secondChar = cipherText[1];
  
    // Implement functions for key length determination and permutation generation
    const keyLength = determineKeyLength(plainText, firstChar, secondChar); // Replace with your implementation
    const keys =  ColumnarGenerateKeyPermutations(keyLength); // Replace with your implementation
  
    let key;
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      const encresult = testKey(key, plainText, cipherText); // Replace with your implementation
      const decresult = testDecKey(key, plainText, cipherText); // Replace with your implementation
  
      if (encresult && decresult) {
        break;
      }
    }
  
    return key;
  }

function columnarAnalyse(plainText, cipherText) {
    // Convert both plainText and cipherText to lowercase
    plainText = plainText.toLowerCase();
    cipherText = cipherText.toLowerCase();
  
    // Get the first two characters from the cipherText
    const firstChar = cipherText[0];
    const secondChar = cipherText[1];
  
    // Find the Key Length (replace with your implementation)
    const keyLength = determineKeyLength(plainText, firstChar, secondChar);
  
    // Generate the Keys List
    const keys = generateKeyPermutations(keyLength);
  
    // Test all keys
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const encResult = testKey(key, plainText, cipherText);
      const decResult = testDecKey(key, plainText, cipherText);
  
      if (encResult && decResult) {
        return key; // Found a key, return it
      }
    }
  
    // No key found, return empty array
    return [];
  }

function ColumnarDecrypt(cipherText, key) {
    const columns = key.length;
    const rows = Math.ceil(cipherText.length / columns);
  
    const matrix = new Array(rows).fill(null).map(() => new Array(columns).fill(' '));
  
    let index = 0;
    for (let i = 0; i < columns; i++) {
      const colIndex = findKeyIndexFromList(key, i + 1);
      for (let row = 0; row < rows; row++) {
        if (index < cipherText.length) {
          matrix[row][colIndex] = cipherText[index];
        }
        index++;
      }
    }
  
    let plaintext = '';
    for (let row = 0; row < rows; row++) {
      plaintext += matrix[row].join('');
    }
  
    return plaintext.trim(); // Remove trailing spaces from padding
  }

  function ColumnarEncrypt(plainText, key) {
    const columns = key.length;
    const rows = Math.ceil(plainText.length / columns);
  
    const matrix = new Array(rows).fill(null).map(() => new Array(columns).fill(' '));
  
    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (index < plainText.length) {
          matrix[row][col] = plainText[index];
        }
        index++;
      }
    }
  
    let ciphertext = '';
    for (let i = 0; i < columns; i++) {
      const colIndex = findKeyIndexFromList(key, i + 1);
      for (let row = 0; row < rows; row++) {
        ciphertext += matrix[row][colIndex];
      }
    }
  
    return ciphertext;
  }
  
module.exports = {
  ColumnarDetermineKeyLength,
 // ColumnarGenerateKeyPermutations,
  ColumnarTestKey,
  ColumnarTestDecKey,
  // ColumnarPrintColumnsSeparately (commented out),
  findKeyIndexFromList,
  ColumnarAnalyse1,
  columnarAnalyse,
  ColumnarDecrypt,
  ColumnarEncrypt
};
