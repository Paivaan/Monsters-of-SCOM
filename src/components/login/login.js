import styles from './login.css'
import React, {useState} from 'react'

function Login(props){

const [user, setUser] = useState();
const [password, setPassword] = useState();

    return(
        <div className = {styles.form_control}>
            <input 
                type="text" 
                text ="Usuário" 
                name ="user" 
                placeholder = "Usuário"
                onChange = {(event) => setUser(event.target.value)}
            />
            <p>.</p>
            <input  
                type="text" 
                text ="Senha" 
                name ="password" 
                placeholder = "Senha"
                onChange = {(event) => setPassword(event.target.value)}
            />
            <p>.</p>
           <button onClick={() => props.startPost({
              "user": user,
              "password": password,
           })}>
           Fazer login!
           </button>
        </div>
    )
}
export default Login