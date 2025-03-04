// Strings

const name = "hitesh";
const repoCount = 50;

//not recommended
//console.log(name + repoCount + "value");

// `` = string interpolation
console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);

const gameName = new String("kaslikar-ch-com");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherNewString = gameName.slice(-8, 4);
console.log(anotherNewString);

const newStringOne = "    kaslikar    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kaslikar.com%20";

console.log(url.replace("%20", "-"));
console.log(url.includes("kum"));
console.log(gameName.split("-"));
