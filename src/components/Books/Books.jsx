import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch("books.json")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, []);
    return (
        <div>
            <h1 className="text-[40px] text-center font-bold m-6">Books</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 m-auto lg:max-w-6xl mx-auto">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
        </div>
    );
};

export default Books;