import Input from '../banco_piadoca/Input.js'
import styles from './formulario.css'
import Select from '../banco_piadoca/Select.js'
import Submit from '../banco_piadoca/Submit.js'

function Piadocas(){
    return(
        <form className = {styles.form}>
            <Input 
                type="text" 
                text ="Título da piadoca" 
                name ="name" 
                placeholder = "Insira a piadoca"
            />
            <Input  
                type="text" 
                text ="Conte para nós sua piadoca:" 
                name ="name" 
                placeholder = "Historinha da piada"
            />
            <Select 
                name = "category_id"
                text = "Selecione o nível da piada"
            /> 
            <Submit
                text = "Enviando piadoca!"
            />
            
        </form>

    )
}
export default Piadocas