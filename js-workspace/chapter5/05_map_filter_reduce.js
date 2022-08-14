// map creates a new array by performing some operation on old array

let arr = [77,45, 98,12];
let a = arr.map((value)=>{
    console.log(value);
    return value * 2;
});
console.log(a);
let ar = arr.map((value, index, array)=>{
    console.log(value, index,  array);
    return value * index;
});
console.log(ar);
let arr1 = [2,46,8,5,99,65];
let arr2 = arr1.filter((value)=>{
    return value<10
});
console.log(arr2);

//Array reduce method
console.log('reduce starts')

let arr3 = [100,89, 63, 89, 01];
let sumArr = arr3.reduce((h1, h2)=>{
    return h1+h2;
})
console.log('sum of array'+sumArr);

const sumReduceFunction = (myArr1)=>{
    return myArr1.reduce((h1,h2)=>{
        return h1+h2;
    });
};
console.log(sumReduceFunction(arr3));
