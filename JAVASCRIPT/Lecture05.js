//datatypes

//Primitive
// 7 types //call by value
// String, Number, Boolean, null, undefined,symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//value is not same of id and anotherId bcz symbol gives unique identity

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false

const bigNumber = 23456789n;

//Non-primitive(reference type )
//Array, objects, functions

const heroes = ["shaktiman", "naagraj", "doga"]; //array

let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World");
};

//type of

console.log(typeof bigNumber); // bigInt
console.log(typeof heroes); //object
console.log(typeof myFunction); //function or object function
console.log(typeof outsideTemp); //object
console.log(typeof scoreValue); // number
console.log(typeof anotherId); //symbol

//+++++++++++++++++++++++++++++

//https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack(primitive)- call bu value - copy
//  heap(Non-Primitive) - call by reference - original memory space

//primitive- call by value
let myYoutubeName = "kumkumkaslikar";
let anotherName = myYoutubeName;
anotherName = " kumkummie";

console.log(anotherName); //kumkummie
console.log(myYoutubeName); //kumkumkaslikar

//Non-Primitive - call by reference
let user1 = {
  email: "kumkumpawar1012@gmail.com",
  upi: "kujm@jn",
};

let user2 = user1;
user2.email = "kaslikarkumkum@gmail.com";

console.log(user1.email); //kaslikarkumkum@gmail.com
console.log(user2.email); //kaslikarkumkum@gmail.com
