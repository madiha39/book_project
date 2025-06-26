import HttpClient from "./httpClient/httpClient";
import { useEffect, useState } from "react";
import "./App.css"; // Import the CSS file
import BookForm from "./components/BookForm";

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
  return (
    <>
      <BookForm />
      <div className="books-container">
        {books.map((book) => (
          <div className="book-card" key={book.id || book.title}>
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">{book.author}</h3>
            <h2 className="book-price">{book.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
