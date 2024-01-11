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

function callClient(telComercial, telResidential){
    console.log(`Calling to ${telComercial}`)
    console.log(`Calling to ${telResidential}`)
};

callClient(...client.tel); // ...spread

const order = {
    addressee: client.name,
    ...client.adress[0] // using spread for all the proprieties in the adress client stay into the object order
}

console.log(order)