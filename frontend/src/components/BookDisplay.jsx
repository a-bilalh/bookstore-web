import './bookDisplay.css';




function BookDisplay({book}) {
    
    return (

        <div className="container">

            <div className="picDiv">
                {book.cover_image ? <img src={book.cover_image} alt={book.title} /> 
                 : <h1>Cover Not Available</h1>}
            </div>
            <div className="textDiv"> 
                {book.title} by {book.author}
            </div>

        </div>
    )
}

export default BookDisplay;