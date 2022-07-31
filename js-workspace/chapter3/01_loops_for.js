// let n = prompt('Enter the range : ');
// let sum = 0;
// for(let i =1 ;i <= n; i++){
//     sum +=i;
// }
// console.log(sum);

let obj = {
    harry : 90,
    shubh : 45,
    shashank : 99,
    nitesh : 32,
    shiv : 44
}
//for in loop
for(let name in obj){
    console.log('marks for '+name+' is : '+obj[name]);
}

//for of loop(should be itterable)
for(let b of "shashank"){
    console.log(b);
}