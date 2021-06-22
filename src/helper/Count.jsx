import React,{useState,useRef,memo} from 'react'

  const Count =  memo(() =>{


    const [count, setCount]=useState(0);
    const renders = useRef(0)

    return (
        <div>
     <div>Count : {count}</div>
     <div>renders: {renders.current++}</div>
        <button onClick={() => setCount(c => c+1)}>Increment</button>
    
    </div>
    )

});

export default Count
   
   

