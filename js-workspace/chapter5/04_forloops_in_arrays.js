let num = [3, 54, 1, 2, 4];
// normal for loop
for(let i=0; i<num.length;i++){
    console.log(num[i]);
}
// forEach
num.forEach((myNumber)=>{
    console.log(myNumber);
});

let myName = 'shashank';
let myArr = Array.from(myName);
console.log(myArr);
for(let item of myArr){
    console.log(myArr);
}
for(let i in myArr){
    console.log(myArr[i]);
}