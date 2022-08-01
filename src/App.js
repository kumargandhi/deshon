import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CountriesContainer from "./components/CountriesContainer";
import "./App.css";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Using the effects
  }, []);

  const handleSearch = (e, search) => {
    e.preventDefault();
    console.log("search clicked" + search);
    axios
      .get("https://restcountries.com/v3.1/name/" + search)
      .then((response) => {
        setResults(response.data);
        console.log('' + results);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  return (
    <div className="App">
      <div className="App-main">
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        ></SearchBar>
        <CountriesContainer countries={results}></CountriesContainer>
      </div>
    </div>
  );
}

export default App;
