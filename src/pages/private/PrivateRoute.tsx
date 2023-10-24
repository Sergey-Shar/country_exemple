import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../shared/hooks/useRedux";
import { authSelector } from "../../redux/selectors/selectors";


export const PrivateRoute = () => {

   const { user } = useAppSelector(authSelector)
   const location = useLocation()

 if (user === '') {
  return (
   <Navigate to="/login" state={{ from: location }} replace />
  )
 }
 return ( 
  <Outlet />
   );
}
 