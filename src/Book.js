import React from 'react';
import { update } from "./BooksAPI";

class Book extends React.Component {
    backgroundImage = () => {
    if(this.props.bookDetails.hasOwnProperty('imageLinks')){
      return  `url(${this.props.bookDetails.imageLinks.thumbnail})`
    } else {
      return `url()`
    }
  }

  render(){
    // {this.props.bookDetails && console.log("IN BOOK",this.backgroundImage())}
    return(
      <div>
      {this.props.bookDetails &&
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.backgroundImage() }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => (this.props.updateShelf(this.props.bookDetails,e.target.value))} value={this.props.bookDetails.shelf || "none"}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.bookDetails.title}</div>
          <div className="book-authors">{this.props.bookDetails.authors}</div>
        </div>}
        </div>
    )
  }
}

export default Book;
