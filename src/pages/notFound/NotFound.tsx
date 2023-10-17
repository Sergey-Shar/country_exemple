import { useNavigate } from "react-router-dom"

export const NotFound = () => {
 const navigate = useNavigate()

 return (
  <>
   <button onClick={() => navigate(-1)}>Back</button>
			<p>404</p>
		</>
	)
}
 
