import React, { useEffect, useState, useContext } from 'react';
import './agiotage.css';
import { BiSearchAlt } from "react-icons/bi";
import apiCEP from '../../services/axios';

function Agiotage() {

   const [input, setInput] = useState("")
   const [cep, setCep] = useState({})

   async function handleSearch() {
      if (input === "") {
         alert("Me ajude a te ajudar, preencha algum CEP!")
         return;
      }
   
   try {
      const response = await apiCEP.get(`${input}/json`)
      console.log('response :>> ', response.data);
      setCep(response.data)
      setInput("")
   } catch {
      alert("Eita mano, algum erro aconteceu!")
      setInput("")
   }
}

return (
   <div className='container_agiotage'>
      <h1 className='title'>
         Procure seu Inadimplente:
      </h1>
      <div className='containerInput'>
         <input type="text" placeholder='Digite o CEP do malandro:' value={input} onChange={(e) => setInput(e.target.value)} />
         <button className='buttonCEP' onClick={handleSearch}>
            Procurar
            <BiSearchAlt size={20} />
         </button>
      </div>

      {Object.keys(cep).length > 0 && (  
         <main className='main'>
         <h2>CEP: {cep.cep}</h2>
         <span>Complemento: {cep.complemento}</span>
         <span>{cep.bairro}</span>
         <span>{cep.localidade} - {cep.uf}</span>
      </main>
         )}

   </div>
)};

export default Agiotage;