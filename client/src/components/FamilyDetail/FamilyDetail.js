import React, {useState} from 'react'

import './styles/styles.css'
import GenusToken from '../GenusToken/GenusToken.js';

const genId = ()=>Math.floor(Math.random()*10000);

export default function FamilyDetail({family}) {
  
  
  const[toggled, setToggled] = useState(false); 
  const[animal, setAnimal] = useState('');   
  function handleClick(elem){
    setAnimal(elem);
    setToggled(true);
    console.log(animal);

  }
  return (<>
    <div className="family-detail">
      <div className={family.family +'-detail'}/>
      {family.genus.map((genus) => (
            <div className={"genus-container "+genus.name+"-genus"}>
              <div className={"genus-"+genus.name}/>
              {genus.species.map((elem) => (
                  <div className ={"species-"+elem} onClick = {() => handleClick(elem)/*setToggled(true)*/}/>
                  ))}
                  


                 
            </div>
            // <GenusToken
           
            //   key={genId().toString()}
            //   genus={genus}/>
              
        ))}
     {toggled && <div className={animal +'-detail'}/>}    
    </div>
    
    </>
  )
}
