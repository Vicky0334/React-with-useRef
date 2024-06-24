import React, { useEffect, useState } from 'react'
const { useRef } = React;
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const App = () => {
  // const[cbe,Setcbe]=useState("");
  const container =useRef(null);
 
    
    
  const changebox = () => {
    gsap.fromTo(container.current,
      {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        backgroundColor: "red",
        opacity: 1,
        borderRadius: "0%"
      },
      {
        x: 700,
        y: 300,
        width: 50,
        height: 80,
        duration: 5,
        yoyo: true,
        ease: "bounce.out",
        backgroundColor: "green",
        opacity: 1,
        borderRadius: "10%",
        repeat: 0,
      }
    );
  };
  return (
    <div id="main">
     <button onClick={changebox} >change</button>
     <div ref={container} id="box" ></div>

    </div>
  )
}


export default App
