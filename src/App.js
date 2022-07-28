import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom"
import {getAll, update} from './BooksAPI'

function App() {
  const [books, setbook] = useState([]);

  const getBooks = async () => {
    const res = await getAll()
    setbook(res)
  };
  const updateShelf = (book, shelf) => {

    if (books.includes(book)) {
      book.shelf = shelf
    } 
    else {
      books.concat(book)
      book.shelf = shelf
    }
    update(book, shelf)

    setbook(books)
    
    getBooks()
  }

  useEffect(() => {
    getBooks()
  },
    [])

  return (
    <div className="app">
      <Routes>

        <Route 
          path='/' 
            element={<Home books={books} updateShelf={updateShelf} />} />

        <Route 
          exat 
            path='/search' 
              element={<Search books={books} updateShelf={updateShelf}  />} />
      </Routes>
    </div>
  );
}

export default App;
