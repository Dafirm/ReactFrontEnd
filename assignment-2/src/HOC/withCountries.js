import { useEffect, useState } from "react";
import axios from "axios";


const withCountries = (WrappedComponent) => {
    console.log('withCountries')
    return () => {

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
        return <WrappedComponent countries={countries} setCountries = {setCountries} common={common} setCommon={setCommon}/>
    }

}
export default withCountries;