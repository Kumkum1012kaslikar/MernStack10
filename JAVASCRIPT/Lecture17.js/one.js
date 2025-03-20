//control flow

const isUserLoggedIn = true;
const temperature = 41;
if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}
console.log("Execute");

// === strict equal = data type check
//===, !== , ==, !=, <, >, >=, <=

const score = 200;
if (score > 100) {
  //**use let or const */
  const power = "fly";
  console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);

//short hand notation(not preferable)
if (balance > 500) console.log("test"), console.log("test2");

//nested loop
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

//AND OR
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

//Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20
console.log(val1);

//--Ternary operator--

//Condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
