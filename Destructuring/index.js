const pairNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5]

const numbers = [...pairNumbers, ...oddNumbers] //destructuring

const [num1, num2, ...otherNumbers] = [1, 2, 3, 4, 5] //destructuring

const [name1 = 'ju'] = []  //the value is 'ju' When the parameter is null

const person = {
    name: 'Ju',
    age: 25
}

const personWithTel = {...person, tel: 12332232}

const { name } = person // other way to do 


function printDatas({name, age}){ //destructuring
    console.log(name, age)
}

console.log(numbers)
console.log(num1, num2)
console.log(personWithTel)
printDatas(person)
