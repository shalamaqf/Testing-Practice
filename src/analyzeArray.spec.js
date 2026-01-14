import { analyzeArray } from "./analyzeArray.js";

test('analyzeArray function is defined', () => {
    expect(analyzeArray).toBeDefined();
})

test('make analyzeArray returns an object with properties', () => {
    expect(analyzeArray([1,8,3,4,2,6]))
    .toMatchObject(
        { 
                    average: 4,
                    min: 1,              
                    max: 8,
                    length: 6 
        })
})

test('make analyzeArray returns an object with properties', () => {
    expect(analyzeArray([3, 5, 7, 8, 9]))
    .toMatchObject(
        { 
                    average: 6.4,
                    min: 3,              
                    max: 9,
                    length: 5 
        })
})

test('make analyzeArray returns an object with properties', () => {
    expect(analyzeArray([12.4, 7.2, 13.5, 10.2]))
    .toMatchObject(
        { 
                    average: 10.825,
                    min: 7.2,              
                    max: 13.5,
                    length: 4 
        })
})