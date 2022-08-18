import "./App.css";

import withCountries from "./HOC/withCountries";


function App({countries, common, setCommon}) {
  let renderCountries = countries.map((country) => {
    return (
      <div key={country.name.common}>
        
        <p>
          {country.name.common} : {country.name.official}
        </p>
      </div>
    );
  });
  return (
    <div>
      <h3>List of Countries</h3>
      <input
        type="text"
        value={common}
        onChange={(e) => setCommon(e.target.value)}
      />
      <div>{renderCountries}</div>
    </div>
  );
}


export default withCountries(App)


