export function analyzeArray(arrayOfNumbers) {
    const object = {
        average: findAverage(arrayOfNumbers),
        min: undefined,
        max: undefined,
        length: undefined
    }

    return object;
};


function findAverage(array) {
    let sum = 0;
    let average;
    const length = array.length;

    array.forEach(num => {
        sum += num;
    });

    return average = sum / length;
}