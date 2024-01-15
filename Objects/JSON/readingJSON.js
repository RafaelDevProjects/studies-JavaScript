const datas = require("./clients.json");

console.log(datas);
console.log(typeof datas);

const clientString = JSON.stringify(datas)  // transform in String

console.log(clientString)
console.log(typeof clientString);

const objectClient = JSON.parse(clientString); // transform in Object

console.log(objectClient)