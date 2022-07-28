import React from 'react'
import Book from './Book'
import propTypes from "prop-types";

const Results = (props) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {props.NewBook && props.NewBook.length > 0 && props.NewBook.map((book) =>
                    <li key={book.id}>
                        <Book book={book} updateShelf={props.updateShelf} />
                    </li>
                )}
            </ol>
        </div>
    )
}
Results.propTypes = {
    updateShelf: propTypes.func.isRequired
  }
export default Results