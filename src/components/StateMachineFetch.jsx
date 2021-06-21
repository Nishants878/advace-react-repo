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
 

export default function StateMachineFetch() {
   
    const [state, setState] = useState('idle');

   useEffect(() =>{
    setState('loading')
       fetch('../../public/data.json').then(() =>{
                 //do something

                 setState('Loaded')
       }).catch((err) =>{
           setState("Error")
       })
   }, [])

    return (
        <div>
           current state: {state}
        </div>
    )
}
