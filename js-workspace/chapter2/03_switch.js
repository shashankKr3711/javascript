var myname = prompt("Enter you name : ");
var count = 0

for(i = 0 ; i <myname.length;i++){
    console.log(myname[i]);
    switch(myname[i]) {
        case 'a' :
        case 'e' :
        case 'i' :
        case 'o' :
        case 'u' :
            count+=1;
            break;
        default :
            break;
    }
}
console.log('No of vowels in your name is : ',count);