import {  NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const Navigation = () => {
 return ( 
  <nav className={styles.navigation}>
   <NavLink to="/">Home</NavLink>
   <NavLink to="/posts">Posts</NavLink>
  </nav>
   );
}
 
