import './bookDisplay.css';



function BookDisplay({title, author, cover}) {
    
    return (

        <div>
            <div className="bookRectangle">
                <h1>Cover Not Available</h1>
            </div>
            <div>
                <h2>{title} by {author}</h2>
            </div>

        </div>
    )
}

export default BookDisplay;