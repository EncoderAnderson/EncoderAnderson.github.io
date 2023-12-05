import React, { useEffect, useState, useRef } from 'react';
import Anderson from '../assets/Anderson.png';
import GitHubIcon from '../assets/GitHubIcon.png';
import LinkedinIcon from '../assets/LinkedinIcon.png';
import WhatsAppIcon from '../assets/WhatsAppIcon.png';
import AndersonCurriculoImagem from '../assets/AndersonCurriculoImagem.png'
import Style from '../styles/Style';
import SobreMim from '../screens/SobreMim';
import MeusProjetos from '../screens/MeusProjetos';
import AndersonCostaMoitinhodaSilvaCurriculo from '../assets/AndersonCostaMoitinhodaSilvaCurriculo.pdf';

const PaginaInicial = () => {
  const [animationActive, setAnimationActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState('false');
  const [fadeInActive, setFadeInActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [width] = useState(window.innerWidth);
  const [height] = useState(window.innerHeight);


  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 5000);

    return () => {
     
      clearTimeout(fadeOutTimeout);
    };
  }, []);


  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationActive(true);

    
      setTimeout(() => {
        setFadeInActive(true);
      }, 1000);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, []);

  const imageStyle = {
    opacity: animationActive ? 1 : 0,
    transform: animationActive ? 'scale(1)' : 'scale(0.5)',
    transition: 'opacity 1s, transform 1s',
  };

  const containerStyle = {
    height: '60vh',

  };

  const componentStyle = {
    opacity: fadeInActive ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  const handleTabClick = (tab) => {
    setFadeInActive(false);

    setTimeout(() => {
      setSelectedTab(tab);
      setFadeInActive(true);
    }, 1000);
  };
  
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);


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

  const handleMouseOver4 = () => {
    setHovered4(true);
  };

  const handleMouseOut4 = () => {
    setHovered4(false);
  };


  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = AndersonCostaMoitinhodaSilvaCurriculo;
    link.setAttribute('download', 'AndersonCostaMoitinhodaSilvaCurriculo.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Rola para o topo da página quando o componente é renderizado
    window.scrollTo(1000, 0);
  }, []);

  const handleClick = () => {
    window.open('https://contate.me/encoderanderson')
  };
  
  const handleClick2 = () => {
    window.open('https://github.com/EncoderAnderson?tab=repositories')
  };

  const handleClick3 = () => {
    window.open('https://www.linkedin.com/in/anderson-costa-moitinho-da-silva-4354b9160/')
  };
  

  const meuComponenteRef = useRef();

  useEffect(() => {
    // Verifica se a referência existe antes de tentar acessar a propriedade 'current'
    if (meuComponenteRef.current) {
      // Scroll suave para o topo do componente
      meuComponenteRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);



  return (
    <div ref={meuComponenteRef} style={{
    height: '90vh'}}>
      <div style={{ padding: 10 }}>
        <div style={{ ...containerStyle,  }}>
          <div id="imagemAnderson" style={{...imageStyle, color:'#41d3f8', border: '3px solid black', borderRadius:'50%', boxShadow: "-5px -3px 4px #f30fb3",
    }} 
    >
            <img src={Anderson} alt="logo" style={{ ...Style.imagemAndersonPrincipal,  color:'#41d3f8', border: '2px solid #41d3f8', top:`${height*0.0035}px`, left:`${width*0.0015}px`, boxShadow: "5px 5px 4px #000000", }} />
          </div>
        </div>

<div style={{flexDirection:'column', bottom: `${height * 0.2}px`, position:'relative'}}>


         <div id="imagemIconePrincipal" style={{...imageStyle, position:'relative', left:`${width *0.08}px`, top: `${height * 0.076}px`  }}>
          <button style={{...Style.botaoLinkRedes, left: `${width * 0.04}px`, bottom: `${height * 0.08}px`, transition:'color 1s', boxShadow: "-4px -3px 5px #000000",
         
           }} >
            <img src={WhatsAppIcon} alt="logo" style={{ ...Style.imagemIconePrincipal,  right:`${width *0.0025}px`, top:`${height * 0.0017}px`, cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out',
    transform: hovered ? 'scale(1.3)' : 'scale(1)', 
    }}  
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    onClick={handleClick}
    />
            </button>
          </div>


          <div id="imagemIconePrincipal" style={{...imageStyle, position:'relative', left:`${width *0.04}px`, top: `${height * 0.03}px`  }}>
          <button style={{...Style.botaoLinkRedes, left: `${width * 0.04}px`, bottom: `${height * 0.08}px`, transition:'color 1s', boxShadow: "-4px -3px 5px #000000" }} >
            <img src={GitHubIcon} alt="logo" style={{ ...Style.imagemIconePrincipal,  right:`${width *0.0025}px`, top:`${height * 0.0017}px` , cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out',
    transform: hovered2 ? 'scale(1.3)' : 'scale(1)', 
    }}  
    onMouseOver={handleMouseOver2}
    onMouseOut={handleMouseOut2}
    onClick={handleClick2} />
            </button>
          </div>


          <div id="imagemIconePrincipal" style={imageStyle}>
          <button style={{...Style.botaoLinkRedes, left: `${width * 0.04}px`, bottom: `${height * 0.098}px`, transition:'color 1s', boxShadow: "-4px -3px 5px #000000" }} >
            <img src={LinkedinIcon} alt="logo" style={{ ...Style.imagemIconePrincipal, right:`${width *0.0025}px`, top:`${height * 0.0017}px`, cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out',
    transform: hovered3 ? 'scale(1.3)' : 'scale(1)', 
    }}  
    onMouseOver={handleMouseOver3}
    onMouseOut={handleMouseOut3}
    onClick={handleClick3} />
            </button>
          </div>
 </div>
        <div>
          <div
            style={{
              ...Style.SobreMimContainer,
              right: `${width * 0.14}px`,
              bottom: `${height * 0.3}px`,
              opacity: animationActive ? 1 : 0,
              transform: animationActive ? 'scale(1)' : 'scale(0.1)',
              transition: 'opacity 1s, transform 1.5s',
              transitionDelay: '1s',
              position:'relative',
                 
              }}
          >
            <button
              onClick={() => handleTabClick('SobreMim')}
              style={{
                ...Style.BotaoSelecaoPrincipal,
                transition: 'color 1s',
                fontSize: 35,
                textShadow: "-4px -4px 2px black",
                color:'white'
                
              }}
              onMouseOver={(e) => (e.target.style.color = '#f30fb3')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              Sobre mim
            </button>
          </div>

          <div
            style={{
              ...Style.MeusProjetosContainer,
              left: `${width * 0.205}px`,
              bottom: `${height * 0.365}px`,
              opacity: animationActive ? 1 : 0,
              transform: animationActive ? 'scale(1)' : 'scale(0.1)',
              transition: 'opacity 1s, transform 1.5s',
              transitionDelay: '1s',
            }}
          >
            <button
              onClick={() => handleTabClick('MeusProjetos')}
              style={{
                ...Style.BotaoSelecaoPrincipal,
                transition: 'color 1s',
                fontSize: 35,
                textShadow: "-4px -4px 2px black",
                color:'white'
               
              }}
              onMouseOver={(e) => (e.target.style.color = '#41d3f8')}
              onMouseOut={(e) => (e.target.style.color = 'white')}
            >
              Aplicações
            </button>
          </div>
        </div>

        {(selectedTab === 'SobreMim' || selectedTab === 'MeusProjetos') && (
          <div style={{...componentStyle, position:'absolute',}}>
            {selectedTab === 'SobreMim' && <SobreMim />}
           
            {selectedTab === 'MeusProjetos' && <MeusProjetos />}
          
          </div>
        )}

        <div style={{boxShadow: "-5px -5px 8px #f30fb3", width:"140px", height:"200px",  bottom:`${height*0.02}px`, left:`${width*0.01}px`, position:'fixed', borderRadius:"5%",  cursor: 'pointer', padding:'2px',
     transition: hovered4 ? 'transform 0.5s ease-in-out, opacity 1s' : 'transform 1.5s ease-in-out, opacity 1s',
     transform: hovered4 ? 'scale(1.1)' : animationActive ? 'scale(1)' : 'scale(0.1)',
     opacity: animationActive ? 1 : 0,
    }}  
    onMouseOver={handleMouseOver4}
    onMouseOut={handleMouseOut4}
      onClick={handleDownload}>
        <img src={AndersonCurriculoImagem} alt="logo" style={{ ...Style.imagemAndersonPrincipal,  color:'#41d3f8', border: '2px solid #41d3f8', boxShadow: "5px 5px 4px #000000", borderRadius:"3%", width:"140px", position:'absolute', padding:'2px', }} />

        </div>
      </div>
    </div>
  );
};

export default PaginaInicial;
