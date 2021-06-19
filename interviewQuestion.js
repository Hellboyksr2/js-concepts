// IIFE -> Immidiatly Involing Function Expression

(function() {
    console.log("Kumar")
})();


// Closure 

var counter = () => {
    var start = 30;

    return () => {
        start++;
        return start;
    }
}

var increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());


// End of Closure


// Functional Programing Intro

const table = (base) => {
    return (multipier) => {
        return base * multipier
    }
}

const table7 = table(7);

console.log(" 7*1=", table7(1));
console.log(" 7*2=", table7(2));
console.log(" 7*3=", table7(3));
console.log(" 7*5=", table7(5));

const table8 = table(8);

console.log(" 7*1=", table8(1));
console.log(" 7*2=", table8(2));
console.log(" 7*3=", table8(3));
console.log(" 7*5=", table8(5));

console.log("Multiplier", table(50)(100))


// Functional Programing Intro