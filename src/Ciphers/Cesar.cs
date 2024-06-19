 char[] alphabet = new char[26] { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };


        #region Helper Functions

        private char CesarShiftChar(char c, int shift, bool isEncrypt)
        {
            int shiftAmount = isEncrypt ? shift : -shift; // Adjust shift for decryption
            int newCharValue = c + shiftAmount;

            if (char.IsLetter(c))
            {
                int alphabetStart = char.IsUpper(c) ? 'A' : 'a';
                int alphabetEnd = alphabetStart + 25;

                // Manual modulo using loop (alternative to %)
                int position = newCharValue - alphabetStart;
                while (position < 0)
                {
                    position += 26;
                }
                while (position > 25)
                {
                    position -= 26;
                }
                newCharValue = position + alphabetStart;
            }

            return (char)newCharValue;
        }
        #endregion

        public string CesarEncrypt(string plainText, int key)
        {
            string cipherText = "";
            foreach (char c in plainText)
            {
                cipherText += ShiftChar(c, key, true);
            }
            return cipherText;
        }

        public string CesarDecrypt(string cipherText, int key)
        {
            string plainText = "";
            foreach (char c in cipherText)
            {
                if (char.IsLetter(c))
                {
                    int newCharValue = ShiftChar(c, key, false);
                    plainText += (char)newCharValue;
                }
                else
                {
                    plainText += c;
                }
            }
            return plainText;
        }


        public int CesarAnalyse(string plainText, string cipherText)
        {
            int PTindex = 0;
            int CTindex = 0;
            for (int j = 0; j < alphabet.Length; j++)
            {
                if (char.ToUpper(plainText[0]) == alphabet[j])
                {
                    PTindex = j;
                    break;
                }
            }
            for (int j = 0; j < alphabet.Length; j++)
            {
                if (char.ToUpper(cipherText[0]) == alphabet[j])
                {
                    CTindex = j;
                    break;
                }
            }

            if ((CTindex - PTindex) < 0)
            {
                return (CTindex - PTindex) + 26;
            }
            else
            {
                return (CTindex - PTindex) % 26;
            }
        }