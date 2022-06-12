import React, {useState, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/styles.css';
import FamilyDetail from "../FamilyDetail/FamilyDetail.js"


export default function FamilyToken({family}) {

 

  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();
  const[toggled, setToggled] = useState(false)

  
 
    return (family.family !== 'to-come' ?
      <>

       <div className ={family.family} onClick = {() =>{ setToggled(true) }}/>
         
     
       
       {toggled && <FamilyDetail ref= {testRef} className= 'family-detail' family={family} />} 
{/* 
      <CSSTransition
  in={toggled}
  timeout={100}
  classNames="display"
  unmountOnExit
>
<FamilyDetail ref= {testRef} className= 'family-detail' family={family} />

</CSSTransition> */}
      </> :
      <div className="to-come" />
    )
  
}
