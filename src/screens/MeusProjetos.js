import React, { useState, useEffect, } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import CsTactics1 from '../assets/CsTactics1.png';
import LaraBug1 from '../assets/LaraBug1.png';
import XDesign1 from '../assets/XDesign1.png';
import XDesign from '../screens/XDesign';
import LaraBug from '../screens/LaraBug';
import CsTactics from '../screens/CsTactics';


const MeusProjetos = () => {
  const [width] = useState(window.innerWidth);
  const [height] = useState(window.innerHeight);

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const [fadeInImage, setFadeInImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const [animationActive, setAnimationActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState('false');
  const [fadeInActive, setFadeInActive] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationActive(true);

      setTimeout(() => {
        setFadeInActive(true);
      }, 1000);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleTabClick = (tab) => {
    setFadeInActive(false);

    setTimeout(() => {
      setSelectedTab(tab);
      setFadeInActive(true);
    }, 500);
  };

  useEffect(() => {
    const fadeInImageTimeout = setTimeout(() => {
      setFadeInImage(true);
    }, 500);

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
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleMouseOver2 = () => {
    setHovered2(true);
  };

  const handleMouseOut2 = () => {
    setHovered2(false);
  };

  const handleMouseOver3 = () => {
    setHovered3(true);
  };

  const handleMouseOut3 = () => {
    setHovered3(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '777px',
        height: 'auto',
        maxHeight: '700px',
        flexDirection: 'row',
        bottom: `${height * 0.33}px`,
        right: `${width * 0.13}px`,
        padding: '10px',
        opacity: fadeInImage ? 1 : 0,
        transition: 'opacity 1s',
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',
          overflow: 'hidden',
          flexDirection: 'row',
          position: 'relative',
          padding: 25,
        }}
      >
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
            transform: hovered ? 'scale(1.05)' : 'scale(0.9)',
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleTabClick('CsTactics')}
        >
          <img src={CsTactics1} alt='Projeto CsTactics' style={{ width: '200px', borderRadius: '10px' }} />
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
            transform: hovered2 ? 'scale(1.05)' : 'scale(0.9)',
            
          }}
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
          onClick={() => handleTabClick('LaraBug')}
        >
          <img src={LaraBug1} alt='Projeto LaraBug' style={{ width: '200px', borderRadius: '10px' }} />
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
            transform: hovered3 ? 'scale(1.05)' : 'scale(0.9)',
          }}
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
          onClick={() => handleTabClick('XDesign')}
        >
          <img src={XDesign1} alt='Projeto XDesign' style={{ width: '200px', borderRadius: '10px' }} />
        </motion.div>
      </motion.div>

      <div
        style={{
          opacity: animationActive ? 1 : 0,
          transform: animationActive ? 'scale(1)' : 'scale(0.5)',
          transition: 'opacity 1s, transform 1s',
          width: '100%',
        }}
      >
        {(selectedTab === 'CsTactics' || selectedTab === 'XDesign' || selectedTab === 'LaraBug') && (
          <AnimatePresence initial={false}>
            <motion.div
              key={selectedTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: fadeInActive ? 1 : 0 }}
              exit={{ opacity: fadeOut ? 0 : 1 }}
              style={{ opacity: fadeInActive ? 1 : 0, transition: 'opacity 1s', width: '100%' }}
            >
              {selectedTab === 'CsTactics' && <CsTactics />}
              {selectedTab === 'XDesign' && <XDesign />}
              {selectedTab === 'LaraBug' && <LaraBug />}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default MeusProjetos;