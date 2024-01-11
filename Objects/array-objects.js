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
]

client.adress.push({  // using array metod push()
    street: "R. Joseph cleber",
    number: 404,
    apartament: false,
});

const arrayOlyApartaments = client.adress.filter( // using array metod filter()
    (adress) => adress.apartament === true
)

console.log(client.adress)
console.log(arrayOlyApartaments)
