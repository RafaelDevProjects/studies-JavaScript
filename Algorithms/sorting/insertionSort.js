const books = require ('../list-books')

function insertionSort(list) {
    for (let actual = 0; actual < list.length; actual++){
        let analise = actual;
        while (analise > 0 && list[analise].price < list[analise-1].price){
            let itemAnalise = list[analise];
            let beforeItem = list[analise-1];

            list[analise] = beforeItem
            list[analise - 1] = itemAnalise 
 
            analise--
        }

    }


    console.log(list)

}

insertionSort(books)