import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../shared";

export const Post  = () => {
 const { id } = useParams();
 console.log(id)
 const navigate = useNavigate();
 const { response } = useFetch(
		`http://jsonplaceholder.typicode.com/posts/${id}`
	)
 console.log(response)
 return (
  <>
   <button onClick={() => navigate(-1)}>back</button>
   <p>Detail</p>
  </>
 );
}
 
