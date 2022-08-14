// take user input and add number to Array
let userInputArr = [];
for(let i =0 ; i<5; i++){
    userInputArr.push(Number.parseInt(prompt(`Enter ${i+1} the number : `)));
}
console.log('user input array value : ', userInputArr);