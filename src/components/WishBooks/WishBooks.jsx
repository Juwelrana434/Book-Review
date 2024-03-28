import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { getStoredWishBooks } from "../../utility/localstroage";

const WishBooks = () => {
    const [listWish, setListWish] = useState([]);
    const wishs = useLoaderData();
    useEffect(() => {
      const storedWishIds = getStoredWishBooks();
      if (wishs.length > 0) {
        // const boookRead = books.filter(book =>)
        const wishBook = [];
        for (const wishId of storedWishIds) {
          let wish = wishs.find(wish => wish.wishId === wishId);
          if (wish) {
            wishBook.push(wish);
              console.log(wishBook);
          }
        }
        //   console.log(readBook, books);
        setListWish([wishBook]);
        console.log(listWish);
        setListWish([...listWish]);
      }
    }, []);
    return (
        <div>
           <h1>my name</h1>
        </div>
    );
};

export default WishBooks;