import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import {getAll, update} from "./BooksAPI";

class ShelfHolder extends Component {
    state = {
        Data : null
    }

    updateShelf = async (book,shelf) => {
        await update(book,shelf);
        book.shelf = shelf;
        const newState = this.state.Data.filter((item) => item.id !== book.id).concat([book]);
        console.log(newState)
        this.setState({Data : newState})

    }


    async componentDidMount() {
        try {
            const bookData = await getAll();
            this.setState({Data : bookData})
        } catch (e) {
            console.log(e)
        }
    }


    render(){


      {console.log("in holder",this.state)}
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.Data  ?
            <div>
              <Shelf   updateShelf={this.updateShelf} title="Currently Reading" data={this.state.Data.filter((item) => item.shelf === "currentlyReading")}/>
              <Shelf   updateShelf={this.updateShelf} title="want To Read" data={this.state.Data.filter((item) => item.shelf === "wantToRead")}/>
              <Shelf   updateShelf={this.updateShelf} title="Read" data={this.state.Data.filter((item) => item.shelf === "read")}/>
            </div> :
            <div className="lds-ellipsis" ><div></div><div></div><div></div><div></div></div>
          }
        </div>
        <div className="open-search">
          <Link to="/search"><button type="button"></button></Link>
        </div>
      </div>
    )
  }
}
export default ShelfHolder;
