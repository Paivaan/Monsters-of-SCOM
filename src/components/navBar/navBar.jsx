import styles from './navBar.module.css'
import { Link } from 'react-router-dom';
import Container from '../container/container';
import logo from '../../images/supra_navbar.png'


function NavBar() {

   return (
      <nav className={styles.navBar}>
         <Container>
            <Link to="/"><img src={logo} alt="Home" /></Link>
            <ul className={styles.list}>
               <li className={styles.item}>
                  <Link to="/">Home</Link> 
               </li>
               <li className={styles.item}>
                  <Link to="/jdm">JDM</Link>
               </li>
               <li className={styles.item}>
                  <Link to="/agiotage">Agiotagem</Link>
               </li>
               <li className={styles.item}>
                  <Link to="/shit-posting">ShitPosting</Link>
               </li>
            </ul>
         </Container>
      </nav>
   );
}
export default NavBar