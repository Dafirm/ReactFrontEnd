import axios from "axios";
import { useEffect, useState } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [common, setCommon] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${common}`)
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [common]);

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
      <input
        type="text"
        value={common}
        onChange={(e) => setCommon(e.target.value)}
      />
      <div>{renderCountries}</div>
    </div>
  );
};
export default CountryList;
