
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({book}) => {
const {bookId, bookName, author, image, review, totalPages, rating, category, tags,publisher, yearOfPublishing} = book;
    return (
    <Link to={`/book/${bookId}`}><div className="lg:max-w-6xl mx-auto lg:mt-">
    <div className="w-[370px] border border-[#131313] rounded-lg lg:mt-0">
   <div className="p-4 w-[326px] h-[230px] bg-[#F3F3F3] rounded-lg m-auto mt-4" ><img src={book.image} className="p-4 w-[226px] h-[190px] m-auto" /></div>
    <div className="flex justify-start mt-6 p-4"><h1 className="py-2 px-4 rounded-full bg-[#F3F3F3] text-[#23BE0A] font-medium">{book.category[0]}</h1>
    <h1 className="py-2 px-4 rounded-full bg-[#F3F3F3] text-[#23BE0A] font-medium ml-6">{book.category[1]}</h1>
    </div>
    <h1 className="p-4 text-6 font-bold">{book.bookName}</h1>
    <p className="border-b-2 border-dashed py-6 px-4">{book.author}</p>
    <div className="flex justify-between p-4">
    <div>{book.tags[1]}</div>
    <div className="flex items-center"><p className="mr-2">{book.rating}</p><FaRegStar /></div>
    </div>
    </div>
</div></Link>
        
    );
};

export default Book;