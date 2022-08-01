import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import "./App.css";
import axios from "axios";

class App extends Component {

  results = [
    {
      name: 'test'
    }
  ];

  handleSearch = (e, search) => {
    e.preventDefault();
    console.log('search clicked' + search);
    axios
      .get(
        'https://restcountries.com/v3.1/name/' + search
      )
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <SearchBar onSearch={this.handleSearch}></SearchBar>
          <div>
          {
            this.results.map((item) => (<div>{item.name}</div>))
          }
        </div>
        </div>
      </div>
    );
  }
}

export default App;
