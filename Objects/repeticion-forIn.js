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

for (let key in client){
    let type = typeof client[key];
    if (type !== 'object' && type !== "function"){
        console.log(`the key ${key} has the value: ${client[key]}`)
    }
}