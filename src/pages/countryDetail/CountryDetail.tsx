import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../shared";

export const CountryDetail = () => {
 const { name } = useParams();
 const navigate = useNavigate();
 const { response } = useFetch(`https://restcountries.com/v3.1/name/${name}`);
 console.log(response)
 return (
  <>
   <button onClick={() => navigate(-1)}>back</button>
   <p>Detail</p>
  </>
 );
}
 
