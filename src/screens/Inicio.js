import React, { useState, useEffect } from "react";
import Anderson from '../assets/Anderson.png';
import '../App.css';
import Style from '../styles/Style';
import { useNavigate } from "react-router-dom";


function Inicio() {
  const navigate = useNavigate();
  const [fadeInText1, setFadeInText1] = useState(false);
  const [fadeInText2, setFadeInText2] = useState(false);
  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  

  useEffect(() => {
    const fadeInText1Timeout = setTimeout(() => {
      setFadeInText1(true);
    }, 500);

    const fadeInText2Timeout = setTimeout(() => {
      setFadeInText2(true);
    }, 1000);

    const fadeInImageTimeout = setTimeout(() => {
      setFadeInImage(true);
    }, 750);

    const fadeOutTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 5000);


  
    const PaginaInicialNavegacao = setTimeout(() => {
      navigate('/PaginaInicial')
    }, 6000);

    return () => {
      clearTimeout(fadeInText1Timeout);
      clearTimeout(fadeInText2Timeout);
      clearTimeout(fadeInImageTimeout);
      clearTimeout(fadeOutTimeout);
    };
  }, []);

  const containerStyle = {
    ...Style.containerPrincipal,
    transform: `scale(${fadeOut ? 0 : 1})`, // Adicione esta linha para escalar o contêiner
    transition: 'transform 1s',
  };

  const [width] = useState(window.innerWidth);
  const [height] = useState(window.innerHeight);

  return (
    <div>
      <div style={containerStyle}>
        <p style={{
          ...Style.textoPrincipalAzul,
          opacity: fadeInText1 && !fadeOut ? 1 : 0,
          transition: 'opacity 1s',
          animation: fadeInText1 && !fadeOut ? 'pulsate 1s' : '',
          textShadow: "-4px -4px 2px black",
          color:'white'
        }}>Anderson</p>

<div style={{ ...containerStyle, borderRadius:"50%", width:"300px", height:'300px', position:'relative', left:`${width *0.078}px`, padding:20  }}>
          <div id="imagemAnderson" style={{ color:'#41d3f8', border: '3px solid #f30fb3', borderRadius:'50%', boxShadow: "-5px -3px 4px #000000",   opacity: fadeInText1 && !fadeOut ? 1 : 0,
          transition: 'opacity 1s',
          animation: fadeInText1 && !fadeOut ? 'pulsate 1s' : '',}}>
            <img src={Anderson} alt="logo" style={{ ...Style.imagemAndersonPrincipal,  color:'#41d3f8', border: '2px solid #41d3f8', boxShadow: "5px 5px 4px #000000", }} />
          </div>
        </div>

        <p style={{
          ...Style.textoPrincipalAzul,
          opacity: fadeInText2 && !fadeOut ? 1 : 0,
          transition: 'opacity 1s',
          marginTop: '20px',
          animation: fadeInText2 && !fadeOut ? 'pulsate 1s' : '',
          textShadow: "-4px -4px 2px black",
          color:'white'
        }}>Desenvolvedor Javascript React e React Native</p>
      </div>
    </div>
  );
}

export default Inicio;
