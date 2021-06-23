import React,{useEffect,useState} from 'react'

export default function ClousreAndCleanup() {
   
    const[count, setCount] = useState(0);

    useEffect(() =>{
     const timer = setTimeout(() =>{
            alert("You clicked" + count)
        }, 3000);

        return () =>{
            clearTimeout(timer)
        }
    }, [count])

    return (
        <div>
            <p>You Clicked:{count} </p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
