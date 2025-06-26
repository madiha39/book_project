import React from 'react'

const BookForm = () => {
  return (
    <>
      <form>
          <div>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" />
          </div>
          <div>
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" name="author" />
          </div>
          <div>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" />
          </div>
          <button type="submit">Add Book</button>
      </form>
      <div>BookForm</div>
    </>
  )
}

export default BookForm