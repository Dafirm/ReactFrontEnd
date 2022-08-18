// import { useEffect, useState } from "react";
// import axios from "axios";

// function useCountry() {
//   const [countries, setCountries] = useState([]);
//   const [common, setCommon] = useState("");

//   useEffect(() => {
//     axios
//       .get(`https://restcountries.com/v3.1/name/${common}`)
//       .then((res) => {
//         console.log(res);
//         setCountries(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [common]);

//   return { countries, common, setCommon };
// }

// export default useCountry;
