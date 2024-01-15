const clients = require("./clients.json");

function findValue(list, key, value){
    return list.find((item) => item[key].includes(value))
}

console.log(findValue(clients, "nome", "Amye"))
console.log(findValue(clients, "telefone", "19918820860"))