import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { readBooks } from "../../utility/localstroage";
import { WishBook } from "../../utility/localstroage";


const BookDetails = () => {
  const books = useLoaderData();
  // console.log(books)
  const { bookId } = useParams();
  // console.log(bookId)
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  //   console.log(book);
  // readBooks(bookId);
  // toast('Read book successfully')
  const [read, setRead] = useState([]);

  const readHandler = (f) => {
    readBooks(idInt);
    // toast("Read add book successfully")
    let isExist = books.find((book) => book.bookId === idInt);
    if (!isExist){
      toast.error("Already added read book")
      }else{
      toast("Read add book successfully")
      }
    
    };
  const wishHandler = (F) => {
    WishBook(idInt);
    let isExist = books.find((book) => book.bookId === idInt);
    if (isExist){
      toast("Wish list add book successfully")
      }else{
      toast.error("Already added wish list")
      }
    
    }

    // let isExist = books.find((book) => book.bookId === f.idInt);
    // if (!isExist){
    // setRead([...books, f]);

    // // console.log(read);
    // } else  {
    //     alert("Book already read");
    //      isExist = false;
    //   }
  
  return (
    <div className="lg:max-w-6xl mx-auto mt-4 overflow-y-hidden">
      <div className="grid lg:grid-cols-2 gap-6 min-h-[calc(100vh-300px)]">
        <div className="bg-[#F3F3F3]">
          <img src={book.image} className="m-auto p-10" />
        </div>
        <div>
          <h1 className="py-2 lg:text-[40px] text-2xl font-bold">{book.bookName}</h1>
          <p className="py-2 text-xl font-medium">By :{book.author}</p>
          <p className="border-y-2  border-[#e5dddd] solid py-2 text-xl font-medium">
            {book.category[0]}
          </p>
          <p>
            <span className="text-xl font-medium">Review :</span> {book.review}
          </p>
          <div className="flex justify-start mt-6 items-center border-[#F3F3F3] border-b-2 solid pb-6">
            <h1 className="mr-4 text-xl font-medium">Tags</h1>
            <h1 className="py-2 px-4 rounded-full bg-[#F3F3F3] text-[#23BE0A] font-medium">
              #{book.tags[0]}
            </h1>
            <h1 className="py-2 px-4 rounded-full bg-[#F3F3F3] text-[#23BE0A] font-medium ml-6">
              #{book.tags[1]}
            </h1>
          </div>
          <div className="flex justify-start my-4">
            <h1 className="mr-10 text-[#131313B3]">Number of Pages:</h1>
            <h1 className="font-semibold">{book.totalPages}</h1>
          </div>
          <div className="flex justify-start my-4">
            <h1 className="mr-24 text-[#131313B3]">Publisher:</h1>
            <h1 className="font-semibold">{book.publisher}</h1>
          </div>
          <div className="flex justify-start my-4">
            <h1 className="mr-10 text-[#131313B3]">Year of Publishing:</h1>
            <h1 className="font-semibold">{book.yearOfPublishing}</h1>
          </div>
          <div className="flex justify-start my-4">
            <h1 className="mr-28 text-[#131313B3]">Rating:</h1>
            <h1 className="font-semibold">{book.rating}</h1>
          </div>
          <div>
          {/* <Link to={`/read/${bookId}`}><button
              className="border-2 py-4 px-6 border-[#c0b1b1] rounded-lg mr-6 font-bold"
            >
              Read
            </button></Link> */}
          
            <button
              className="border-2 py-4 px-6 border-[#c0b1b1] rounded-lg mr-6 font-bold hover:bg-[#53eb67]"
              onClick={readHandler}
            >
              Read
            </button>
            <button className="border-2 py-4 px-6 border-[#c0b1b1] rounded-lg font-bold text-white bg-[#50B1C9]" onClick={wishHandler}>
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
