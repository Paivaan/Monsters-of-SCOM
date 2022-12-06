import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SignedConxtext } from '../../contexts/SignedContext';
import axios from '../../services/axiosTabela';

function Login(props) {

	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	const { setSigned } = useContext(SignedConxtext);

	const navigate = useNavigate();

	const SignIn = () => {
		navigate("/signin")
	}

	async function PostLogIn(body) {
		const data = await axios.post('/users', body)
		if (data) {
			return data
		}
	}

	async function LogIn() {
		if (!user || !password) {
			alert("Preencha os campos para entrar!")
		} else {
			const body = {
				usuario: user,
				senha: password
			}
			try {
				// const user = await axios.postLogin(body)
				// const stringfyUser = JSON.stringify(user)
				// await localStorage.setItem("user", stringfyUser)
				setSigned(true)
				localStorage.setItem("chave", true)
			}
			catch (err) {
				if (err.response.data) alert(err.response.data.error)
				else alert(err.message)
			}
		}
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
				type="password"
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
				onClick={LogIn}>
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