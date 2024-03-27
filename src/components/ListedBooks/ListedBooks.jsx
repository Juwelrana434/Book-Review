import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstroage";
import BookRead from './../BookRead/BookRead';


const ListedBooks = () => {
  // console.log(book);
  //     const books = useLoaderData();
  //     // console.log(books)
  // const { bookId } = useParams();
  //     // console.log(bookId)
  // const idInt = parseInt(bookId);
  //     const book = books.find((book) => book.bookId === idInt);
  //   //   console.log(book);
    const [read, setRead] = useState([]);
  const [listRead, setListRead] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const storedBookIds = getStoredReadBooks();
    if (books.length > 0) {
      // const boookRead = books.filter(book =>)
      const readBook = [];
      for (const bookId of storedBookIds) {
        const book = books.find(book => book.bookId === bookId);
        if (book) {
          readBook.push(book);
            console.log(readBook);
        }
      }
      //   console.log(readBook, books);
      setListRead(readBook);
      console.log(listRead);
    }
  }, []);
  const readHandler = (f) => {
    let isExist = books.find((book) => book.bookId === f.idInt);
    if (!isExist) {
      setRead([...books, f]);
      //   console.log(read);
    } else {
      alert("Book already read");
      isExist = false;
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold bg-[#f2f4f6] text-center lg:max-w-6xl mx-auto p-6 my-4">
        Books
      </h1>
      <div className="flex border-b-2 pb-1">
      <li className="list-none mr-4"><NavLink className={({isActive }) => isActive ? 'text-[#0b0b0b] border border-[#0b0b0b]' : ' text-black'} to='/read'>Read Book</NavLink></li>
    <li className="list-none"><NavLink className={({isActive }) => isActive ? 'text-[#0b0b0b] border border-[#0b0b0b]' : ' text-black'} to='/wish'>Wishlist Books</NavLink></li>
      </div>
      <div>
      {
      
      listRead.map(book => <li key={book.bookId}><span>{book.title}</span></li>)
      // listRead.map((book) =>(<BookRead bookName={book}></BookRead>))
      }
      
      
      </div>
    <h1>{listRead.title}</h1>
    </div>
    
  );
};

export default ListedBooks;
