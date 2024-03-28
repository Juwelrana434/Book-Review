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
const getStoredWishBooks = () => {
    const storedWishBooks = localStorage.getItem('wish-books');
    if (storedWishBooks) {
    return JSON.parse(storedWishBooks);
    }
    return [];
    
    };
    const WishBook =wishId => {
        const storedWishBooks = getStoredWishBooks();
        const exists = storedWishBooks.find(wishsId => wishsId === wishId);
        if (!exists){
        storedWishBooks.push(wishId);
        localStorage.setItem('wish-books', JSON.stringify(storedWishBooks));
        
        }
        };
export { readBooks, getStoredReadBooks, getStoredWishBooks, WishBook}