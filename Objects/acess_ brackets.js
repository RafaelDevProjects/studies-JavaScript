const client = {
    name: "Rafael",
    years: 19,
    cpf: "1233232323232",
    email: "rarara@gmail.com"
};

console.log(`The name of the client is ${client["name"]} and he have ${client["years"]} years old.`); // using brackets

const keys = ["name", "years", "cpf", "email", 'height'];

keys.forEach( (chave) => console.log(`The key is ${chave} have the value ${client[chave]}`))
