var a = 10; 1000
var b = '';
var c = [];
var d = {};

var e = undefined; 
var f = null;   2200000
var g = NaN;

var h = function() {}

console.log(typeof a); // Number
console.log(typeof b);  // String
console.log(typeof c);  // Object
console.log(typeof d);  // Object
console.log(typeof e);  // undefined
console.log(typeof f);  // Object
console.log(typeof g);  // Number
console.log(typeof h);  // Function

a  = 10;    // Stack - Address 20000 - 10 | a -> 20000
a = 1000;   // Stack - Address 30000 - 1000 | a -> 30000   

d = { a: 1000 }; // Heap - address 50000000 - { a: 1000 } | d -> 50000000
d.b = 2000; // Heap - address 50000000 - { a: 1000, b: 2000 } | d -> 50000000

i = d; // Heap - address 50000000 
i.c = 3000;

console.log(i);
console.log(d);


/**
 * Js Data - Stack, Heap
 * 
 * Stack    -   Premitive Data (Number, String, undefined, Boolean)
 * Heap     -   Non Premitive Types ( Null, Object, Array, function)
 * 
 */

