// const imgsrc =
//   'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg'
// const title = 'Fourth Wing'
// const author = 'Rebecca Yarros'

// const Image = () => <img src={imgsrc} alt={title} />

// const Title = () => <h2>{title}</h2>

// const Author = () => (
//   <h4
//     style={{
//       color: '#617d98',
//       fontSize: '0.75rem',
//       marginTop: '0.5rem',
//       letterSpacing: '2px',
//     }}
//   >
//     {author.toUpperCase()}
//   </h4>
// )
// const Book = (props) => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props?.imgsrc} alt={props?.title} />
//       <h2>{props?.title}</h2>
//       <h4>{props?.author?.toUpperCase()}</h4>
//     </article>
//   )
// }

const Book = ({ imgsrc, title, author, children, displayBook, index }) => {
  //   const displayTitle = () => {
  //     alert(title)
  //   }

  return (
    <article className="book">
      <span>#{index}</span>
      <img src={imgsrc} alt={title} />
      <h2>{title}</h2>
      <h4>{author?.toUpperCase()}</h4>
      <button onClick={displayBook}>Display Book</button>
      {children}
    </article>
  )
}

export default Book
