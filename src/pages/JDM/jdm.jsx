import React from 'react';

import skyline from '../../images/skyline.jpg'
import rx7 from '../../images/rx7.jpg'
import silvia from '../../images/silvia.jpg'
import subarus from '../../images/subarus.jpg'

import './jdm.module.css';

function JDM() {

   return (
      <div>
         <div className="jdm">
            <div style={{ width: "900px", backgroundColor: "#000", margin: "0px auto 10px auto", boxShadow: "0px 0px 10px rgb(248, 5, 187)", padding: "10px" }}>
               <div id="cabecalho">
                  <div>
                     <h1 style={{ paddingTop: "50px", color: "#f805bb" }}>BEST JDM CARS</h1>
                     <h2 style={{ color: "#fff" }}>ESCOLHA O SEU E ESCUTE O RONCO!</h2>
                  </div>
               </div>

               <div className="container">
                  <div className="box1">
                     <div className="textinho">SKYLINE</div>
                     <div className="imag1">
                        <img alt='q' src={skyline} className="imgbox" />

                     </div>
                  </div>
                  <div className="box2">
                     <div className="textinho">RX-7</div>
                     <div className="imag2">
                        <img alt='2' src={rx7} className="imgbox" />
                     </div>
                  </div>
                  <div className="box3">
                     <div className="textinho">NISSAN SILVIA</div>
                     <div className="imag3">
                        <img alt='3' src={silvia} className="imgbox" />
                     </div>
                  </div>
                  <div className="box4">
                     <div className="textinho">SUBARU</div>
                     <div className="imag4">
                        <img alt='4' src={subarus} className="imgbox" />
                     </div>
                  </div>
                  
               </div>


               <h2 id="vai-tremer">BRUP BRUP BRUP</h2>

            </div>

         </div>

      </div>
   );
}
export default JDM;