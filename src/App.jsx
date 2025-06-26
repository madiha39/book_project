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
  return (
    <>
      <BookForm />
      <BookList books={books} />
    </>
  );
};

export default App;
