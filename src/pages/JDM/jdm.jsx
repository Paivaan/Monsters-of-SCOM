import React, { useRef } from 'react';

import rx7 from '../../images/rx7.jpg'
import silvia from '../../images/silvia.jpg'
import skyline from '../../images/skyline.jpg'
import subarus from '../../images/subarus.jpg'

import rx7Sound from '../../audios/rx7.mp3'
import silviaSound from '../../audios/silvia.mp3'
import skylineSound from '../../audios/skyline.mp3'
import subaruSound from '../../audios/subaru.mp3'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div style={{ width: "900px", backgroundColor: "#212529", margin: "0px auto 10px auto", boxShadow: "0px 0px 10px #0a90d3", padding: "10px" }}>
               <div>
                  <div>
                     <h1 style={{ paddingTop: "50px", color: "#0a90d3" }}>Os melhores carros JDM da cidade!</h1>
                     <h2 style={{ color: "#fff" }}>ESCOLHA O SEU E ESCUTE O RONCO!</h2>
                  </div>
               </div>

               <div>
                  <CardGroup style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', margin: '30px' }}>
                     <div onMouseEnter={playSkyline} onMouseLeave={stopSkyline}>
                        <Card text="white" bg="dark" border="primary" style={{ width: '25rem' }}>
                           <Card.Img variant="top" src={skyline} />
                           <Card.Body>
                              <Card.Title>Skyline</Card.Title>
                              <Card.Text>
                                 Você viu o novo camaro?<br />Porque esse não vê desde a segunda.
                              </Card.Text>
                           </Card.Body>
                           <Card.Footer>
                              <small className="text-muted">STUTUTU</small>
                           </Card.Footer>
                        </Card>
                     </div>
                     <div onMouseEnter={playRx7} onMouseLeave={stopRx7}>
                        <Card text="white" bg="dark" border="primary" style={{ width: '25rem' }}>
                           <Card.Img variant="top" src={rx7} />
                           <Card.Body>
                              <Card.Title>RX-7</Card.Title>
                              <Card.Text>
                                 Você pode ter 99 problemas, mas falta de barulho não vai ser um.
                              </Card.Text>
                           </Card.Body>
                           <Card.Footer>
                              <small className="text-muted">BRAP BRAP BRAP BRAP</small>
                           </Card.Footer>
                        </Card>
                     </div>
                     <div onMouseEnter={playSilvia} onMouseLeave={stopSilvia}>
                        <Card text="white" bg="dark" border="primary" style={{ width: '25rem' }}>
                           <Card.Img variant="top" src={silvia} />
                           <Card.Body>
                              <Card.Title>Silvia</Card.Title>
                              <Card.Text>
                                 Esse aqui nasceu pro drift
                              </Card.Text>
                           </Card.Body>
                           <Card.Footer>
                              <small className="text-muted">DK?</small>
                           </Card.Footer>
                        </Card>
                     </div>
                     <div onMouseEnter={playSubaru} onMouseLeave={stopSubaru}>
                        <Card text="white" bg="dark" border="primary" style={{ width: '25rem' }}>
                           <Card.Img variant="top" src={subarus} />
                           <Card.Body>
                              <Card.Title>Subarus</Card.Title>
                              <Card.Text>
                                 Aguenta qualquer pista
                              </Card.Text>
                           </Card.Body>
                           <Card.Footer>
                              <small className="text-muted">R.I.P. 1993 - 2023</small>
                           </Card.Footer>
                        </Card>
                     </div>
                  </CardGroup>

               </div>

               <p></p>

               <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/6NImgmZKLfo?autoplay=1&mute=1" title="YouTube video" allowFullScreen></iframe>
               </div>

               <p></p>

               <div style={{ color: "#555759" }}>
                  <p style={{ textAlign: 'center' }}>Todos os carros foram adquiridos de modo <s>ilegal</s> rápido, portanto a Garagem JDM não se responsabiliza por algo que possa acontecer após a aquisição.</p>
               </div>

            </div>

         </div>

      </div>
   );
}
export default JDM;