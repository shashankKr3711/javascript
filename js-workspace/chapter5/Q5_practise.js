// using reduce do factorial function

let n = 5;
let arr = [1,2,3,4,5];
const reduceFact = (myArr)=>{
    myArr.reduce((n1, n2)=>{
        return n1*n2;
    });
}
console.log(reduceFact())
