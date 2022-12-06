import React, { useContext } from 'react';
import styles from './navBar.module.css'
import { Link } from 'react-router-dom';
import Container from '../container/container';
import logo from '../../images/nav-icon.png'
import { BiLogOutCircle } from "react-icons/bi";
import { SignedConxtext } from '../../contexts/SignedContext';
import { useNavigate } from 'react-router-dom';

function NavBar() {

   const { setSigned } = useContext(SignedConxtext);
	
   const navigate = useNavigate();

   function signOut() {
      setSigned(false)
      localStorage.clear()
      navigate("/")
   }

   return (
      <nav className={styles.navBar}>
         <Container>
            <Link to="/"><img src={logo} alt="Home" style={{ width: "75%", paddingBlockEnd: "5px" }} /></Link>
            <ul className={styles.list}>
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
                  <BiLogOutCircle style={{ color: "#fff" }} onClick={signOut} />
               </li>
            </ul>
         </Container>
      </nav>
   );
}
export default NavBar