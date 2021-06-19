/**
 * Array Iterations -
 * 
 * ForEach - When we need to Loop throught and perform some Operations for every Element
 * Map - When we need to Loop through and create a new Array from the existing Array (Ex: Manpulating the Data)
 * Filter - When we need to remove some elements from Array
 * 
 * Sort
 * Reduce
 */

const test = [1, 2, 3, 4, 5];

test.forEach((value, index) => {
    console.log({
        value,
        index
    })
});

const squares = test.map((value, index) => {
    return value * value
})

console.log(squares);

const filterdData = test.filter((value, index) => {
    return value % 2 === 0
});

console.log(filterdData);