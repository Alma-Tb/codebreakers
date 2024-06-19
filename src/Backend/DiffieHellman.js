const _ = require('lodash');
function ModPow(alpha, xa, modulus) {
    // Modular Exponentiation by squaring

    // checks if the modulus is equal to 1: always 0 
    if (modulus === 1)
        return 0;

    // ensures that alpha is within the range of the modulus.
    let result = 1;
    alpha %= modulus;

    while (xa > 0) {
        // Check if exponent is odd : odd = 2 * k + 1
        // Multiply the result by the q to account for the extra power
        if (xa % 2 === 1)
            result = (result * alpha) % modulus;
        // Dividing the alpha (exponent) by 2 to prepare it for the next iteration
        xa = Math.floor(xa / 2);
        // Calculate Modular square of alpha
        alpha = (alpha * alpha) % modulus;
    }

    return result;
}

function GetKeys(q, alpha, xa, xb) {
    // Step 1: Compute public keys for Alice and Bob
    const ya = ModPow(alpha, xa, q);
    const yb = ModPow(alpha, xb, q);

    // Step 2: Compute shared secret keys
    const ka = ModPow(yb, xa, q);
    const kb = ModPow(ya, xb, q);

    // Return the computed keys as a list
    return [ka, kb];
}

module.exports ={
    GetKeys
}