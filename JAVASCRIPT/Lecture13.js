//Function

function sayMyName() {
  console.log("k");
  console.log("u");
  console.log("m");
  console.log("k");
  console.log("u");
  console.log("m");
}

//reference
//sayMyName

//execute
//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){
//     let result= (number1 + number2);
//     return result;

//}

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log("result:", result);

function loginUserMessage(username) {
  // if(username == undefined)
  if (!username) {
    console.log("Please entr a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("kumkum"));

console.log(loginUserMessage());



// function calculateCartPrice(...num1){
//   return num1;
// }

function calculateCartPrice(val1, val2, ...num1){
    return num1;
   }
console.log(calculateCartPrice(200, 400, 500, 2000))

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
  username: "sam",
  price:399
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 100, 900, 800]));

