import { capitalize } from "./capitalize.js"

test('capitalize is defined', () => {
    expect(capitalize).toBeDefined();
})

test('return Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
})