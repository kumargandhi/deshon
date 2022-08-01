const CountryCard = ({ country }) => {
  const getBodyText = (country) => {
    return "With supporting text below as a natural lead-in to additional content.";
  };
  return (
    <div className="country-container card">
      <div className="card-header">{country.name.common}</div>
      <img
        src={country.flags.png}
        class="card-img-top"
        alt={country.name.common}
      ></img>
      <div class="card-body">
        <p class="card-text">{getBodyText(country)}</p>
      </div>
    </div>
  );
};

export default CountryCard;
