import React from 'react';
import './App.css';
import Table from './components/Table/Table';

import familiesRows from './listFamiliesRow.js'


function App() {
  return (
  <div className="App">
 
    <h1>Mammals periodic table</h1>
  
    <div className="container">
      <div className="left-dashboard">
        
      </div>
      <Table familiesRows={familiesRows} />
    </div>
  </div>  
  );
}

export default App;
