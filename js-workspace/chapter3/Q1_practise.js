const strudent_marks_obj= {
    shashank : 99,
    harry : 100,
    nitesh : 96,
    manohar : 12,
    gautam : 01
}

let enteredName = prompt('Enter the name to display marks for : ');
console.log("The marks for student is  : "+strudent_marks_obj[enteredName]);