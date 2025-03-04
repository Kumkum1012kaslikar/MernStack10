//object1

//singleton

//object literals
//Object.create

const mySym = symbol("key1");

const JsUser = {
  name: "Kumkum",
  "full name": "Kumkum Kaslikar",
  [mySym]: "myKey1",
  age: 18,
  location: "Jaipur",
  email: "kumkum@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log([mySym]);

JsUser.email = "hitesh@chatgpt.com";
Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());