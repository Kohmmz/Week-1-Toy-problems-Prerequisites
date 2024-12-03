// This function takes a student's marks and return their grade
function studentsMarks(marks){
if (marks < 0 || marks > 100 ){// Keeps marks range between 0 - 100
   return "Enter only between 0 - 100"
    }else if(marks > 80){
        return 'A';
    }else if (marks >= 60){
        return 'B'
    }else if( marks >= 50){
        return 'C'
    }else if( marks >= 40){
         return'D'
    }else{
         return'E'}}
// This function takes the user input and gives them there grade.
function studentGradesGenerator(){
      let mark = parseFloat(prompt('Please enter your Grades Here 0 - 100'))// Tells the user to input between 0-100
    if (mark < 0 || mark > 100 || isNaN(mark)){//  Makes it so the user cant enter a number higher than 0-100
      return 'Only Enter Marks Between 0 - 100';}

}
//results
console.log(studentsMarks(42));
console.log(studentsMarks(13));
console.log(studentsMarks(1000));