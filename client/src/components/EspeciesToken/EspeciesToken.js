import React, {useState} from 'react';
import mammalsService from '../../services/mammalsService.js'



export default function EspeciesToken({species}) {

  const[toggled, setToggled] = useState(false);  

   async function handleClick(){
    //logic if free
    setToggled(true);
    //if not free
    await mammalsService.updateSpecies(species)
  }
  return (
    <>
    <div className ={"especies-"+species} onClick = {() => setToggled(true)}/>
    {toggled && <div className={species +'-detail'} />}  
    </>
  )
}
