import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import XDesign1 from '../assets/XDesign1.png';
import XDesign2 from '../assets/XDesign2.png';
import XDesign3 from '../assets/XDesign3.png';
import XDesign4 from '../assets/XDesign4.png';
import XDesign5 from '../assets/XDesign5.png';
import XDesign6 from '../assets/XDesign6.png';
import XDesign7 from '../assets/XDesign7.png';
import XDesignDemo from '../assets/XDesignDemo.mp4';
import Style from "../styles/Style";


const XDesign = () => {
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
        maxHeight: '700px', flexDirection: 'row',opacity: fadeInImage ? 1 : 0,
        transition: 'opacity 1s', padding:'20px' }}>
    
          <motion.div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer',  flexDirection: 'row', position:'relative',}} drag='x' ref={carousel} dragConstraints={{left:0, right:0}}>
    
          <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered ? 'scale(1.2)' : 'scale(0.9)', 
              }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
              <img src={XDesign1} alt='Projeto CsTactics' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>
    
            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered2 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}>
              <img src={XDesign2} alt='Projeto LaraBug' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>
    
            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered3 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}>
              <img src={XDesign3} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
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
        src={XDesignDemo}
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
              <img src={XDesign5} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered6 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver6}
                onMouseOut={handleMouseOut6}>
              <img src={XDesign6} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

            <motion.div style={{ position: 'relative', border: '3px solid #41d3f8', borderRadius: '10px', boxShadow: "-5px -5px 10px #f30fb3", padding: '4px', marginRight: '30px', right: `${width * 0.1}`, cursor: 'pointer',
                transition: 'transform 0.5s ease-in-out',
                transform: hovered7 ? 'scale(1.2)' : 'scale(0.9)',
              }}
                onMouseOver={handleMouseOver7}
                onMouseOut={handleMouseOut7}>
              <img src={XDesign7} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
            </motion.div>

    
          </motion.div>
    
        </div>
      );
    };
    
  
  export default XDesign;

