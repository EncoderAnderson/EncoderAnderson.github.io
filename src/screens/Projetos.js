import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import CsTactics1 from '../assets/CsTactics1.png'
import CsTactics2 from '../assets/CsTactics2.png'
import CsTactics3 from '../assets/CsTactics3.png'
import CsTactics4 from '../assets/CsTactics4.png'
import CsTactics5 from '../assets/CsTactics5.png'
import CsTactics6 from '../assets/CsTactics6.png'
import CsTactics7 from '../assets/CsTactics7.png'
import LaraBug1 from '../assets/LaraBug1.png'
import LaraBug2 from '../assets/LaraBug2.png'
import LaraBug3 from '../assets/LaraBug3.png'
import LaraBug4 from '../assets/LaraBug4.png'
import LaraBug5 from '../assets/LaraBug5.png'
import LaraBug6 from '../assets/LaraBug6.png'
import LaraBug7 from '../assets/LaraBug7.png'
import XDesign1 from '../assets/XDesign1.png'
import XDesign2 from '../assets/XDesign2.png'
import XDesign3 from '../assets/XDesign3.png'
import XDesign4 from '../assets/XDesign4.png'
import XDesign5 from '../assets/XDesign5.png'
import XDesign6 from '../assets/XDesign6.png'
import XDesign7 from '../assets/XDesign7.png'
import Style from "../styles/Style";

const imagesProjetos = [CsTactics2, LaraBug2, XDesign3, CsTactics2, LaraBug2, XDesign3 ]
const imagesLaraBug = [LaraBug1, LaraBug2, LaraBug3, LaraBug4, LaraBug5, LaraBug6, LaraBug7]
const imagesCsTactics = [CsTactics1, CsTactics2, CsTactics3, CsTactics4, CsTactics5, CsTactics6, CsTactics7]
const imagesXDesign = [XDesign1, XDesign2, XDesign3, XDesign4, XDesign5, XDesign6, XDesign7]


const MeusProjetos = () => {
const carousel = useRef();
const [width, setWidth] = useState(0);

useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
}, [])

    const [height] = useState(window.innerHeight);

    return(
        <div style={{...Style.DivProjetos, position:'relative', display:'flex', maxWidth: '700px', margin:0, height:'auto', maxHeight:'700px', minHeight:'500px'}}>
          
        
<motion.div className="carousel" ref={carousel} whileTap={{cursor:'grabbing'}} drag="x" dragConstraints={{ right:0, left: -width}} initial={{ x:200 }} animate={{ x:0 }} transition={{duration:1}} style={{position:'relative', alignItems:'center',
justifyContent:'center', cursor:'grab', overflow:'hidden', display:'flex' }} > 

<motion.div style={{display:'flex', alignItems:'center',
justifyContent:'center', alignSelf:'center' }}>

{imagesProjetos.map(image => (
    <motion.div key={image} style={{...Style.item, position:'relative', 
    border: '2px solid #41d3f8', borderRadius:'10px', boxShadow: "-5px -3px 4px #f30fb3", padding:'5px' }}>
        <img src={image} alt='texto alt' style={{width:'200px', borderRadius:'10px', }} /> 
        </motion.div>
))}

</motion.div>

</motion.div>

        </div>
    )
}

export default MeusProjetos;