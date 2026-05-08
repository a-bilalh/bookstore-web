
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BookDisplay from './BookDisplay.jsx';
import { useBooksList } from '../services/api.js';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import BookSkeleton from './BookSkeleton.jsx';


const MyHorizontalList = ({ category, count }) => {
    const { books, loading } = useBooksList(category, count);
    
      return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
              <BookSkeleton key={index} />
            ))
            : books.map((book) => (
              <BookDisplay
                key={book.id}
                itemId={book.id}
                book={book}
              />
            ))}
        </ScrollMenu>
      );
    };

export default MyHorizontalList;




const Arrow = ({ children, disabled, onClick }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    style={{
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.3 : 1,
      userSelect: "none",
      background: "none",
      border: "none",
      fontSize: "20px",
    }}
  >
    {children}
  </button>
);




const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);
  return <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>{'<'}</Arrow>;
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  return <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>{'>'}</Arrow>;
};