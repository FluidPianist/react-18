import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Book from './Books'
import { books } from './sampledata/books'

// const firstbook = {
//   imgsrc:
//     'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
//   title: 'Fourth Wing',
//   author: 'Rebecca Yarros',
// }

// const secondbook = {
//   imgsrc:
//     'https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg',
//   title: 'Friends, Lovers and the Big Terrible Thing',
//   author: 'Mathew Perry',
// }

// const thirdbook = {
//   imgsrc:
//     'https://images-na.ssl-images-amazon.com/images/I/71pL+3nMzfL._AC_UL600_SR600,400_.jpg',
//   title: 'Diary of a Wimpy Kid : No Brainer',
//   author: 'Jeff Kinney',
// }

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book {...firstbook}>
//         {/* <p>
//           children props usecase : passing html content to only some instances of
//           a purticular component
//         </p> */}
//       </Book>
//       <Book
//         imgsrc={secondbook.imgsrc}
//         author={secondbook.author}
//         title={secondbook.title}
//       />
//       <Book {...thirdbook} />
//     </section>
//   )
// }

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              displayBook={() => getBook(book.id)}
              index={index + 1}
            />
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
