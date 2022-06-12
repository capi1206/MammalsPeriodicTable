import React from 'react'
import '../styles/styles.css';
import FamilyToken from '../Family-Token/FamilyToken';

export default function FamiliesRow({content}) {

const genId =()=> Math.floor(Math.random() *10000);

  return (
    <div className="family-row">
        {content.map((family) => (
          (family.family ) ?
            <FamilyToken
           
              key={genId().toString()}
              family={family}/>
             :
            <div className='blank'/>
        ))}
      
    </div>
  )
}
