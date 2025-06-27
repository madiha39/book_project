import React from "react";
import "./Book.css";

const Book = (props) => {
  if (!props.books || props.books.length === 0) {
    return <div className="books-container">No books available.</div>;
  }

  return (
    <div className="books-container">
      {props.books.map((book) => (
        <div className="book-card" key={book.id || book.title}>
          <h2 className="book-title">{book.title}</h2>
          <h3 className="book-author">{book.author}</h3>
          <h2 className="book-price">${book.price}</h2>
          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <button
              className="delete-btn"
              onClick={() => props.onDeleteBook && props.onDeleteBook(book.id)}
            >
              Delete
            </button>
            <button
              className="update-btn"
              onClick={() => props.onUpdateBook && props.onUpdateBook(book)}
            >
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
