import React,{useState,cloneElement} from 'react';



const Button = (props) =>{
    const[counter, setCounter]=useState(0)
  
    return <div 
    style=
    {{color:props.color, textDecoration: props.underline ? 'underline': undefined}} 
     onClick={()=> setCounter((c) => c + props.increment)}>I am  a button{counter}</div>
  }

export default function CommonProps() {
    const props={
        increment:2,
        underline:true,
        color:'black'
      }
    return (
        <div>
         
             <Button {...props} color="black" />
     <Button  {...props} color="blue"/>
     <Button {...props}  color="red"/>
        </div>
    )
}
