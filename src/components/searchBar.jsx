import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <div className="row">
          <label htmlFor="countryNameInput" className="fs-4 fw-bold">
            Start by typing a country name...
          </label>
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name!!"
              aria-label="Search by name!!"
              aria-describedby="button-addon2"
              id="countryNameInput"
            />
            <button className="btn btn-secondary" type="button" id="button-addon2">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div id="countryHelp" className="form-text fw-light fs-6">
          You can also try searching with name, symbol, currency.....
        </div>
      </div>
    );
  }
}

export default SearchBar;
