let arr1: number[] = [];
let arr2: number[] = [4];
let arr3: number[] = [3425234, 3425234, 3222, 543, -54, 0];

function minArr(arr: number[]): number {
    let min = arr?.length ? arr[0] : 0;

    if (arr?.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    }

    return min;
}

function maxArr(arr: number[]): number {
    let max = arr?.length ? arr[0] : 0;

    if (arr?.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }

    return max;
}

function avgArr(arr: number[]): number {
    let avg = 0;

    for (let i = 0; i < arr?.length ; i++) {
        avg += arr[i] / arr.length;
    }

    return avg;
}

function evenArr(arr: number[]): number[] {
    let evenArray: number[] = [];

    for (let i = 0; i < arr?.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
    }

    return evenArray;
}

console.log(minArr(arr1));
console.log(minArr(arr2));
console.log(minArr(arr3));

console.log(maxArr(arr1));
console.log(maxArr(arr2));
console.log(maxArr(arr3));

console.log(avgArr(arr1));
console.log(avgArr(arr2));
console.log(avgArr(arr3));

console.log(evenArr(arr1));
console.log(evenArr(arr2));
console.log(evenArr(arr3));