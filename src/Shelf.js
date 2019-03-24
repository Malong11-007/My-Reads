import React , { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
  render(){
    {this.props.data && console.log("IN SHELF",this.props)}
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
                this.props.data ?
                this.props.data.map((item,index) => <Book updateShelf={this.props.updateShelf} key={item.id} bookDetails={item}></Book>) :
                null
            }
          </ol>
        </div>
      </div>
    )
  }
}
export default Shelf;
