import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstroage";
import BookRead from './../BookRead/BookRead';
import { CiBookmark } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";


const ListedBooks = () => {
  
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
            // toast('"already read')
        }
      }
      //   console.log(readBook, books);
      setListRead([...readBook]);
      // console.log(listRead);
    }
  }, []);
  
  return (
    <div>
      <h1 className="text-2xl font-bold bg-[#f2f4f6] text-center lg:max-w-6xl mx-auto p-6 my-4">
        Books
      </h1>
      <div className="flex border-b-2 pb-1 max-w-6xl mx-auto">
      <button className="tab-active mr-4 flex"><NavLink className={({isActive }) => isActive ? 'text-[#0b0b0b] border border-[#0b0b0b]' : ' text-black'} to='/read'> <CiBookmark  className="inline-block"/>Read Book</NavLink></button>
    <li className="list-none"><NavLink className={({isActive }) => isActive ? 'text-[#0b0b0b] border border-[#0b0b0b]' : ' text-black'} to='/wish'>Wishlist Books</NavLink></li>
      </div>
      <div className="m-4">
      {
      
      // listRead.map(book => <li key={book.bookId}><span>{book.bookName}</span></li>)
      listRead.map((book) =>(<BookRead bookName={book}></BookRead>))
      }
      
      
      </div>
    </div>
    
  );
};

export default ListedBooks;
