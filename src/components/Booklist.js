import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext
    
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
                <h2>My Reading List</h2>
                <ul>
                    <li style={{ background: theme.ui}}>"The Great Gatsby" by F. Scott Fitzgerald</li>
                    <li style={{ background: theme.ui}}>"To Kill a Mockingbird" by Harper Lee</li>
                    <li style={{ background: theme.ui}}>"1984" by George Orwell</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;