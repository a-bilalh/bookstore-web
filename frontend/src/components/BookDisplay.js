import './bookDisplay.css';



function BookDisplay({title, author, cover}) {
    
    return (

        <div className="container">

            <div className="picDiv">
                <h1>Cover Not Available</h1>
            </div>
            <div className="textDiv"> 
                {title} by {author}
            </div>

        </div>
    )
}

export default BookDisplay;