
public string VigenereRepeatAnalyse(string plainText, string cipherText)
{
    string key = "";
    cipherText = cipherText.ToLower();
    plainText = plainText.ToLower();
    int cipherTextLength = cipherText.Length;
    int[] plainTextIndex = new int[cipherText.Length];
    int[] cipherTextIndex = new int[cipherText.Length];
    int[] keyIndex = new int[cipherText.Length];
    char[] alphabets = new char[26];


    //Creating the alphabets list
    for (int i = 0; i < 26; i++)
    {
        alphabets[i] = (char)('a' + i);
    }

    //Creating the cipherTextIndex
    for (int i = 0; i < cipherTextLength; i++)
    {
        cipherTextIndex[i] = Array.IndexOf(alphabets, cipherText[i]);

    }

    //Creating the plainTextIndex
    for (int i = 0; i < cipherTextLength; i++)
    {
        plainTextIndex[i] = Array.IndexOf(alphabets, plainText[i]);

    }

    //Creating keyIndex
    for (int i = 0; i < cipherTextLength; i++)
    {
        keyIndex[i] = ((cipherTextIndex[i] - plainTextIndex[i]) + 26) % 26;
        //adding 26 because the result of the subtraction might be -ve &
        //we need to ensure that the result is within the range 0-25
    }

    //Finding Key
    for (int i = 0; i < cipherTextLength; i++)
    {
        key += alphabets[keyIndex[i]];
    }


    //Finding Original Key without padding
    string mainKey = "";
    mainKey += key[0];
    for (int i = 1; i < key.Length; i++)
    {

        string cipher = Encrypt(plainText, mainKey);
        if (cipherText.Equals(cipher))
        {
            return mainKey;

        }
        //Add letter from padded key ya Alma :( 
        //mainKey += mainKey[i];
        mainKey += key[i];
    }

    return key.ToLower();
}


public string VigenereRepeatDecrypt(string cipherText, string key)
{
    string plainText = "";
    cipherText = cipherText.ToLower();
    int cipherTextLength = cipherText.Length;
    int keyexpander = 0;
    int[] plainTextIndex = new int[cipherText.Length];
    int[] cipherTextIndex = new int[cipherText.Length];
    int[] keyIndex = new int[cipherText.Length];
    char[] alphabets = new char[26];

    //Preparing the Repeating Key
    while (key.Length != cipherText.Length)
    {
        key = key + key[keyexpander];
        keyexpander++;
    }

    //Creating the alphabets list
    for (int i = 0; i < 26; i++)
    {
        alphabets[i] = (char)('a' + i);
    }

    //Creating keyIndex
    for (int i = 0; i < key.Length; i++)
    {
        keyIndex[i] = Array.IndexOf(alphabets, key[i]);
    }

    //Creating the cipherTextIndex
    for (int i = 0; i < cipherTextLength; i++)
    {
        cipherTextIndex[i] = Array.IndexOf(alphabets, cipherText[i]);

    }

    //Creating the plainTextIndex
    for (int i = 0; i < cipherTextLength; i++)
    {
        plainTextIndex[i] = ((cipherTextIndex[i] - keyIndex[i]) + 26) % 26;
        //adding 26 because the result of the subtraction might be -ve &
        //we need to ensure that the result is within the range 0-25
    }

    //Finding Plain Text
    for (int i = 0; i < cipherTextLength; i++)
    {
        plainText += alphabets[plainTextIndex[i]];
    }

    return plainText;
    //throw new NotImplementedException();
}

public string VigenereRepeatEncrypt(string plainText, string key)
{
    string cipherText = "";
    int plainTextLength = plainText.Length;
    int keyexpander = 0;
    int[] plainTextIndex = new int[plainTextLength];
    int[] cipherTextIndex = new int[plainTextLength];
    int[] keyIndex = new int[plainTextLength];
    char[] alphabets = new char[26];

    //Preparing the Repeating Key
    while (key.Length != plainTextLength)
    {
        key = key + key[keyexpander];
        keyexpander++;
    }

    //Creating the alphabets list
    for (int i = 0; i < 26; i++)
    {
        alphabets[i] = (char)('a' + i);
    }

    //Creating keyIndex
    for (int i = 0; i < key.Length; i++)
    {
        keyIndex[i] = Array.IndexOf(alphabets, key[i]);
    }

    //Creating the plainTextIndex
    for (int i = 0; i < plainTextLength; i++)
    {
        plainTextIndex[i] = Array.IndexOf(alphabets, plainText[i]);
    }

    //Creating the cipherTextIndex
    for (int i = 0; i < plainTextLength; i++)
    {
        cipherTextIndex[i] = (keyIndex[i] + plainTextIndex[i]) % 26;
    }

    //Finding Cipher Text
    for (int i = 0; i < plainTextLength; i++)
    {
        cipherText += alphabets[cipherTextIndex[i]];
    }

    return cipherText;

}