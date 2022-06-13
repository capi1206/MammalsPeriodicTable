import React, {useState} from 'react'
import "./styles.css";
import FamiliesRow from "../FamiliesRow/FamiliesRow.js"
import FamilyToken from '../Family-Token/FamilyToken.js';
import FamilyDetail from '../FamilyDetail/FamilyDetail.js';

export default function Table({familiesRows}) {

  const genId =()=> Math.floor(Math.random() *10000);

  const[toggled, setToggled] = useState(false);
  const[family, setFamily] = useState(null);
  const[id, setId] = useState(null);

  return (
   <div className="periodic-table">
      
     
        {familiesRows.map((elem) => (
          <>
          <div className="family-row">
          {elem.content.map((family) => (
            (family.family ) ?
              (family.family !== 'to-come' ?
            <>
      
             <div className ={family.family} onClick = {() =>{ setToggled(true);
                                                                setFamily(family);
                                                                setId(elem.id); console.log(id) }}/>
               
           
             
              
      
            </> :
            <div className="to-come" />
          )
              


              
               :
              <div className='blank'/>
          ))}

          

          {toggled && id === elem.id && <FamilyDetail className= 'family-detail' family={family} />}   
        
          </div>
        
        </>
        ))}
      
    </div>
  
   
  )
}



//FamROw



  //  <FamilyToken
             
            //  key={genId().toString()}
            //  family={family}/>
          
          
          // <FamiliesRow
          //   key={ genId().toString()}
          //   content={content}
          // />


//Famm token



  
