import React,{useState, useEffect, useReducer} from 'react';




function reducer ({state}){
   // eslint-disable-next-line default-case
   switch (state) {
       case 'PRESSED_ONCE':
           return {
               state: 'PRESSED_TWO'
           }
           case 'PRESSED_TWO':
               return {
                state: 'PRESSED_THREE'
               }
               case 'PRESSED_THREE':
                return {
                    state: 'PRESSED_ONCE'
                   } 
   }
}


const Button = (props) =>{
    const[counter, setCounter]=useState(0)
   const [state, dispatch] = useReducer(reducer, { state: 'PRESSED_ONCE'})
    return( 
        <div  
         style={{
             color:props.color,
             textDecoration:props.underline ? 'underline' : undefined
         }}
        >
            <div onClick={() => dispatch()}>I am a  button</div>
            <div>{state.state}</div>
        </div>
    )
  }

export default function StateMachine() {
    return (
        <div>
            <Button color='black' />
            <Button color='blue' />
            <Button color='green' />
        </div>
    )
}
