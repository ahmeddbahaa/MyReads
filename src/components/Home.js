import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const Home = (props) => {
  const ShelfType = [
    { title: 'Currently Reading', type: 'currentlyReading' },
    { title: 'Want to Read', type: 'wantToRead' },
    { title: 'Read', type: 'read' }
  ]
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {ShelfType.map((shelf) =>
        <div className="list-books-content" key={shelf.type}>
          <Shelf books={props.books} title={shelf.title} type={shelf.type} updateShelf={props.updateShelf} />
        </div>
      )}
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}
Home.propTypes = {
  books: propTypes.array.isRequired,
  updateShelf: propTypes.func.isRequired
}
export default Home