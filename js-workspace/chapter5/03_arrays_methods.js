let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
delete numbers[1];//length doesnot change on deleting one item
delete numbers[2];//length reduces by 1
console.log(numbers);

let number1Arr = [1, 2, 3];
let number2Arr = [4, 5, 6];
let resultArr = number1Arr.concat(number2Arr);
console.log('result array : ' + resultArr);

let unsortedArray = [1, 11, 21, 12, 14, 54, 0, 115];
console.log(unsortedArray.sort());
let compareFn = (a, b) => {
    return a - b;
}

console.log(unsortedArray.sort(compareFn));

// reverse function in array
console.log('reverse : ' + unsortedArray.reverse());

// splice  in array
let number2 = [1, 11, 21, 12, 14, 54, 0, 115];
let deletedValues = number2.splice(2, 3, 101, 104, 102,141);
console.log(number2);
console.log('deleted Value array: '+deletedValues);

let sliceArray = resultArr.slice(3);
console.log(sliceArray)