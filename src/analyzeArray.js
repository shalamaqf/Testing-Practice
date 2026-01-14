export function analyzeArray(arrayOfNumbers) {
    const object = {
        average: findAverage(arrayOfNumbers),
        min: findMin(arrayOfNumbers),
        max: findMax(arrayOfNumbers),
        length: findLength(arrayOfNumbers)
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

function findMin(array) {
    let min = array[0];

    array.forEach(num => {
        if (num < min) {
            min = num;
        }
        min = min;
    });

    return min;
}

function findMax(array) {
    let max = array[0];

    array.forEach(num => {
        if (num > max) {
            max = num;
        }
        max = max;
    });

    return max;
}

function findLength(array) {
    return array.length;
}