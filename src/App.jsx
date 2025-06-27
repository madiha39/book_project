import HttpClient from "./httpClient/httpClient";
import { useEffect, useState } from "react";
import "./App.css"; // Import the CSS file
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    HttpClient.get("/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(getBooks, []);
  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const deleteBook = (id) => {
    HttpClient.delete(`/books/${id}`)
      .then(() => {
        setBooks(books.filter((book) => book.id !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDeleteBook={deleteBook} />
    </>
  );
};

export default App;
