/**
 * Generates a strong, random password.
 *
 * @param {number} length The desired length of the password.
 * @param {boolean} useSymbols Include symbols in the password.
 * @returns {string} The generated password.
 */
export const generateStrongPassword = (length = 14, useSymbols = true) => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allChars = lower + upper + numbers;
    if (useSymbols) {
        allChars += symbols;
    }

    let password = '';
    // Ensure at least one of each required character type
    password += lower[Math.floor(Math.random() * lower.length)];
    password += upper[Math.floor(Math.random() * upper.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    if (useSymbols) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Fill the rest of the password length
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password string to ensure randomness
    return password.split('').sort(() => 0.5 - Math.random()).join('');
};