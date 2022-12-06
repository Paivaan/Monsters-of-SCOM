import styles from './signin.css'
import React, { useState, useEffect } from 'react'

function Signin(props) {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [date, setDate] = useState();
    const [cargo, setCargo] = useState();

    useEffect(() => {
        if(date === "000"){
            setCargo("admin")
        }else{
            setCargo("client")
        }
    }, [date]);

    return (
        <div className={styles.form_control}>
            <input
                type="text"
                text="Usuário"
                name="user"
                placeholder="Usuário"
                onChange={(event) => setUser(event.target.value)}
            />
            <p>.</p>
            <input
                type="text"
                text="Senha"
                name="password"
                placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
            />
            <p>.</p>
            <input
                type="text"
                placeholder="Número do cartão"
            />
            <p>.</p>
            <input
                type="text"
                text="Data de validade"
                name="date"
                placeholder="Data de validade"
                onChange={(event) => setDate(event.target.value)}
            />
            <p>.</p>
            <input
                type="text"
                placeholder="Código de segurança"
            />
            <p>.</p>
            <button onClick={() => props.startPost({
                "usuario": user,
                "senha": password,
                "cargo": cargo,
            })}>
                Fazer cadastro!
            </button>
        </div>
    )
}
export default Signin