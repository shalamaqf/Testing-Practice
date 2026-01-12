import { capitalize } from "./capitalize.js"

test('capitalize is defined', () => {
    expect(capitalize).toBeDefined();
})

test('return Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('return string with first character capitalized', () => {
    expect(capitalize('world')).toBe('World');
})

test('return string with first character capitalized', () => {
    expect(capitalize('hey odin')).toBe('Hey odin');
})