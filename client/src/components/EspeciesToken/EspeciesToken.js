import React, {useState} from 'react';

import './styles/styles.css';

export default function EspeciesToken({especies}) {

  const[toggled, setToggled] = useState(false);  
  return (
    <>
    <div className ={"especies-"+especies} onClick = {() => setToggled(true)}/>
    {toggled && <div className={especies +'-detail'} />}  
    </>
  )
}
