import CountryCard from "./CountryCard";
import Loader from "./Loader";

const CountriesContainer = ({ countries, loading }) => {
  return (
    <div className="countries">
      {loading ? (
        <Loader></Loader>
      ) : (
        countries.map((item, i) => (
          <CountryCard country={item} key={i}></CountryCard>
        ))
      )}
    </div>
  );
};

export default CountriesContainer;
