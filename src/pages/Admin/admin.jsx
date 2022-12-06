import React, { useState, useContext, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Admin() {

   return (

      <div>

         <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2em"

         }}>
            <div style={{flex: "1", width: "75vw", height: "85vh"}}>
               <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" title="YouTube video" allowFullScreen></iframe>
               </div>
            </div>

         </div>

      </div>
   )
}

export default Admin;