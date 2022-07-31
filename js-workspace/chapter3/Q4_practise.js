const findMean = (givenArray) =>{
    //console.log(givenArray)
    let mySum = 0;
    for(let i in givenArray){
        mySum = mySum + givenArray[i];
    }
    return Math.round(mySum/givenArray.length);
}

const myArray = [1, 2, 3, 4, 5];
console.log("Mean is : ",findMean(myArray));