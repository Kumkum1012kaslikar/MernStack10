//-------LOOPS-----

//for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

//for loop with array
let arr = ["flash", "batman", "superman"];
for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  console.log(elem);
}

//break and continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`detected 5`);
    break; //stop here
  }
  console.log(`value of i is ${i}`); // not print
}

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`detected 5`); // stop
    continue;
  }
  console.log(`value of i is ${i}`); //print
}

// while loop
let i = 0;
while (i <= 10) {
  console.log(`value of i is${i}`);
  i = i + 2;
}

//while loop with array
let Array = ["flash", "batman", "superman"];
let j = 0;
while (j < Array) {
  console.log(`value is${Array[j]}`);
  j = j + 1;
}

//do while
let score = 1;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 10);

//for of loop

//["","",""]

const arr1 = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//Maps - unique value and ordered
const map = new map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);

for (const key of map) {
  console.log(key);
}

//use this
for (const [key, value] of map) {
  console.log(key, ":- ", value);
}

//for in loop
const obj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};
for (const key in obj) {
  console.log(`${key} shortcut is for ${obj[key]}`);
}

let arr2 = ["flash", "batman", "superman"];
for (const key in arr2) {
  console.log(arr2[key]);
}

//for each loop in function
const coding = ["flash", "batman", "superman"];
coding.forEach(function (val) {
  console.log(val);
});

//for each loop in arrow function
coding.forEach((item) => {
  console.log(item);
});

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//for each loop in declare function
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

//declare object in array
//[{},{},{}]
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
