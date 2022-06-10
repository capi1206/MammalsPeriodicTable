import React from 'react'

import './styles/styles.css'
import GenusToken from '../GenusToken/GenusToken.js';

const genId = ()=>Math.floor(Math.random()*10000);

export default function FamilyDetail({family}) {
  return (
    <div className="family-detail">
      <div className={family.family +'-detail'}/>
      {family.genus.map((genus) => (
            <GenusToken
           
              key={genId().toString()}
              genus={genus}/>
          
        ))}
          
    </div>
  )
}
