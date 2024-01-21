const books = require('../../list-books')

function menorValor(arrProducts, startPosicion) {
    let moreCheap = startPosicion;

    for (let actual = 0; actual < arrProducts.length; actual++){
        if (arrProducts[actual].price < arrProducts[moreCheap].price){
            moreCheap = actual
        }   
    }
    return moreCheap
}

module.exports = menorValor;
