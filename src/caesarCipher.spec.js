import { caesarCipher } from "./caesarCipher.js";

describe('caesarCipher function', () => {
    test('caesarCipher function is defined', () => {
        expect(caesarCipher).toBeDefined();
    })

    test("make 'xyz' with shift 3 return 'abc", () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    })
})