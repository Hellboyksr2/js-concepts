/**
 *  If Syntax 
 * 
 * // Single Statements
 *  if(<condation>) //True Statement else //False Statement
 * 
 *  // Multiple Statements
 *  if(<condation>) { //True Statements } else { //False Statements }
 * 
 */



var getGrade = (marks) => {
    let grade;

    if (marks >= 90) {
        grade = "A"
    } else if (marks >= 70) {
        grade = "B"
    } else if (marks >= 35) {
        grade = "C"
    } else {
        grade = "F"
    }
    return grade;
}

console.log("For 30 Marks - ", getGrade(30));
console.log("For 55 Marks - ", getGrade(55));
console.log("For 75 Marks - ", getGrade(75));
console.log("For 90 Marks - ", getGrade(90));