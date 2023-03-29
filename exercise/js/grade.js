let score = 75;
let grade = ""; // undefined

if(score >= 90){
    grade = "A";
}else if(score >= 80 && score < 90){
    grade = "B";
}else if(score >=70 && score < 80){
    grade = "C";
}else if(score >=60 && score < 70){
    grade = "D";
}else{
    grade = "F";
}
document.write("학점은 <span class='accent'>" + grade + "</span>입니다.");
