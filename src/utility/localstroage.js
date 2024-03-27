const getStoredReadBooks = () => {
const storedReadBooks = localStorage.getItem('read-books');
if (storedReadBooks) {
return JSON.parse(storedReadBooks);
}
return [];

};
const readBooks =bookId => {
const storedReadBooks = getStoredReadBooks();
const exists = storedReadBooks.find(booksId => booksId === bookId);
if (!exists){
storedReadBooks.push(bookId);
localStorage.setItem('read-books', JSON.stringify(storedReadBooks));

}
};
export { readBooks, getStoredReadBooks}