import React, {useState} from 'react';
import { mammalsService } from '../../services/mammalsService.js'

import '../styles/styles.css';


const genId = ()=>Math.floor(Math.random()*10000);

export default function FamilyDetail({family}) {
  
  
  const[toggled, setToggled] = useState(false); 
  const[animal, setAnimal] = useState(null);   
  function handleClick(elem){
    console.log('entra ',elem)
    if(elem.free){
      setAnimal(elem);
      setToggled(true);
    }
    else mammalsService.updateSpecies(elem);

  }
  return (<>
    <div className="family-detail">
      <div className={'f'+family.name +'-detail'}/>
      {family.genus.map((genus) => (
            <div className={"genus-container "+genus.name+"-genus"}>
              <div className={"genus-"+genus.name}/>
              {genus.species.map((elem) => (
                  <div className ={"species-"+elem.name} onClick = {() => handleClick(elem)/*setToggled(true)*/}/>
                  ))}
                  


                 
            </div>
              
        ))}
     {toggled && <div className={animal.name +'-detail'}/>}    
    </div>
    
    </>
  )
}
