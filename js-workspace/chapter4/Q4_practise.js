// Extract the amount in thios String

let sentence = 'Please give rupees 1000';

arr = sentence.split(' ');
for(i in arr){
    let n = parseInt(arr[i]);
    if(!Number.isNaN(n)){
        console.log(`the number is : ${n} `)
    }
}