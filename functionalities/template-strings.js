const name = "user";
const age = 23
const city = "São Paulo"

// Not good way to do

const apresentation = "my name is " + name + ", I have " + age + " years old" + " and I was born in " + city;
console.log(apresentation)


//template String

const goodApresentation = `my name is ${name}, i have ${age} years old and i was born in ${city}`

console.log(goodApresentation)