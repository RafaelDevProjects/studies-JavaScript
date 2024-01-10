const client = {
    name: "Rafael",
    years: 19,
    cpf: "1233232323232",
    email: "rarara@gmail.com"
};

console.log(`The name of the client is ${client.name} and he have ${client.years} years old.`);

console.log(`The 3 first digits of CPF are ${client.cpf.substring(0, 3)}`);