import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const SignIn = () => {
        navigate("/signin")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1em"
        }}>
            <input
                type="text"
                text="Usuário"
                name="user"
                placeholder="Usuário"
                style={{
                    padding: "1em",
                    borderRadius: "0.5em",
                    border: "none",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    boxShadow: "1px 3px 8px #0a90d3"
                }}
                onChange={(event) => setUser(event.target.value)}
            />
            <p>.</p>
            <input
                type="text"
                text="Senha"
                name="password"
                placeholder="Senha"
                style={{
                    padding: "1em",
                    borderRadius: "0.5em",
                    border: "none",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    boxShadow: "1px 3px 8px #0a90d3"
                }}
                onChange={(event) => setPassword(event.target.value)}
            />
            <p>.</p>
            <button style={{
                backgroundColor: "#0a90d3",
                color: "#fff",
                padding: "0.7em 1.2em",
                borderRadius: "0.5em",
                textDecoration: "none",
                transition: "0.5s",
                cursor: "pointer",
                border: "none",
                borderRadius: "8px",
                boxShadow: "1px 3px 8px #fff"
            }}
                onClick={() => props.startPost({
                    "user": user,
                    "password": password,
                })}>
                Entrar
            </button>
            <p>.</p>
            <button style={{
                backgroundColor: "rgb(128, 128, 128)",
                color: "#fff",
                padding: "0.7em 1.2em",
                borderRadius: "0.5em",
                textDecoration: "none",
                transition: "0.5s",
                cursor: "pointer",
                border: "none",
                borderRadius: "8px",
                boxShadow: "1px 3px 8px #fff"
            }}
                onClick={SignIn}>
                Criar nova conta
            </button>
        </div>
    )
}
export default Login