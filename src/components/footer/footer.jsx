import React, { useEffect, useRef, useState } from 'react'

import styles from './footer.module.css'
import { BiPlay, BiPause, BiSkipNext } from "react-icons/bi";

import mafia1 from './audiosFooter/The Godfather Theme Song.mp3'
import mafia2 from './audiosFooter/Il Padrino ( The Godfather  original song ).mp3'
import mafia3 from './audiosFooter/Coolio - Gangstas Paradise - Karaoke Version from Zoom Karaoke.mp3'

function Footer() {

   const ref1 = useRef()
   const ref2 = useRef()
   const ref3 = useRef()

   const [playerText, setPlayerText] = useState('Play');
   var i = 0
   const [control, setControl] = useState(0);
   const [stopPlaying, setstopPlaying] = useState(false);


   function player() {

      if (control == 0) {
         ref1.current.play()
         setPlayerText('Pause')
      }
      if (control == 1) {
         ref2.current.play()
         setPlayerText('Pause')
      }
      if (control == 2) {
         ref3.current.play()
         setPlayerText('Pause')
      }
   }

   function pauser() {
      if (control == 0) {
         ref1.current.pause()
         setPlayerText('Play')
      }
      if (control == 1) {
         ref2.current.pause()
         setPlayerText('Play')
      }
      if (control == 2) {
         ref3.current.pause()
         setPlayerText('Play')
      }

   }

   function skip() {
      i++
      setControl(i)
      if (i == 1) {
         ref1.current.pause()
         setPlayerText('Play')
         ref2.current.play()
         setPlayerText('Pause')
      }
      if (i == 2) {
         ref2.current.pause()
         setPlayerText('Play')
         ref3.current.play()
         setPlayerText('Pause')
         setstopPlaying(true)
      }
   }

   return (
      <div className={styles.footer}>
         <div class={styles.list}>
            <div> "A porta da felicidade abre só para o exterior;
               quem a força em sentido contrário acaba por fechá-la ainda mais."
            </div>
            <div>
               - Soren Kierkegaard
            </div>
            {playerText == "Play" ? <button className={styles.player} onClick={player}>
               <audio ref={ref1} src={mafia1} />
               <audio ref={ref2} src={mafia2} />
               <audio ref={ref3} src={mafia3} />
               {playerText} <BiPlay size={20} style={{ verticalAlign: 'top' }} />
            </button> :
               <button className={styles.player} onClick={pauser}>
                  <audio ref={ref1} src={mafia1} />
                  <audio ref={ref2} src={mafia2} />
                  <audio ref={ref3} src={mafia3} />
                  {playerText} <BiPause size={20} style={{ verticalAlign: 'top' }} />
               </button>}
            {stopPlaying === false ? <button className={styles.skip} onClick={skip}>
               <BiSkipNext size={20} style={{ verticalAlign: 'top' }} />
            </button> : <></>}

         </div>

      </div>
   );
}
export default Footer