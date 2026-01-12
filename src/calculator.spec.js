import { calculator } from "./calculator.js";

test('calculator object is defined', () => {
    expect(calculator).toBeDefined();
})


// Tests for add function
test('calculator object contains add function', () => {
    expect(typeof calculator.add).toBe('function');
})

test('make 2 + 2 return 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
})