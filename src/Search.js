import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { search , update } from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state={
    results : []
  }

  updateShelf = async (book,shelf) => {
      try{
        await update(book,shelf)
      } catch (e) {
        console.log(e)
      }
  }

  bookSearch = async (e) => {
    if(e.target.value.length > 0){
      try{
        const results = await search(e.target.value)
          this.setState({results : results})
      }
       catch (e) {
        console.log(e);
      }
    }  else {
      this.setState({results : []})
    }
  }

  render(){
    {console.log(this.state)}

    return(
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/'><button className="close-search"></button></Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                    name="bookName"
                    placeholder="Search by title or author"
                    onChange={(e) => this.bookSearch(e)}/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                this.state.results.length === 20 &&
                this.state.results.map((item) => <Book  key={item.id} updateShelf={this.updateShelf} bookDetails={item}/>)
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
