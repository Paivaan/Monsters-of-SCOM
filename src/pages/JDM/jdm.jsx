import React, { useRef } from 'react';

import rx7 from '../../images/rx7.jpg'
import silvia from '../../images/silvia.jpg'
import skyline from '../../images/skyline.jpg'
import subarus from '../../images/subarus.jpg'

import rx7Sound from '../../audios/rx7.mp3'
import silviaSound from '../../audios/silvia.mp3'
import skylineSound from '../../audios/skyline.mp3'
import subaruSound from '../../audios/subaru.mp3'



import './jdm.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap'

function JDM() {

   const ref1 = useRef()
   const ref2 = useRef()
   const ref3 = useRef()
   const ref4 = useRef()

   function playRx7() {
      ref1.current.play();
   }
   function stopRx7() {
      ref1.current.pause()
   }

   function playSilvia() {
      ref2.current.play();
   }
   function stopSilvia() {
      ref2.current.pause()
   }
   function playSkyline() {
      ref3.current.play();
   }
   function stopSkyline() {
      ref3.current.pause()
   }
   function playSubaru() {
      ref4.current.play();
   }
   function stopSubaru() {
      ref4.current.pause()
   }

   return (
      <div>
         <audio ref={ref1} src={rx7Sound} />
         <audio ref={ref2} src={silviaSound} />
         <audio ref={ref3} src={skylineSound} />
         <audio ref={ref4} src={subaruSound} />
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
                     <div onMouseEnter={playSkyline} onMouseLeave={stopSkyline}>
                        <img alt='q' src={skyline} />

                     </div>
                  </div>
                  <div>
                     <div>RX-7</div>
                     <div onMouseEnter={playRx7} onMouseLeave={stopRx7}>
                        <img alt='2' src={rx7} />
                     </div>
                  </div>
                  <div>
                     <div>NISSAN SILVIA</div>
                     <div onMouseEnter={playSilvia} onMouseLeave={stopSilvia}>
                        <img alt='3' src={silvia} />
                     </div>
                  </div>
                  <div>
                     <div>SUBARU</div>
                     <div onMouseEnter={playSubaru} onMouseLeave={stopSubaru}>
                        <img alt='4' src={subarus} />
                     </div>
                  </div>

               </div>

               <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/6NImgmZKLfo?autoplay=1&mute=1" title="YouTube video" allowFullScreen></iframe>
               </div>

               <h2>BRUP BRUP BRUP</h2>

            </div>

         </div>

      </div>
   );
}
export default JDM;