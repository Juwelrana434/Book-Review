import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import BookDetails from './components/BookDetails/BookDetails';
import Error from './components/Error/Error';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageRead from './components/PagesRead/PageRead';
import BookRead from './components/BookRead/BookRead';
import WishBooks from './components/WishBooks/WishBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
    {
    path: "/",
    element: <Home></Home>
    },
    {
      path: '/book/:bookId',
      element: <BookDetails></BookDetails>,
      loader: () => fetch('/books.json'),
      },
    {
      path: '/ListedBooks',
      element: <ListedBooks></ListedBooks>,
      loader: () => fetch('/books.json'),
      // children
      },
    {
      path: '/page',
      element: <PageRead></PageRead>
      },
    {
      path: '/ListedBooks',
      element: <BookRead></BookRead>,
      // loader: () => fetch('/books.json'),
      },
    {
      path: '/wish',
      element: <WishBooks></WishBooks>,
      loader: () => fetch('/books.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
