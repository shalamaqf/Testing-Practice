import { reverseString } from "./reverseString.js";

test('reverseString is defined', () => {
    expect(reverseString).toBeDefined();
})

test('Return olleh from hello', () => {
    expect(reverseString('hello')).toBe('olleh');
})