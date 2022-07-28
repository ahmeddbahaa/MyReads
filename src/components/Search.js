import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import { search } from '../BooksAPI'
import Results from './Results'

const Search = (props) => {

    const [query, setquery] = useState('')
    const [ReturnBook, setReturnBook] = useState([])

    const getQuery = (event) => {
        const query = event.target.value
        setquery(query)
        search(query).then((Return) => {
            setReturnBook(Return)
        })
    }

    const NewBook = ReturnBook && ReturnBook.length > 0
        && ReturnBook.map((Return) => {
            props.books.map((book) => {
                if (book.id === Return.id) {
                    Return.shelf = book.shelf
                }
                return book
            })
            return Return
        })
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={getQuery}
                    />
                </div>
            </div>
            <Results NewBook={NewBook} updateShelf={props.updateShelf} />
        </div>
    )
}
Search.propTypes = {
    books: propTypes.array.isRequired,
    updateShelf: propTypes.func.isRequired
}
export default Search