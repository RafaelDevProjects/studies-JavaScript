const {edGalho, edFolha} = require('./arrays');

function concatLists(list1, list2){
    let finalList = {};
    let actualPosicionList1 = 0;
    let actualPosicionList2 = 0;
    let actual = 0;

    while (actualPosicionList1 < list1.length && actualPosicionList2 < list2.length){
        let productActualList1 = list1[actualPosicionList1];
        let productActualList2 = list2[actualPosicionList2];
        if (productActualList1.price < productActualList2.price){
            finalList[actual] = productActualList1;
            actualPosicionList1++;
        } else{
            finalList[actual] = productActualList2
            actualPosicionList2++;
        }
        actual++
    }

    while(actualPosicionList1 < list1.length){
        finalList[actual] = list1[actualPosicionList1];
        actualPosicionList1++;
        actual++
    }

    while(actualPosicionList2 < list2.length){
        finalList[actual] = list2[actualPosicionList2];
        actualPosicionList2++;
        actual++
    }


    return finalList
}

console.log(concatLists(edFolha, edGalho))