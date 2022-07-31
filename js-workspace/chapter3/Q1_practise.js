const strudent_marks_obj= {
    shashank : 99,
    harry : 100,
    nitesh : 96,
    manohar : 12,
    gautam : 01
}
 for(let i = 0; i<=Object.keys(strudent_marks_obj).length; i++){
    console.log("The marks for student "+Object.keys(strudent_marks_obj)[i]+" is  : "+strudent_marks_obj[Object.keys(strudent_marks_obj)[i]]);
 }

// let enteredName = prompt('Enter the name to display marks for : ');
// console.log("The marks for student is  : "+strudent_marks_obj[enteredName]);