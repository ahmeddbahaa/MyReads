import React from 'react'
import Book from './Book'
import propTypes from 'prop-types'

const Shelf= (props)=> {
    const shelf = props.books.filter((Book)=> Book.shelf === props.type)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                   {shelf.map((book)=>
                   <li key={book.id}>
                        <Book book={book} updateShelf={props.updateShelf}/>
                    </li>
                   )}
                </ol>
            </div>
        </div>
    )
}
Shelf.propTypes = {
    books: propTypes.array.isRequired,
    title: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    updateShelf: propTypes.func.isRequired
}
export default Shelf