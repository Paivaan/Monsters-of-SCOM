function Piadocas(){
    return(
        <form>
            
            <div>
                <input type = "text" placeholder = "Título da piadoca!"/>
            </div>
            
            <div>
                <input type = "text" placeholder = "Conte sua piadinha!"/>
            </div>
            
            <div>
                <select name = "category_id">
                    <option disabled>Selecione o nível da piadoca!</option>
                </select>
            </div>
            
            <div>
                <input type = "submit" value = "Enviar Piada!"/>
            </div>
            
        </form>
    )
}
export default Piadocas