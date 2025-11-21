import React, { Component } from 'react'

class BookList extends Component {
    render() { 
        return (
            <div className="book-list">
                <h2>My Reading List</h2>
                <ul>
                    <li>"The Great Gatsby" by F. Scott Fitzgerald</li>
                    <li>"To Kill a Mockingbird" by Harper Lee</li>
                    <li>"1984" by George Orwell</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;