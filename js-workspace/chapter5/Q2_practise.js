// add numbers to array until 0 is added
let userInputArr = [];
while(true){
    let userinput = Number.parseInt(prompt(`Enter number : `));
    if(userinput == 0){
        break;
    }else{
        userInputArr.push(userinput);
    }
}
console.log('user input array value : ', userInputArr);