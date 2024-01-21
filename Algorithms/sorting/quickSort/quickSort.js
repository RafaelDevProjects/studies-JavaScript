const listBooks = require('./array')

function findSmaller(pivo, array){
    let smallers = 0;

    for (let actual= 0; actual < array.length; actual++){
        let actualObcject = array[actual]

        if (actualObcject.price < pivo.price){
            smallers++
        }
    }

    changePlace(array, array.indexOf[pivo])
}

function changePlace(array, from, to){
    const elem1 = array[from]
    const elem2 = array[to]

    array[to] = elem1
    array[from] = elem2
}

console.log(findSmaller(listBooks[2], listBooks));