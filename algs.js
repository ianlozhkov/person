function arrMap(arr, func) {
    let resArr = [];

    for (let i = 0; i < arr.length; i++) {
        resArr.push(func(arr[i]));
    }

    return resArr;
}

console.log(arrMap([0, 4, 7, 7], (x) => { return x + 2 }))