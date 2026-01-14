import { caesarCipher } from "./caesarCipher.js";

describe('caesarCipher function', () => {
    test('caesarCipher function is defined', () => {
        expect(caesarCipher).toBeDefined();
    })

    test("make 'xyz' with shift 3 return 'abc", () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    })

    test("make 'jga' with shift 5 return 'hey'", () => {
        expect(caesarCipher('hey', 5)).toBe('mjd');
    })

    test("make 'Hello, World!' with shift 3 return 'hey'", () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    })

    test("make 'Hello, World!' with shift 3 return 'hey'", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    })
})