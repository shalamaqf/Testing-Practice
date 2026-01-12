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

test('make 123 + 200 return 6', () => {
    expect(calculator.add(123, 200)).toBe(323);
})

test('make 1.23 + 2 return 3.23', () => {
    expect(calculator.add(1.23, 2)).toBeCloseTo(3.23);
})

test('make -5 + -2 return -7', () => {
    expect(calculator.add(-5, -2)).toBeCloseTo(-7);
})