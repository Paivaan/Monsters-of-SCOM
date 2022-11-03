import React from 'react';

import skyline from '../../images/skyline.jpg'
import rx7 from '../../images/rx7.jpg'
import silvia from '../../images/silvia.jpg'
import subarus from '../../images/subarus.jpg'

import './jdm.module.css';

function JDM() {

   return (
      <div>
         <div>
            <div style={{ width: "900px", backgroundColor: "#000", margin: "0px auto 10px auto", boxShadow: "0px 0px 10px rgb(248, 5, 187)", padding: "10px" }}>
               <div>
                  <div>
                     <h1 style={{ paddingTop: "50px", color: "#f805bb" }}>BEST JDM CARS</h1>
                     <h2 style={{ color: "#fff" }}>ESCOLHA O SEU E ESCUTE O RONCO!</h2>
                  </div>
               </div>

               <div>
                  <div>
                     <div>SKYLINE</div>
                     <div>
                        <img alt='q' src={skyline} />

                     </div>
                  </div>
                  <div>
                     <div>RX-7</div>
                     <div>
                        <img alt='2' src={rx7} />
                     </div>
                  </div>
                  <div>
                     <div>NISSAN SILVIA</div>
                     <div>
                        <img alt='3' src={silvia} />
                     </div>
                  </div>
                  <div>
                     <div>SUBARU</div>
                     <div>
                        <img alt='4' src={subarus} />
                     </div>
                  </div>
                  
               </div>


               <h2>BRUP BRUP BRUP</h2>

            </div>

         </div>

      </div>
   );
}
export default JDM;