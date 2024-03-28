import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBooks } from "../../utility/localstroage";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";

const WishBooks = () => {
  const [listWish, setListWish] = useState([]);
  console.log(listWish);
  const wishs = useLoaderData();
  console.log(wishs);
  useEffect(() => {
    const storedWishIds = getStoredWishBooks();
    console.log(storedWishIds);
    
    if (storedWishIds.length > 0) {
   
    
      const wishBook = [];
      for (const wishId of storedWishIds) {
        const wish = wishs.find(wish => wish.bookId
          == wishId);
        if (wish) {
          wishBook.push(wish);
         
          setListWish([...wishBook]);
          
        }
     
      }
     
      
      
    }
  }, [wishs]);
  return (
    <div>
      {
       listWish.map(bookName => <div key={bookName.bookId} className="border-2 border-[#1313] rounded-lg my-6 flex max-w-6xl mx-auto">
       <div className="m-4 w-[230px] h-[230px] bg-[#1313130D]">
         <img
           src={bookName.image}
           className="w-[155px] h-[180px] px-[30px] py-[25px] m-auto"
         />
       </div>
       <div className="m-4">
         <h1 className="text-xl font-bold">{bookName.bookName}</h1>
         <h1>By :{bookName.author} </h1>
         <div className="flex justify-start mt-6 items-center">
           <h1 className="mr-4 text-xl font-medium">Tags</h1>
           <h1 className="py-2 px-4 rounded-full bg-[#F3F3F3] text-[#23BE0A] font-medium">
             #{bookName.tags[0]}
           </h1>
           <h1 className="py-2 px-4 rounded-full bg-[#F3F3F3] text-[#23BE0A] font-medium ml-6">
             #{bookName.tags[1]}
           </h1>
           <h1>
             {" "}
             <CiLocationOn className="inline-block mr-4" /> year Of Publishing
             {bookName.yearOfPublishing}
           </h1>
         </div>
         <div className="flex border-[#F3F3F3] border-b-2 solid pb-2"><h1><HiOutlineUsers  className="inline-block"/></h1>
         <h1 className="ml-2 mr-4">Publisher: {bookName.publisher}</h1><h1><MdOutlineContactPage className="inline-block mr-2"/></h1><h1>Page {bookName.totalPages}</h1></div>
         <div><button className="rounded-3xl text-[#328EFF] px-2 py-[2px] my-2 bg-[#b5d2f5]">Catagory : {bookName.category[1]} </button>
         <button className="rounded-3xl text-[#e2ab35] px-2 py-[2px] my-2 bg-[#f2ebd8] mx-2">Rating : {bookName.rating} </button>
         <button className="rounded-3xl text-[#fff] px-2 py-[2px] my-2 bg-[#2dd23d]">View Details</button></div>
       </div>
     </div>)
     
      }
      <h1>my name</h1>
    </div>
  );
};

export default WishBooks;
