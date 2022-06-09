import React from 'react'
import "./styles.css";
import FamiliesRow from "../FamiliesRow/FamiliesRow.js"

export default function Table({familiesRows}) {
  return (
   <div className="periodic-table">
      
     
        {familiesRows.map(({content, id}) => (
          <FamiliesRow
            key={id}
            content={content}
          />
        ))}

    </div>
  
   
  )
}
