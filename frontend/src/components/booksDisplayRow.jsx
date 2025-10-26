
import React, { use } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import BookDisplay from './BookDisplay';
import { useBooksList } from '../services/api';


    

const MyHorizontalList = () => {
    const books = useBooksList();
      return (
        <ScrollMenu>
            {books.map(BookDisplay)}
        </ScrollMenu>
      );
    };


export default MyHorizontalList;