const CountryCard = ({ country }) => {
  const getObjKeys = (d) => {
    return Object.keys(d).join(", ");
  };
  const getObjValues = (d) => {
    return Object.values(d).join(", ");
  };
  return (
    <div className="country-container card border-secondary">
      <div className="card-header bg-secondary bg-gradient">
        <span className="fw-bold">{country.name.common}</span>
        <span className="float-end">{country.flag}</span>
      </div>

      <div class="card-body bg-light bg-gradient overflow-scroll p-1">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Languages{" "}
            <span className="float-end fw-light">
              {getObjKeys(country.languages)}
            </span>
          </li>
          <li class="list-group-item">
            Currencies{" "}
            <span className="float-end fw-light">
              {getObjKeys(country.currencies)}
            </span>
          </li>
          <li class="list-group-item">
            Timezones{" "}
            <span className="float-end fw-light text-nowrap">
              {getObjValues(country.timezones)}
            </span>
          </li>
          <li class="list-group-item">
            Capital{" "}
            <span className="float-end fw-light">
              {getObjValues(country.capital)}
            </span>
          </li>
          <li class="list-group-item">
            Population{" "}
            <span className="float-end fw-light">
              {country.population.toLocaleString()}
            </span>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <a href="/#" class="card-link">
          More
        </a>
      </div>
    </div>
  );
};

export default CountryCard;
