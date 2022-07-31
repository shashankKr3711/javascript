let a = 1;
let b = 2;
let c = 3;

function onePlusAvg(x, y){
    console.log('One plus average of '+x +' and '+y+' is : ', 1 +(x+y)/2);
}
const sum = (p, q)=>{
    return p + q;
}

const hello = ()=>{
    console.log(' Hey this is shashank ');
    return 'hi';
}

onePlusAvg(1, 2);
onePlusAvg(2, 3);
onePlusAvg(3, 1);
console.log(sum(4, 11))
console.log(sum(5, 15))
console.log(sum(9, 16))

let  v = hello();
console.log(v);

