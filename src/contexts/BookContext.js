import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', id: 1 },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', id: 2 },
        { title: '1984', author: 'George Orwell', id: 3 },
        { title: 'Pride and Prejudice', author: 'Jane Austen', id: 4 }
    ]);

    return ( 
        <BookContext.Provider value={{ books }}>
            { props.children }
        </BookContext.Provider> 
     );
}
 
export default BookContextProvider;