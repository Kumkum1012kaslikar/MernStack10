//--truthy/ falsy value--

const userEmail = "kaslikarkumkum@gmail.com";
//const userEmail= []
if (userEmail) {
  console.log("Got use email");
} else {
  console.log("Don't have user email");
}

//--falsy value--
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//--truthy values--
//"0", "false", " ", [], {}, function(){}

//---how to check empty or not--
if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}
