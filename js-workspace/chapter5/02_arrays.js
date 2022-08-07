// Methods of arrays
let num = [1, 2, 4, 3, 6, 7];
// convert array to String
console.log(num.toString());
// join two arrays
let num1 = [8, 11, 10,7];
let c = num.join(" and "); 
console.log(c, typeof c);
let poppedElement = num.pop();// returns poped element
console.log(num , poppedElement);
let lengthArray = num.push(poppedElement);// returns length of the arrray
console.log(num, lengthArray);
let r = num.shift();// removes the element from the start of the array
console.log(num, r);
let unShift = num.unshift(r);// returns length of the arrray
console.log(num, unShift);


