export function caesarCipher(string, shift) {
    const plainTextArr = generatePlainText();
    const cipherTextArr = generateCipherText(plainTextArr, shift);
    const cipherString = encodeText(string, plainTextArr, cipherTextArr)
    return cipherString;
}

function generatePlainText() {
    const plainText = [
        {letter: 'a', index: 0}, {letter:'b', index: 1}, {letter: 'c', index: 2}, {letter: 'd', index: 3}, {letter: 'e', index: 4}, 
        {letter: 'f', index: 5}, {letter: 'g', index: 6}, {letter: 'h', index: 7}, {letter: 'i', index: 8}, {letter: 'j', index: 9}, 
        {letter: 'k', index: 10}, {letter: 'l', index: 11}, {letter: 'm', index: 12}, {letter: 'n', index: 13}, {letter: 'o', index: 14}, 
        {letter: 'p', index: 15}, {letter: 'q', index: 16}, {letter: 'r', index: 17}, {letter: 's', index: 18}, {letter: 't', index: 19}, 
        {letter: 'u', index: 20}, {letter: 'v', index: 21}, {letter: 'w', index: 22}, {letter: 'x', index: 23}, {letter: 'y', index: 24}, 
        {letter: 'z', index: 25} 
    ]

    return plainText;
}

function generateCipherText(plainText, shift) {
    const cipherText = new Array(26);
    const length = plainText.length;

    for (let i = 0; i < length; i++) {
        const oldIndex = plainText[i].index;
        let newIndex = oldIndex - shift;

        if (newIndex < 0) {
            newIndex = (oldIndex - shift) + length;
        }

        cipherText[newIndex] = plainText[i].letter;
    }

    return cipherText;
}

function encodeText(string, plainText, cipherText) {
    const arrString = string.split('');
    let newString = '';

    arrString.forEach(letter => {
        let objectLetter;
        let cipherChar = ''
        
        if (letter === ',' || letter === '.' || letter === '?' || letter === '!' ||
            letter === ' ' || letter === 1 - 9) {
                newString += letter;
                return;
        }

        objectLetter = plainText.find(object => object.letter === letter.toLowerCase());

        if (letter === letter.toUpperCase()) {
            cipherChar = cipherText[objectLetter.index];
            newString += cipherChar.toUpperCase();
            return;
        }

        cipherChar = cipherText[objectLetter.index];
        newString += cipherChar;
    });

    return newString;
}