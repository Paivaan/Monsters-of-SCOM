import React, { useEffect, useState, useContext, useRef } from 'react';
import { BiSearchAlt, BiCaretRight, BiCaretLeft } from "react-icons/bi";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './agiotage.css';
import Modal from '../../components/modal/modal'

import apiCEP from '../../services/axios';


function Agiotage() {

   const [input, setInput] = useState("")
   const [cep, setCep] = useState({})
   const [modal, setModal] = useState(false);

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

   const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDtw3t_uAryR2-jJj6V4UBSFKiyruCmRLk"
   })



   const [data, setData] = useState([]);
   const carousel = useRef(null);

   useEffect(() => {
      fetch('http://localhost:3000/static/cobradores.json')
         .then((response) => response.json())
         .then(setData);
   }, []);

   const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
   };

   const handleRightClick = (e) => {
      e.preventDefault();

      carousel.current.scrollLeft += carousel.current.offsetWidth;
   };

   if (!data || !data.length) return null;

   return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
         {<Modal trigger={modal} setTrigger={setModal}>
                <h3 style={{fontWeight: "bold"}}>
                    Atenção:
                </h3>
                <p>O cobrador está a caminho do seu inadimplente em: <br />CEP: {cep.cep}<br />Complemento: {cep.complemento}<br />{cep.bairro}<br />{cep.localidade} - {cep.uf}</p>
            </Modal>}
         <h1 className='title'>
            <br />
            Agiotagem
         </h1>
         <div style={{ paddingTop: "20px" }}>
            <h4 style={{ backgroundColor: "#fff", textAlign: 'center', paddingTop: "5px" }}>
               Bem vindo à página da Casa de Agiotagem Pereira!<br/>
               Nessa página, você terá todos os recursos para conseguir seu dinheiro de volta!<br />
               Cobre seu inadimplente de uma forma amigável, efetiva e sem sair de casa!
            </h4>
         </div>
         <div style={{ paddingTop: '20px' }}>

         </div>
         <h2 className='title2'>
            Procure seu Inadimplente:
         </h2>
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

         <h2 className='title2'>
            Procure no mapa!
         </h2>
         <div className='map'>
            {isLoaded ? (
               <GoogleMap
                  mapContainerStyle={{
                     width: '70%',
                     height: '100%'
                  }}
                  center={{
                     lat: -23.479512611670835,
                     lng: -47.417083192319836
                  }}
                  zoom={15}
               >
               </GoogleMap>
            ) : <></>}
         </div>


         <h2 className='title2'>
            Selecione seu cobrador!
         </h2>


         <div className="container">
            <div className="carousel" ref={carousel}>
               {data.map((item) => {
                  const { id, name, description, image } = item;
                  return (
                     <div className="item" key={id}>
                        <div className="image">
                           <img src={image} alt={name} />
                        </div>
                        <div className="info">
                           <span className="name">{name}</span>
                           <span className="description">{description}</span>
                           {Object.keys(cep).length > 0 && (<button className='select' onClick={() => setModal(true)}>Selecionar</button>)}
                        </div>
                     </div>
                  );
               })}
            </div>
            <div className="buttons">
               <button onClick={handleLeftClick}>
                  <BiCaretLeft size={50} color="#fff" />
               </button>
               <button onClick={handleRightClick}>
                  <BiCaretRight size={50} color="#fff" />
               </button>
            </div>
         </div>

      </div >
   )
};

export default Agiotage;