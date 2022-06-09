import React from 'react'
import './styles.css';
import FamilyToken from '../Family-Token/FamilyToken';

export default function FamiliesRow({content}) {
 function handleClick(fam){
   return<div className="family-display">
     you clicked on family {fam}!
   </div>
 }

  return (
    <div className="family-row">
        {content.map(({family, id}) => (
          (family ) ?
            <FamilyToken
           
              key={id}
              family={family}>yo</FamilyToken>
             :
            <div className='blank'/>
        ))}
      
    </div>
  )
}
