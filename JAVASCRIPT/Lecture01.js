//Variables

const accountID = 166543; //constant and value cannot change
let accountEmail = "hitesh@gmail.com"; //good practice
var accountPassword = "11234"; // prefer not to use var bcz of issue in block scope and functional scope
accountCity = "jaipur"; //not good practice

//accountID = 2; //we cannot change it bcz accid is constant
accountEmail = "kjh@gmail.com";
accountPassword = "123234";
accountCity = "Bengaluru";

console.table([accountID, accountEmail, accountPassword, accountCity]);
