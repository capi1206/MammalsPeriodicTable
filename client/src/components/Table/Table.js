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
    console.log(' fam spec')
    console.log(fam);
    let ans = [{content :[{},{}, fam[0],{},{},fam[1],fam[2],fam[3],{},{},
    {},{},{},{},{}, fam[4], fam[5],{}
  ], id: 0},
  {content :[ fam[6], fam[7], fam[8],{},{},fam[9],fam[10],fam[11],{},{},
    {},{}, fam[12], fam[13],fam[14], fam[15],fam[16], fam[17]
  ], id: 1},
  {content :[ fam[18], fam[19], fam[20],fam[21],{},fam[22],fam[23],fam[24],fam[25],fam[26],{},
     fam[27], fam[28],fam[29], fam[30], fam[31], fam[32],fam[33],
  ], id: 2},
]
  let ind =34;
  let aux=[]
  while(ind < 44){aux.push(fam[ind]);
                  ind++;
  }
  aux.push({})
  while(ind < 51){aux.push(fam[ind]);
    ind++;
}
  ans.push( {content :aux, id :3})
  aux=[]; 
  while(ind < 69){aux.push(fam[ind]);
    ind++;
} 
ans.push( {content :aux, id :4})
  aux=[]; 
  while(ind < 87){aux.push(fam[ind]);
    ind++;
} 
ans.push( {content :aux, id :5})
  aux=[]; 
  while(ind < 100){aux.push(fam[ind]);
    ind++;
} 
aux.push({},{},fam[100], fam[101], fam[102]);
ans.push( {content :aux, id :6});

return ans
  }
  
function handleClick(family, rowId){
 if(family.genus && family.genus.length > 0 && family.genus[0].name!=undefined){ setToggled(true);
                                              setFamily(family);
                                              setId(rowId);}
}
  
  return (
   <div className="periodic-table">
   
     
       
       
      
       { 
       toFamiliesRow(families.families).map((row) => (
          
          <div className="family-row">
          {
          
          row.content.map((family) => (
            (family&& family.name ) ?
              <div className ={"family-token f" +family.name+" "+(family.name!= 36 ? "to-come": " ")
            }  onClick = {() =>{ handleClick(family, row.id)  }}/>
     
               
               :
              <div className='blank'/>
          ))}
          {toggled && id === row.id && <FamilyDetail className= 'family-detail' family={family} />}   
          {row.id === 5 && <div className='space-row' />}
          </div>
       
        ))
          }
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



  
