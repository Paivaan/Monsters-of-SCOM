import React, { useContext } from 'react';
import styles from './navBar.module.css'
import { Link } from 'react-router-dom';
import Container from '../container/container';
import logo from '../../images/nav-icon.png'
import { BiLogOutCircle } from "react-icons/bi";
import { SignedConxtext } from '../../contexts/SignedContext';

function NavBar() {

   const { setSigned } = useContext(SignedConxtext);
	
   function signOut() {
      setSigned(false)
      localStorage.clear()
   }

   return (
      <nav className={styles.navBar}>
         <Container>
            <ul className={styles.list}>
            <Link to="/"><img src={logo} alt="Home" style={{ width: "75%", paddingBlockEnd: "5px" }} /></Link>
               <li className={styles.item}>
                  <Link to="/">Home</Link>
               </li>
               <li className={styles.item}>
                  <Link to="/jdm">Garagem JDM</Link>
               </li>
               <li className={styles.item}>
                  <Link to="/agiotage">Casa de Agiotagem</Link>
               </li>
               <li className={styles.item}>
                  <Link to="/shit-posting">Beco do Coringa</Link>
               </li>
               <li className={styles.item}>
               <Link to="/"><BiLogOutCircle style={{ color: "#fff" }} onClick={signOut} /></Link>
               </li>
            </ul>
         </Container>
      </nav>
   );
}
export default NavBar