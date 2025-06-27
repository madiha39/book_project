import React from "react";
import { useState } from "react";
import HttpClient from "../httpClient/httpClient";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const reset = () => {
    setTitle("");
    setAuthor("");
    setPrice(0);
  };
  const handleNameChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(+e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      price,
    };
    onAddBook(book);
    reset();
    // You can handle the book object here, e.g., send to API or update state
    HttpClient.post("/books", book)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            onChange={handleNameChange}
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            value={author}
            onChange={handleAuthorChange}
            type="text"
            id="author"
            name="author"
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            value={price}
            onChange={handlePriceChange}
            type="number"
            id="price"
            name="price"
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <div>BookForm</div>
    </>
  );
};
const formStyle = {
  maxWidth: "400px",
  margin: "30px auto",
  padding: "24px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background: "#fafafa",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "6px 0 16px 0",
  border: "1px solid #bbb",
  borderRadius: "4px",
  fontSize: "1rem",
};

const labelStyle = {
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
};

const buttonStyle = {
  background: "#1976d2",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
};

// Wrap the form with a styled div and apply styles to inputs and button
const StyledBookForm = () => (
  <div style={formStyle}>
    <form>
      <div>
        <label htmlFor="title" style={labelStyle}>
          Title:
        </label>
        <input type="text" id="title" name="title" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="author" style={labelStyle}>
          Author:
        </label>
        <input type="text" id="author" name="author" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="price" style={labelStyle}>
          Price:
        </label>
        <input type="number" id="price" name="price" style={inputStyle} />
      </div>
      <button type="submit" style={buttonStyle}>
        Add Book
      </button>
    </form>
  </div>
);

// Replace the original BookForm export with the styled version
export default BookForm;
