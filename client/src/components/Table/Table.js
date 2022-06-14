import React, {useState} from 'react'
import "./styles.css";

import FamilyDetail from '../FamilyDetail/FamilyDetail.js';

export default function Table({families}) {

  const genId =()=> Math.floor(Math.random() *10000);

  const[toggled, setToggled] = useState(false);
  const[familyRow, setFamilyRow]=useState([]);
  const[family, setFamily] = useState(null);
  const[id, setId] = useState(null);


  //didn't find a simplified way to put in rows in the interest of time
  function toFamiliesRow(fam){
    // console.log(' fam spec')
    // console.log(fam.families);
    let ans = [{content :[{},{}, fam.families[0],{},fam.families[1],fam.families[2],fam.families[3],{},{},
    {},{},{},{}, fam.families[4], fam.families[5],{}
  ], id: 0},
  {content :[ fam.families[6], fam.families[7], fam.families[8],{},{},fam.families[9],fam.families[10],fam.families[11],{},{},
    {},{}, fam.families[12], fam.families[13],families[14], fam.families[15],families[16], fam.families[17]
  ], id: 1},
  {content :[ fam.families[18], fam.families[19], fam.families[20],fam.families[21],{},fam.families[22],fam.families[23],fam.families[24],fam.families[25],{},
     fam.families[26], fam.families[27],families[28], fam.families[29],families[30], fam.families[31], fam.families[32]
  ], id: 2},
]
  let ind =33;
  let aux=[]
  while(ind < 43){aux.push(fam.families[ind]);
                  ind++;
  }
  aux.push({})
  while(ind < 50){aux.push(fam.families[ind]);
    ind++;
}
  ans.push( {content :aux, id :3})
  aux=[]; 
  while(ind < 68){aux.push(fam.families[ind]);
    ind++;
} 
ans.push( {content :aux, id :4})
  aux=[]; 
  while(ind < 86){aux.push(fam.families[ind]);
    ind++;
} 
ans.push( {content :aux, id :5})
  aux=[]; 
  while(ind < 100){aux.push(fam.families[ind]);
    ind++;
} 
aux.push({},{},fam.families[100], fam.families[101], fam.families[102]);
ans.push( {content :aux, id :6});

return ans
  }
  
function handleClick(family, rowId){
 if(family.genus && family.genus.length > 0){ setToggled(true);
                                              setFamily(family);
                                              setId(rowId);}
}

  return (
   <div className="periodic-table">
   
     
       
       
       { toFamiliesRow(families).map((row) => (
          
          <div className="family-row">
          {
          
          row.content.map((family) => (
            (family&& family.name ) ?
              <div className ={family.name} onClick = {() =>{ handleClick(family, row.id)  }}>
              {family.name}</div>
      
               :
              <div className='blank'/>
          ))}
          {toggled && id === row.id && <FamilyDetail className= 'family-detail' family={family} />}   
        
          </div>
       
        ))}  
    </div>
  
   
  )
}



//FamROw



  //  <FamilyToken
             
            //  key={genId().toString()}
            //  family={family}/>
          
          
          // <FamiliesRow
          //   key={ genId().toString()}
          //   content={content}
          // />


//Famm token



  
