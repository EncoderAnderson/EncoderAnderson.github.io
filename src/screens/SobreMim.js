import React from "react";
import { useState, useEffect } from 'react';
import Style from "../styles/Style";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import purpleball from '../assets/purpleball.png';

const SobreMim = () => {
    const [width] = useState(window.innerWidth);
    const [height] = useState(window.innerHeight);

    const [fadeInImage, setFadeInImage] = useState(false);
    const [setFadeOut] = useState(false);
    
  
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

    return(
        <div style={{ flex:1,
          backgroundColor:'#1C1C1C',
          width:'100%',
          height:'auto',
          bottom:`${width*0.075}px`,
          right:`${width*0.05}px`,
          position:'relative',
          justifyContent:'center', 
          alignItems:'center',
          maxHeight:'910px',
          opacity: fadeInImage ? 1 : 0,
          transition: 'opacity 1s',
          }}>

<div style={{position:'absolute', borderRadius:"100%", width:"87px",boxShadow: "-3px -3px 4px white ", bottom:`${height*1.055}px`, right:`${width*0.241}px`}}>
<img src={purpleball} alt="logo" style={{ ...Style.imagemAndersonPrincipal,  color:'#41d3f8',  boxShadow: "-3px -3px 4px #f30fb3 ", borderRadius:"100%", width:"87px", position:'absolute', bottom:`${height*0.001}px`, left:`${width*0.12}px`,border: '2px solid #41d3f8', }} />

</div>

<VerticalTimeline
  style={{
    borderLeft: "3px solid black",
    marginLeft: "10px", // Ajuste conforme necessário
    color: "black",
    fontFamily: "Arial, sans-serif", // Exemplo de estilo de fonte
    backgroundColor: "#f4f4f4", // Exemplo de cor de fundo
    padding: "20px", // Exemplo de preenchimento
  
  }}
  className="custom-vertical-timeline"
>
        
              <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{width:'100%',   background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(65, 211, 248))', color: "black", padding: "30px", borderRadius:'5%', boxShadow: "-4px -4px 10px #f30fb3",  }}
          contentArrowStyle={{ borderRight: "1px solid  transparent", }}
          date=""
          iconStyle={{ background: "rgb(243, 15, 179)", color: "#41d3f8 ", borderTop: "7px solid  black"}}
      
        >
          
          <h3 style={{textAlign:'center'}} className="vertical-timeline-element-title">Curso Técnico de Informática</h3>
          <h4 style={{textAlign:'center'}} className="vertical-timeline-element-subtitle">SpMicro - São Paulo, SP</h4>
          <p style={{textAlign:'center'}}>
           Sistema Operacional Windows e Planilhas eletrônicas.
          </p>
          <h2 style={{textAlign:'center', position:'absolute', bottom:`${height*0.11}px`, left:`${width*0.01}px`,  textShadow: "-3px -3px 6px #f30fb3 ", color:'black '}}>
           2013
          </h2>
      
        </VerticalTimelineElement>


        <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{width:'100%',   background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(65, 211, 248))', color: "black", padding: "30px", borderRadius:'5%',  boxShadow: "-4px -4px 10px #f30fb3",  }}
      contentArrowStyle={{ borderRight: "7px solid  transparent", }}
      date=""
      iconStyle={{ background: "rgb(243, 15, 179)", color: "#41d3f8 ", borderTop: "7px solid  black"}}
      style={{}}
         
        >
          <h3 style={{textAlign:'center'}} className="vertical-timeline-element-title">Inglês</h3>
          <h4 style={{textAlign:'center'}} className="vertical-timeline-element-subtitle">
           Wizzard - São Paulo, SP
          </h4>
          <p style={{textAlign:'center'}}>Inglês intermediário.</p>
          <h2 style={{textAlign:'center', position:'absolute', bottom:`${height*0.11}px`, left:`${width*0.01}px`,  textShadow: "-3px -3px 6px #f30fb3 ", color:'black '}}>
           2015
          </h2>
        </VerticalTimelineElement>


        <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{width:'100%',   background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(65, 211, 248))', color: "black", padding: "30px", borderRadius:'5%', boxShadow: "-4px -4px 10px #f30fb3",  }}
           contentArrowStyle={{ borderRight: "7px solid  transparent", }}

           date=""
           iconStyle={{ background: "rgb(243, 15, 179)", color: "#41d3f8 ", borderTop: "7px solid  black"}}
   
        >
          <h3 style={{textAlign:'center'}} className="vertical-timeline-element-title">Técnico em Gestão de TI</h3>
          <h4 style={{textAlign:'center'}} className="vertical-timeline-element-subtitle">
            Uninove - São Paulo, SP
          </h4>
          <p style={{textAlign:'center'}}>
           Administração e análise de dados e algoritmos.
         
          </p>
          <h2 style={{textAlign:'center', position:'absolute', bottom:`${height*0.11}px`, left:`${width*0.01}px`,  textShadow: "-3px -3px 6px #f30fb3 ", color:'black '}}>
           2016
          </h2>
          
        </VerticalTimelineElement>


        <VerticalTimelineElement
         className="vertical-timeline-element--work"
         contentStyle={{ width:'100%',  background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(65, 211, 248))', color: "black", padding: "30px", borderRadius:'5%',  boxShadow: "-4px -4px 10px #f30fb3",  }}
         contentArrowStyle={{ borderRight: "7px solid  transparent", }}
         date=""
         iconStyle={{ background: "rgb(243, 15, 179)", color: "#41d3f8 ", borderTop: "7px solid  black"}}
        
        >
          <h3 style={{textAlign:'center'}} className="vertical-timeline-element-title">Suporte e atendimento</h3>
          <h4 style={{textAlign:'center'}} className="vertical-timeline-element-subtitle">
          Asus - São Paulo, SP
          </h4>
          <p style={{textAlign:'center'}}>Manutenção, Suporte e atendimento.</p>
          <h2 style={{textAlign:'center', position:'absolute', bottom:`${height*0.11}px`, left:`${width*0.01}px`,  textShadow: "-3px -3px 6px #f30fb3 ", color:'black '}}>
           2017
          </h2>
        </VerticalTimelineElement>


        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{width:'100%',   background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255), rgb(255, 255, 255), rgb(65, 211, 248))', color: "black", padding: "30px", borderRadius:'5%',  boxShadow: "-4px -4px 10px #f30fb3",  }}
    contentArrowStyle={{ borderRight: "7px solid  transparent", }}
    date=""
    iconStyle={{ background: "rgb(243, 15, 179)", color: "#41d3f8 ", borderTop: "7px solid  black"}}
   
  >
          <h3 style={{textAlign:'center'}} className="vertical-timeline-element-title">
          Desenvolvedor JavaScript React
          </h3>
          <h4 style={{textAlign:'center'}} className="vertical-timeline-element-subtitle">FreeLancer - São Paulo</h4>
          <p style={{textAlign:'center'}}>Aplicações Web e Mobile em React JavaScript e React Native.</p>
          <h2 style={{textAlign:'center', position:'absolute', bottom:`${height*0.14}px`, left:`${width*0.01}px`,  textShadow: "-3px -3px 6px #f30fb3 ", color:'black '}}>
           2022
          </h2>
        </VerticalTimelineElement>


  
      </VerticalTimeline>
            
        </div>
    )
}

export default SobreMim;