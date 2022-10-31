import styles from './footer.module.css'

function Footer() {
   return (
      <footer className={styles.footer}>
         <ul class = {styles.list}>
            <li> "A porta da felicidade abre só para o exterior;
               quem a força em sentido contrário acaba por fechá-la ainda mais."
            </li>
            <li>
            - Soren Kierkegaard
            </li>
            
         </ul>
      </footer>
   );
}
export default Footer