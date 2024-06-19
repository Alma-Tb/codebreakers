 #region Helper Functions
        /* Function to determine the length of the key
         * It does so by trying to find a repeating pattern in the plain text
         * which could indicate the length of the key used 
         */

        public int ColumnarDetermineKeyLength(string plainText, char firstChar, char secondChar)
        {
            char[,] charArray = new char[50, 50];
            int counter = 0;
            int numberOfColumns = 2;
            int resultLength = 0;
            int keyLength = 0;
            /* Loop until the key length is found or we reach 50 columns :
             * I tested it using 100 ,200, 500 and 1000 : Works within time limit
            */
            while (numberOfColumns < 50)
            {
                // Fill the character array with plain text
                for (int i = 0; i < 3; i++)
                {
                    for (int j = 0; j < numberOfColumns; j++)
                    {
                        // Ensure that the plain text length isnt exceeded
                        if (counter < plainText.Length)
                        {
                            charArray[i, j] = plainText[counter];
                            counter++;
                        }
                    }
                }
                // Check if the first two characters of the cipher text are found in the array
                for (int i = 0; i < numberOfColumns; i++)
                {
                    if (charArray[0, i] == firstChar && charArray[1, i] == secondChar)
                    {
                        resultLength = 1;
                        break;
                    }
                }
                // If the characters are found, set the key length and break the loop
                if (resultLength == 1)
                {
                    keyLength = numberOfColumns;
                    break;
                }
                else
                {
                    // If the characters are not found, reset the counter and increase the number of columns to check the next position
                    counter = 0;
                    numberOfColumns++;
                }
            }
            // Return the key length
            return keyLength;
        }

        public List<List<int>> ColumnarGenerateKeyPermutations(int keyLength)
        {
            // Generate the initial list of numbers
            List<int> numbers = new List<int>();
            for (int i = 1; i <= keyLength; i++)
            {
                numbers.Add(i);
            }

            // Generate all permutations
            List<List<int>> permutations = GetPermutations(numbers);

            return permutations;
        }

        public List<List<int>> ColumnarGetPermutations(List<int> list)
        {
            // If the list is empty, there is only one permutation: an empty list
            if (list.Count == 0)
            {
                return new List<List<int>> { new List<int>() };
            }

            // Generate the permutations
            List<List<int>> permutations = new List<List<int>>();
            for (int i = 0; i < list.Count; i++)
            {
                int num = list[i];

                // Generate the permutations of the list without the current number
                List<int> reducedList = new List<int>(list);
                reducedList.RemoveAt(i);
                List<List<int>> reducedPermutations = GetPermutations(reducedList);

                // Add the current number to the beginning of each reduced permutation
                foreach (List<int> reduced in reducedPermutations)
                {
                    reduced.Insert(0, num);
                    permutations.Add(reduced);
                }
            }

            return permutations;
        }

        //Testing Functions
        public bool ColumnarTestKey(List<int> key, string plainText, string cipherText)
        {
            // Encrypt the plaintext with the key
            string encryptedText = Encrypt(plainText, key);
            if(encryptedText == cipherText)
                Console.WriteLine(encryptedText);

            // Compare the encrypted text with the ciphertext
            return encryptedText == cipherText;
        }
        public bool ColumnarTestDecKey(List<int> key, string plainText, string cipherText)
        {
            // Encrypt the plaintext with the key
            string decryptedText = Decrypt(cipherText, key);
            if(decryptedText == plainText)
                Console.WriteLine(decryptedText);

            // Compare the encrypted text with the ciphertext
            return decryptedText == plainText;
        }

        static void ColumnarPrintColumnsSeparately(char[,] matrix)
        {
            int rows = matrix.GetLength(0);
            int columns = matrix.GetLength(1);
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < columns; j++)
                {
                    Console.Write($"{matrix[i, j]} ");
                }
                Console.WriteLine();
            }
        }

        static int ColukmmnarfindKeyIndexFromList(List<int> keyList, int key)
        {
            for (int i = 0; i < keyList.Count; i++)
            {
                if (keyList[i] == key)
                {
                    return i;
                }
            }
            return -1;
        }


        #endregion

        public List<int> ColumnarAnalyse(string plainText, string cipherText)
        {
            // Convert both plainText and cipherText to lower case
            plainText = plainText.ToLower();
            cipherText = cipherText.ToLower();

            // Get the first two characters from the cipherText
            char firstChar = cipherText[0];
            char secondChar = cipherText[1];

            // Find the Key Length
            int keyLength = DetermineKeyLength(plainText, firstChar, secondChar);

            // Generate the Keys List
            List<List<int>> keys = GenerateKeyPermutations(keyLength);

            /*
             // Print all keys
            for (int i = 0; i < keys.Count; i++)
            {
                List<int> key = keys[i];
                Console.Write("Key " + (i + 1) + ": ");
                for (int j = 0; j < key.Count; j++)
                {
                    int keyElement = key[j];
                    Console.Write(keyElement + " ");
                }
                Console.WriteLine();
            }
            */
            List<int> key = new List<int>();
            // Test all keys
            for (int i = 0; i < keys.Count; i++)
            {
                key = keys[i];
                bool encresult = TestKey(key, plainText, cipherText);
                bool decresult = TestDecKey(key, plainText, cipherText);

                if (encresult && decresult)
                {
                    /*
                    //Print Found Key
                    for (int j = 0; j < key.Count; j++)
                    {
                        int keyElement = key[j];
                        Console.Write(keyElement + " ");
                    }
                    */
                    break;
                }
            }
            return key;

        }


        public string ColumnarDecrypt(string cipherText, List<int> key)
        {

            // Calculate the number of columns and rows
            int columns = key.Count;
            int rows = (int)Math.Ceiling((double)cipherText.Length / columns);
            //Console.WriteLine("rows: " + rows);
            //Console.WriteLine("columns; " + columns);

            // Create a matrix to hold the characters
            char[,] matrix = new char[rows, columns];

            // Fill the matrix columns with the ciphertext 
            int index = 0;
            for (int i = 0; i < columns; i++)
            {
                int colIndex = findKeyIndexFromList(key, i + 1);

                for (int row = 0; row < rows; row++)
                {
                    if (index < cipherText.Length)
                    {
                        matrix[row, colIndex] = cipherText[index];
                        index++;
                    }
                }
            }

            //PrintColumnsSeparately(matrix);

            //Construct the plaintext by reading rows
            string plaintext = "";
            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < columns; col++)
                {
                    plaintext += matrix[row, col];
                }
            }

            return plaintext;
        }

       
        public string ColumnarEncrypt(string plainText, List<int> key)
        {
            // Calculate the number of columns and rows
            int columns = key.Count;
            int rows = (int)Math.Ceiling((double)plainText.Length / columns);
            //Console.WriteLine(rows);

            // Create a matrix to hold the characters
            char[,] matrix = new char[rows, columns];

            // Fill the matrix with the plaintext
            int index = 0;
            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < columns; col++)
                {
                    if (index < plainText.Length)
                        matrix[row, col] = plainText[index];
                    else
                        matrix[row, col] = 'x'; // Padding with letter x
                    index++;
                }
            }

            // Construct the ciphertext by reading columns based on the key
            string ciphertext = "";
            for (int i = 0; i < columns; i++)
            {
                int colindex = findKeyIndexFromList(key, i + 1);
                for (int row = 0; row < rows; row++)
                {
                    ciphertext += matrix[row, colindex];
                }
            }
            //PrintColumnsSeparately(matrix);

            return ciphertext;
        }