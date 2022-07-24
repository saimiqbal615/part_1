import React from 'react'
import  Content  from './Content';

const Header = () => {
    const course = 'Half Stack application development'
    
    const array=[
        {
        part1 : 'Fundamentals of React',
        exercises1 : 10
        
        },
        {
         part2 : 'Using props to pass data',
         exercises2 : 7
        },
        {
        part3 : 'State of a component',
        exercises3 : 14
        }

    ]
  return (
    <div>
        <h1>{course}</h1>
{
        array.map((props)=>{
            return(
                <Content props={props}/>
           ) })}
    </div>
  )
}

export default Header