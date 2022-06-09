import React, {useState} from 'react';
import './styles.css';

export default function FamilyToken({family}) {


  const[toggled, setToggled] = useState(false)

  
 
    return (family !== 'to-come' ?
      <>

       <div className="family-token" onClick = {() => setToggled(true)}>
          {family}</div>;
     
       
      {toggled && <div className="family-detail">{family}</div>}
      </> :
      <div className="to-come" />
    )
  
}
