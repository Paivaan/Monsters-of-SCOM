import styles from './formulario.module.css'
import React, {useState} from 'react'

function Piadocas(props){

const [titulo, setTitulo] = useState();
const [piada, setPiada] = useState();
const [nivel, setNivel] = useState();


    return(
        <div className = {styles.form_control}>
            <input 
                type="text" 
                text ="Título da piadoca" 
                name ="name" 
                placeholder = "Título da piadoca!"
                onChange = {(event) => setTitulo(event.target.value)}
            />
            <p>.</p>
            <input  
                type="text" 
                text ="Conte para nós sua piadoca:" 
                name ="name" 
                placeholder = "Historinha da piada"
                onChange = {(event) => setPiada(event.target.value)}
            />
            <p>.</p>
            <select 
                name = "category_id"
                text = "Selecione o nível da piada"
                onChange = {(event) => setNivel(event.target.value)}
            >
                <option value="">Selecione</option>
                <option value="Hilária">Hilária</option>
                <option value="Engraçada">Engraçada</option>
                <option value="Neutra">Neutra</option>
                <option value="Ruim">Ruim</option>
                <option value="Péssima">Péssima</option>
            </select>
            <p>.</p> 
           <button onClick={() => props.startPost({
              "titulo": titulo,
              "piada": piada,
              "nivel": nivel,
           })}>
           Enviar piadoca!
           </button>
        </div>
    )
}
export default Piadocas