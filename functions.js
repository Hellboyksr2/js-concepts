/**
 * Fuction Types
 * 
 * Ananymus Function -> function(parm1, parm2) { // Statments return <value>}
 * Named Function -> function <name>(parm1, parm2) { // Statments return <value> }
 * Arraw Function -> (parm1, parm2) => {// Statments return <value>}
 * 
 * 
 * Function Call -> functionName(<parmas>, <parms>);
 */

// Ananymus Function 

// console.log("Ananymus Function Before Declartion - Sum = ", add(10, 20) ); // Error
 
var getConstant = function() {
    return "Kumar"
}


// Exmaple with Parmas;
var add = function(a, b) {
    return a + b;
}

console.log("Ananymus Function After Declartion - Sum = ", add(10, 20) );
console.log( getConstant() )

// Named Function 

console.log("Named Function Before Declartion - Sum = ", sum(10, 20) );

function sum(a, b) {
    // Statments
    return a + b
}

console.log("Named Function After Declartion - Sum = ", sum(10, 20) );

// Arrow Function

// console.log("Arrow Function Before Declartion - Sum = ", sumArrow(10, 20) );

var sumArrow = (a, b)  => {
    // Statments
    return a + b
}

console.log("Arrow Function After Declartion - Sum = ", sumArrow(10, 20) );