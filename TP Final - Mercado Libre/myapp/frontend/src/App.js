import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Searcher from './components/searcher';
import Products from './components/product';

const SEARCH_BY_NAME = "http://localhost:8080/api/items?q=";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  
  searchByName(name){
    const url = `${SEARCH_BY_NAME}${name}`;
    console.log(name)
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        console.log( data.items);
        this.setState(
          { products: data.items })
      })
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Searcher searchByName={name => this.searchByName(name)} />
            <Products products={this.state.products} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
