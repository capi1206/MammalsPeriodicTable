import React from 'react';
import './App.css';
import Table from './components/Table/Table';

// import familiesRows from './listFamiliesRow.js'
import { mammalsService } from './services/mammalsService.js'
import { useCallback, useState, useEffect } from 'react'


function App() {


  const [mammals, setMammals] = useState({});
  const [error, setError] = useState(null);
  
  
  const getAllMammals = async () => {
   
    let { res, error } = await mammalsService.getAllSpecies();
 

    //cleaning up data in the database
 
    res = res.filter(elem => elem.order != undefined).filter(animal => !(animal.family =='36' && (animal.order==7 || animal.name == undefined)) );
    
    console.dir(res);
  //organizing mammals species into a tree structure
    if(!error){
    
      let fams =new Set();
      let animals={ families :[]}
      for( let elem of res){ if(elem.family)fams.add(elem.family)}
  
      for( let fam of fams){  
                            let gens= new Set();
                          for( let animal of res.filter(ele=>ele.family === fam)){
                            gens.add(animal.genus);
                            }
                          let aux=[];
                          for( let genus of gens){
                            aux.push({ name : genus , species : res.filter(ele => ele.family ===fam && ele.genus === genus)})
                          }
                          animals.families.push({ 'order': res.find(ele => ele.family==fam).order, 'name' : fam, 'genus' : aux});
                          animals.families.sort((a,b) => a.order - b.order);
                        }
                        
                        setMammals(animals);
                        
                        }
    else{
      setError(res);
    }
  }
  


  
  useEffect(()=> {
    getAllMammals();
    },[])

  //need to arganize into format to pass for rendering 
  // function setDataIntoTableFormat(animals){
  //   let ans=[];
  //   let aux=[{ family:'to-come'}];
  //   for (let i=0; i<15; i++)aux.push({});
  //   aux.push({family:'to-come'});
  //   ans.push({content : aux, id : 0});

  //   ans.push
  
  //   },
  // }


  return (
  <div className="App">
   <div className="title">
    <h1>Species of the World</h1>
    <p>All mammals included subspecies</p>
    </div>
    <div className="container">
      <div className="left-dashboard">
        
      </div>
      {(mammals.families &&mammals.families.length >0)? <Table families = {mammals} />:
      <div>LOading</div>} 
    </div>
   
  </div>  
  );
}

export default App;



// example of
// animals ={
//   families: [

//     { order: someNumber,
//       name: 'Balaneidae',
//       genus: [
//         {
//           name: 'Eubalaena',
//           species: [
//             {
//               _id: '62a78934739f5a9b7e61292f',
//               family: 'Balaneidae',
//               genus: 'Eubalaena',
//               name: 'SouthernRightWhale',
//               free: false,
//               __v: 0
//             },
//             {
//               _id: '62a78964739f5a9b7e612931',
//               family: 'Balaneidae',
//               genus: 'Eubalaena',
//               name: 'NorthPacificRightWhale',
//               free: true,
//               __v: 0
//             },
//             {
//               _id: '62a78994739f5a9b7e612933',
//               family: 'Balaneidae',
//               genus: 'Eubalaena',
//               name: 'NorthAtlanticRightWhale',
//               free: false,
//               __v: 0
//             }
//           ]
//         },
//         {
//           name: 'Balaena',
//           species: [
//             {
//               _id: '62a789d4739f5a9b7e612935',
//               family: 'Balaneidae',
//               genus: 'Balaena',
//               name: 'BowheadWhale',
//               free: true,
//               __v: 0
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }