const listBooks = require('./array')

function findSmaller(pivo, array){
    let smallers = 0;

    for (let actual= 0; actual < array.length; actual++){
        let actualObcject = array[actual]
        if (actualObcject.price < pivo.price){
            smallers++
        }
    }

    changePlace(array, array.indexOf(pivo), smallers)
    return array
}

function changePlace(array, from, to){
    const elem1 = array[from]
    const elem2 = array[to]
    array[to] = elem1
    array[from] = elem2
}

function sliceInPivo(array){
    let pivo = array[Math.floor(array.length / 2)];
    findSmaller(pivo, array);
    let valueSmallers = 0;

    for(let analising = 0; analising < array.length; analising++){
        let actual = array[analising];
        if (actual.price <= pivo.price && actual !== pivo){
            changePlace(array, analising, valueSmallers)
            valueSmallers++;
        }
    }

    return array;
}

//console.log(findSmaller(listBooks[2], listBooks));

console.log(sliceInPivo(listBooks));