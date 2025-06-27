import HttpClient from "./httpClient/httpClient";
import { useEffect, useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";


const App = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  // Fetch books from API
  const getBooks = () => {
    setLoading(true);
    HttpClient.get("/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(getBooks, []);

  // Add book and refresh list from backend to get correct IDs
  const addBook = (book) => {
    HttpClient.post("/books", book)
      .then(() => getBooks())
      .catch((error) => console.log(error));
  };

  // Delete book and refresh list from backend
  const deleteBook = (id) => {
    HttpClient.delete(`/books/${id}`)
      .then(() => getBooks())
      .catch((error) => console.log(error));
  };

  // Filter books by title or author
  const filteredBooks = books.filter(
    (book) =>
      (book.title && book.title.toLowerCase().includes(filter.toLowerCase())) ||
      (book.author && book.author.toLowerCase().includes(filter.toLowerCase()))
  );

  const updateBook = (id, updatedBook) => {
    // update UI
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedBook } : book
      )
    );

    // Update server
    HttpClient.put(`/books/${id}`, updatedBook)
      .then(() => getBooks())
      .catch((error) => console.log(error));
  };
  return (
    <>
      <input
        type="text"
        placeholder="Filter by title or author"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          margin: "24px auto 0 auto",
          display: "block",
          padding: "10px",
          width: "320px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      {loading ? (
        <div
          style={{ textAlign: "center", margin: "32px", fontSize: "1.2rem" }}
        >
          Loading...
        </div>
      ) : (
        <>
          <BookForm onAddBook={addBook} />
          <BookList books={filteredBooks} onDeleteBook={deleteBook} onUpdate={updateBook}/>
        </>
      )}
    </>
  );
};

export default App;
