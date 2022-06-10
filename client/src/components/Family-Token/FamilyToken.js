import React, {useState} from 'react';
import './styles/styles.css';
import FamilyDetail from "../FamilyDetail/FamilyDetail.js"


export default function FamilyToken({family}) {


  const[toggled, setToggled] = useState(false)

  
 
    return (family.family !== 'to-come' ?
      <>

       <div className ={family.family} onClick = {() => setToggled(true)}/>
         
     
       
      {toggled && <FamilyDetail className= 'family-detail' family={family} />}
      </> :
      <div className="to-come" />
    )
  
}
