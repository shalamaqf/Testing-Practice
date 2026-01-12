export function capitalize(string) {
    const firstChar = string.charAt(0).toUpperCase();
    const newString = string.slice(1, string.length);
    return firstChar + newString;
}