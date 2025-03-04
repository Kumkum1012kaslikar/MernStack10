//global and local scope

//global scope
let a = 10;
const b = 20;
var c = 30;

//block scope
if (true) {
  let a = 300;
  const b = 20;
  var c = 30;
  console.log("INNER :", a);
}

// for (let i = 0; i < Array.length; i++) {
//   const element = array[i];
// }
console.log(a);
console.log(b);
console.log(c);

function one() {
  const username = "histesh";

  function two() {
    const website = "youtube";
    //console.log(username);
  }
  // console.log(website) //not accessible

  two();
}
one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website);
  }
  //console.log(website);  //not accessible
}
//console.log(username);   //not accessible

// ++++++++++++INTERESTING++++++++++++++++

//function

function add_one(num) {
  return num + 1;
}
add_one(5);

//function or expression
const add_Two = function (num) {
  return num + 2;
};
add_Two(5);
