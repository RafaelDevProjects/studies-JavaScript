const books = require ('./list-books');
const menorValor = require('./menorValor');

for (let actual = 0 ;actual < books.length - 1; actual++){
    let index = menorValor(books, actual);

    let actualBook = books[actual];
    let bookSmallerPrice = books[index];

    books[actual] = bookSmallerPrice
    books[index] = actualBook
}

console.log(books);