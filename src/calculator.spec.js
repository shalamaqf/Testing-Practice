import { calculator } from "./calculator.js";

test('calculator object is defined', () => {
    expect(calculator).toBeDefined();
})

test('calculator object contains add function', () => {
    expect(typeof calculator.add).toBe('function')
})