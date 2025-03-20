//Immediately invoked function expression (IIFE)

//if we don't want to pollute our global scope
//() definition () execution
(function chai() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

(() => {
  console.log(`DB CONNECTED TWO`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("kumkum");
