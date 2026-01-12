import { reverseString } from "./reverseString.js";

test('reverseString is defined', () => {
    expect(reverseString).toBeDefined();
})

test('Return olleh from hello', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('return a reversed string of world', () => {
    expect(reverseString('world')).toBe('dlrow');
})

test('return a reversed string of hey odin', () => {
    expect(reverseString('hey odin')).toBe('nido yeh');
})