// using filter do something on the below array
let num = [30, 54, 10, 2, 4];
let divByTenArray = num.filter((value)=>{
    return value % 10 == 0
});
console.log(divByTenArray);