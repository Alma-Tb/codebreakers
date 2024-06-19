 public int RSAGetMultiplicativeInverse(int number, int baseN)
        {
            int m0 = baseN;
            int y = 0, x = 1;

            if (baseN == 1)
                return 0;

            while (number > 1)
            {
                int q = number / baseN;

                int t = baseN;
                baseN = number % baseN;
                number = t;
                t = y;

                y = x - q * y;
                x = t;
            }
            int inverse = x % m0;
            if (inverse < 0)
            {
                inverse += m0;
            }
            return inverse;
        }
        private static int RSAModPow(int baseValue, int exponent, int modulus)
        {

            int result = 1;
            for (int i = 0; i < exponent; i++)
            {
                result = (result * baseValue) % modulus;
            }
            return result;
        }


        public int RSAEncrypt(int p, int q, int M, int e)
        {
            // Cipher Text(c) = M^e mod (p*q)
            int n = p * q;
            int C = ModPow(M, e, n);
            return C;
        }

        public int RSADecrypt(int p, int q, int C, int e)
        {

            // Plain Text (M) = C^d mod (p*q)
            // d = e^-1 mod (p-1*q-1)
            int n = p * q;
            int totient =(p - 1) * (q - 1);
            int d = GetMultiplicativeInverse(e, (int)totient);
            int M =  ModPow(C, d, n);
            return M;
        }