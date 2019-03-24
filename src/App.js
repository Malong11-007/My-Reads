import React from 'react'
import './App.css'
import Search from './Search';
import ShelfHolder from './ShelfHolder';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {



  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search} />
        <Route exact path="/" component={ShelfHolder} />
      </div>
    )
  }
}

export default BooksApp
