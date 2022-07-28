import React from 'react'
import propTypes from 'prop-types'

const ShelfUpdate = (props) => {

    const handleChange = (event) => {
        const effect = event.target.value
        props.updateShelf(props.book, effect)
    }
    return (
        <div className="book-shelf-changer">
            <select value={props.book.shelf ? props.book.shelf : 'null'}
                onChange={handleChange}
            >
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="null">None</option>
            </select>
        </div>
    )
}
ShelfUpdate.propTypes = {
    book: propTypes.object.isRequired,
    updateShelf: propTypes.func.isRequired
}
export default ShelfUpdate