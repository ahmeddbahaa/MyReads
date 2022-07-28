import React from 'react'
import ShelfUpdate from './ShelfUpdate'
import propTypes from 'prop-types'

const Book = (props) => {
    return (
        <div className="book">
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.thumbnail : 'Cover Error'})`
                        }}
                    ></div>
                    <ShelfUpdate book={props.book} updateShelf={props.updateShelf} />
                </div>
                <div className="book-title">{props.book.title ? props.book.title : ''}</div>
                <div className="book-authors">{props.book.authors ? props.book.authors : ''}</div>
            </div>
        </div>
    )
}
Book.propTypes = {
    book: propTypes.object.isRequired,
    updateShelf: propTypes.func.isRequired
}
export default Book