const books = require('./list-books')

const priceBooks =[25, 15, 30, 50, 45, 20]

let moreCheap = 0;

for (let actual = 0; actual < books.length; actual++){
    if (books[actual].price < books[moreCheap].price){
        moreCheap = actual
    }
}

console.log(books[moreCheap].title + ':' + books[moreCheap].price)
