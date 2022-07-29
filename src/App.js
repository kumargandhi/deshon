import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <SearchBar></SearchBar>
        </div>
      </div>
    );
  }
}

export default App;
