const listBooks = require('./array')


function mergeSort(array){

    if (array.length > 1){
        const midle = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, midle));
        const part2 = mergeSort(array.slice(midle, array.length));
        array = sort(part1, part2);
    }

    return array;
}

function sort (part1, part2){
    let actualPosicionPart1 = 0
    let actualPosicionPart2 = 0
    const result = []

    while(actualPosicionPart1 < part1.length && actualPosicionPart2 < part2.length){
        let actualProductPart1 = part1[actualPosicionPart1]
        let actualProductPart2 = part2[actualPosicionPart2]

        if (actualProductPart1.price < actualProductPart2.price){
            result.push(actualProductPart1)
            actualPosicionPart1++;
        } else{
            result.push(actualProductPart2)
            actualPosicionPart2++;
        }
    }
    return result.concat(actualPosicionPart1 < part1.length ? part1.slice(actualPosicionPart1) : part2.slice(actualPosicionPart2))

}

console.log(mergeSort(listBooks));