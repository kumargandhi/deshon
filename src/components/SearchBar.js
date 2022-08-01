const SearchBar = ({ onSearch, search, setSearch }) => {
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="button-addon2"
            onClick={(e) => onSearch(e, search)}
          >
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div id="countryHelp" className="form-text fw-light fs-6">
        You can also try searching with symbol, currency.....
      </div>
    </div>
  );
};

export default SearchBar;
