import CountryCard from "./CountryCard";

const CountriesContainer = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((item, i) => (
        <CountryCard country={item} key={i}></CountryCard>
      ))}
    </div>
  );
};

export default CountriesContainer;
