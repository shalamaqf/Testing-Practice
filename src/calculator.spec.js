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


// Tests for subtract function
test('calculator object contains subtract function', () => {
    expect(typeof calculator.subtract).toBe('function');
})

test('make 5 - 3 return 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test('make 100 - 35 return 65', () => {
    expect(calculator.subtract(100, 35)).toBe(65);
})

test('make 7.3 - 3.1 return 4.2', () => {
    expect(calculator.subtract(7.3, 3.1)).toBeCloseTo(4.2);
})

test('make 3 - 24 return -21', () => {
    expect(calculator.subtract(3, 24)).toBe(-21);
})


// Tests for divide function
test('calculator object contains divide function', () => {
    expect(typeof calculator.divide).toBe('function');
})

test('make 12 / 4 return 3', () => {
    expect(calculator.divide(12, 4)).toBe(3);
})