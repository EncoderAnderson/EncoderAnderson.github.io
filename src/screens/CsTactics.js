import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import CsTactics1 from '../assets/CsTactics1.png';
import CsTactics2 from '../assets/CsTactics2.png';
import CsTactics3 from '../assets/CsTactics3.png';
import CsTactics5 from '../assets/CsTactics5.png';
import CsTactics6 from '../assets/CsTactics6.png';
import CsTactics7 from '../assets/CsTactics7.png';
import CsTacticsDemo from '../assets/CsTacticsDemo.mp4'; // Substitua pelo caminho correto do seu vídeo
import Style from "../styles/Style";


const CsTactics = () => {
    const [width] = useState(window.innerWidth);
    const [height] = useState(window.innerHeight);

     

    const [hovered, setHovered] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);
    const [hovered7, setHovered7] = useState(false);

    const [fadeInImage, setFadeInImage] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    

    const carousel = useRef();
    const [width1, setWidth1] = useState(0);

    useEffect(() => {
      setWidth1(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])
  
    useEffect(() => {
      
  
      const fadeInImageTimeout = setTimeout(() => {
        setFadeInImage(true);
      }, 750);
  
      const fadeOutTimeout = setTimeout(() => {
        setFadeOut(true);
      }, 5000);
  
  
    

  
      return () => {
       

        clearTimeout(fadeInImageTimeout);
        clearTimeout(fadeOutTimeout);
      };
    }, []);



    const handleMouseOver = () => {
        setHovered(true);
    }

    const handleMouseOut = () => {
        setHovered(false);
    }

    const handleMouseOver2 = () => {
        setHovered2(true);
    }

    const handleMouseOut2 = () => {
        setHovered2(false);
    }

    const handleMouseOver3 = () => {
        setHovered3(true);
    }

    const handleMouseOut3 = () => {
        setHovered3(false);
    }

    const handleMouseOver4 = () => {
      setHovered4(true);
  }

  const handleMouseOut4 = () => {
      setHovered4(false);
  }

  const handleMouseOver5 = () => {
    setHovered5(true);
}

const handleMouseOut5 = () => {
    setHovered5(false);
}

const handleMouseOver6 = () => {
  setHovered6(true);
}

const handleMouseOut6 = () => {
  setHovered6(false);
}

const handleMouseOver7 = () => {
  setHovered7(true);
}

const handleMouseOut7 = () => {
  setHovered7(false);
}


    return (
        <div style={{ position: 'relative', height: '60vh',
        maxHeight: '800px', flexDirection: 'row',opacity: fadeInImage ? 1 : 0,
        transition: 'opacity 1s', padding:'20px' }}>
    
          <motion.div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer',  flexDirection: 'row', position:'relative',}} drag='x' ref={carousel} dragConstraints={{left:0, right:0}}>
    
          <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered ? 'scale(1.2)' : 'scale(0.9)', 
              }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
              <img src={CsTactics1} alt='Projeto CsTactics' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>
    
            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered2 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}>
              <img src={CsTactics2} alt='Projeto LaraBug' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>
    
            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered3 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}>
              <img src={CsTactics3} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

            <motion.div
      style={{
        position: 'relative',
        border: '3px solid #41d3f8',
        borderRadius: '10px',
        boxShadow: '-5px -5px 10px #f30fb3',
        padding: '4px',
        marginRight: '30px',
        right: `${width * 0.1}`,
        cursor: 'pointer',
        transition: 'transform 0.5s ease-in-out',
        transform: hovered4 ? 'scale(1.2)' : 'scale(0.9)',
      }}
      onMouseOver={handleMouseOver4}
      onMouseOut={handleMouseOut4}
    >
      <video
        src={CsTacticsDemo}
        alt="Projeto CsTactics"
        style={{ width: '200px', borderRadius: '10px' }}
        controls
        autoPlay // Adicione esta propriedade para iniciar a reprodução automaticamente
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </motion.div>

            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered5 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver5}
                onMouseOut={handleMouseOut5}>
              <img src={CsTactics5} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered6 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver6}
                onMouseOut={handleMouseOut6}>
              <img src={CsTactics6} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered7 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver7}
                onMouseOut={handleMouseOut7}>
              <img src={CsTactics7} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

    
          </motion.div>
    
        </div>
      );
    };
    
  
  export default CsTactics;

