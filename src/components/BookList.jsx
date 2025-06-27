import React from "react";

const BookList = (props) => {
  return (
    <div>
      <h2>Book List</h2>
      <div className="books-container">
        {props.books && props.books.length > 0 ? (
          props.books.map((book) => (
            <div
              className="book-card animated-card"
              key={book.id || book.title}
            >
              <span className="book-emoji" role="img" aria-label="book">
                📚
              </span>
              <h2 className="book-title">{book.title}</h2>
              <h3 className="book-author">{book.author}</h3>
              <h2 className="book-price">${book.price}</h2>
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  className="delete-btn"
                  onClick={() => props.onDeleteBook(book.id)}
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
          ))
        ) : (
          <div>No books available.</div>
        )}
      </div>
    </div>
  );
};

export default BookList;
