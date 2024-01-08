
function apresentation(name) {
    return `my name is ${name}`;
}

// Arrow function
const apresentationArrow = name => `my name is ${name}`
const sum = (n1,n2) => n1 + n2;

console.log(apresentationArrow("Rafael"))
console.log(sum(1,2))

const sumSmallNumbers = (n1,n2) => {
    if (n1 > 10 || n2 > 10){
        return "only numbers beteween 1 and 9"
    } else{
        return n1 + n2
    }
}


