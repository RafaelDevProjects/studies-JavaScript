const client = {
    name: "Joao",
    years: 24, 
    email: 'joao@gmail.com',
    tel: ["11 953535350", "11 213212150"] // Array
};

client.adress = [  // object in array
    {             
    street: "R.Lawrence walace",
    number: 123,
    apartament: true,
    complement: "ap 924" 
    }
];

const keysObjects = Object.keys(client);

console.log(keysObjects);

if (!keysObjects.includes("adress")){
    console.error("Erro. É necessario ter um endereço cadastrado")
}