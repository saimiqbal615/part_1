import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import course from './components/Header';


function App() {
    
 
  
    return (
      
       <div>
        <Header course={course}/> 
        <Content/>
        {/* <Total /> */}
       </div>
      
    )
  }
  
  export default App;
