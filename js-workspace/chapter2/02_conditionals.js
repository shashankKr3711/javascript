let a = prompt("Hey whats your age?");
a = Number.parseInt(a);//convert to integer
if(a<=0){
    alert('This is a invalid age');
}else if(a<9){
    alert('this is invalid ageyou are a kid, u are not allowed to drive');
}else if(a<18 && a>=9){
    alert('you  can drive after you are 18 years old');
}else{
    alert('This is a invalid age');
}