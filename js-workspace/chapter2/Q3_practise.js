let myNumber =  prompt('Enter number to check if divisible by 2 and 3');
myNumber = Number.parseInt(myNumber)

if(myNumber%2 == 0 && myNumber%3 ==0 ){
    console.log('Number divisible by both 2 and 3');
}else if(myNumber%2 == 0){
    console.log('Number divisible by 2');
}else if(myNumber%3 ==0 ){
    console.log('Number divisible by 3');
}else{
    console.log('Number not divisible by either 2 or 3');
}