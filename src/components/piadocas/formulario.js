import Input from '../banco_piadoca/Input.js'
import styles from './formulario.css'
import Select from '../banco_piadoca/Select.js'
import Submit from '../banco_piadoca/Submit.js'
import React, {useState} from 'react'

function Piadocas(props){

const [titulo, setTitulo] = useState();
const [piada, setPiada] = useState();
const [nivel, setNivel] = useState();


    return(
        <div className = {styles.form} >
            <input 
                type="text" 
                text ="Título da piadoca" 
                name ="name" 
                placeholder = "Insira a piadoca"
                onChange = {(event) => setTitulo(event.target.value)}
            />
            <input  
                type="text" 
                text ="Conte para nós sua piadoca:" 
                name ="name" 
                placeholder = "Historinha da piada"
                onChange = {(event) => setPiada(event.target.value)}
            />
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
           <button onClick={() => props.startPost({
              "titulo": titulo,
              "piada": piada,
              "nivel": nivel,
           })}>
           Enviando piadoca!
           </button>
            
        </div>

    )
}
export default Piadocas