// THIS and Arrow function

//in browser global object is window object

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    // console.log(this)  //telling us current context
  },
};

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this) // it will give empty o/p {}

// function chai(){
//     let username ="kumkum"
//     console.log(this.username) //node environment //undefined

// }
// chai() //we can't use this in function

// const chai =function(){
//     let username ="kumkum"
//     console.log(this.username) //node environment //undefined

// }
// chai() //we can't use this in function

// const chai = () =>{ //arrow functions
//     let username ="kumkum"
//     console.log(this.username) //node environment //undefined

// }
// chai() //we can't use this in function

//basic arrow function or explicit
// const addTwo=(num1, num2) =>{
//     return num1+num2;
// }
// console.log(addTwo(3,4))

//implicit return
// const addTwo=(num1, num2) => num1+num2
// console.log(addTwo(3,4))

//implicit return
// const addTwo=(num1, num2) => (num1+num2)
// console.log(addTwo(3,4))

//for returning object
//const addTwo=(num1, num2) => ({username: "kumkum"})
// console.log(addTwo(3,4))
