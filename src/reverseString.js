export function reverseString(string) {
    const arr = string.split('');
    const reversed = arr.reverse();
    return reversed.join('');
}