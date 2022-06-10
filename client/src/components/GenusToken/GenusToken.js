import React from 'react'
import './styles/styles.css'
import EspeciesToken from '../EspeciesToken/EspeciesToken.js'
const genId =()=> Math.floor(Math.random() *10000);

export default function GenusToken({genus}) {
  return (
    <div className="genus-container">
        <div className={"genus-"+genus.name}/>
        {genus.species.map((especies) => (
            <EspeciesToken
           
              key={genId().toString()}
              especies={especies}/>
          
        ))}  
    </div>
  )
}
