import React from "react";

const BookList = (props) => {
  return (
    <div className="books-container">
      {props.books.map((book) => (
        <div className="book-card" key={book.id || book.title}>
          <h2 className="book-title">{book.title}</h2>
          <h3 className="book-author">{book.author}</h3>
          <h2 className="book-price">{book.price}</h2>
          <button
            onClick={() => props.onDeleteBook(book.id)}
            style={{
              background: "#e53e3e",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
