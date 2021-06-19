/**
 * Template Strings
 */

const userName = "Kumar";
const pageName = "DashBoard";
const DisplayDeatails = "Logged In User is : " + userName;
const willComeToPage = "Welcome " + userName + " to " + pageName;

console.log(DisplayDeatails);
console.log(willComeToPage);

console.log(`Logged In User is : ${userName}`);
console.log(`Welcome ${userName} to ${pageName}`);

/**
 * Destruction
 */

const user = {
    name: "Kumar",
    password: "test",
    address: {
        location: "Kadapa",
        pincode: "516002"
    }
};

const { name: userName2, test, password = "No Pass", test2 = "default", address: { pincode } } = user;

console.log({
    userName2,
    test,
    password,
    test2,
    pincode
})

const arr = [1, 2, 3, 4, 5];

const [first, , third, ...rest] = arr

console.log({
    first,
    third,
    rest
})

/**
 * Spread Operater
 */

const a = { name: "Kumar", password: "12345", address: { pincode: "516002" } };
const b = {...a, password: "6789", address: {...a.address } }

b.test = "tester";
b.address.pincode = "516003"

console.log({
    a,
    b
});

const arr2 = [...arr, 100]

console.log(arr2);