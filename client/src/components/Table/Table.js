import React from 'react'
import "./styles.css";
import FamiliesRow from "../FamiliesRow/FamiliesRow.js"

export default function Table({familiesRows}) {
  const genId =()=> Math.floor(Math.random() *10000);

  return (
   <div className="periodic-table">
      
     
        {familiesRows.map(({content, id}) => (
          <FamiliesRow
            key={ genId().toString()}
            content={content}
          />
        ))}

    </div>
  
   
  )
}
