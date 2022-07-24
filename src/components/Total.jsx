import React from 'react'
import exercises1 from './Content';
import exercises2 from './Content';
import exercises3 from './Content';

const Total = () => {
  return (
    <div>
       
         <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default Total