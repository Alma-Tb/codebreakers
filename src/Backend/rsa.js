const _ = require('lodash');
function RSAGetMultiplicativeInverse(number, baseN) {
    let m0 = baseN;
    let y = 0, x = 1;

    if (baseN === 1)
        return 0;

    while (number > 1) {
        let q = Math.floor(number / baseN);

        let t = baseN;
        baseN = number % baseN;
        number = t;
        t = y;

        y = x - q * y;
        x = t;
    }
    let inverse = x % m0;
    if (inverse < 0) {
        inverse += m0;
    }
    return inverse;
}

function RSAModPow(baseValue, exponent, modulus) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = (result * baseValue) % modulus;
    }
    return result;
}

function RSAEncrypt(p, q, M, e) {
    // Cipher Text(c) = M^e mod (p*q)
    let n = p * q;
    let C = RSAModPow(M, e, n);
    return C;
}

function RSADecrypt(p, q, C, e) {
    // Plain Text (M) = C^d mod (p*q)
    // d = e^-1 mod (p-1*q-1)
    let n = p * q;
    let totient = (p - 1) * (q - 1);
    let d = RSAGetMultiplicativeInverse(e, totient);
    let M = RSAModPow(C, d, n);
    return M;
}
module.exports={
    RSADecrypt,
    RSAEncrypt
}