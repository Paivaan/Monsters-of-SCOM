import React, { useState, useEffect } from 'react'

function Signin(props) {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [date, setDate] = useState();
    const [cargo, setCargo] = useState();

    useEffect(() => {
        if (date === "000") {
            setCargo("admin")
        } else {
            setCargo("client")
        }
    }, [date]);

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
            <input
                type="text"
                placeholder="Número do cartão"
                style={{
                    padding: "1em",
                    borderRadius: "0.5em",
                    border: "none",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    boxShadow: "1px 3px 8px #0a90d3"
                }}
            />
            <p>.</p>
            <input
                type="text"
                text="Data de validade"
                name="date"
                placeholder="Data de validade"
                onChange={(event) => setDate(event.target.value)}
                style={{
                    padding: "1em",
                    borderRadius: "0.5em",
                    border: "none",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    boxShadow: "1px 3px 8px #0a90d3"
                }}
            />
            <p>.</p>
            <input
                type="text"
                placeholder="Código de segurança"
                style={{
                    padding: "1em",
                    borderRadius: "0.5em",
                    border: "none",
                    lineHeight: "20px",
                    borderRadius: "8px",
                    boxShadow: "1px 3px 8px #0a90d3"
                }}
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
                    "usuario": user,
                    "senha": password,
                    "cargo": cargo,
                })}>
                Fazer cadastro
            </button>
        </div>
    )
}
export default Signin