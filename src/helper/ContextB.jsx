import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

export default function ContextB() {
   
    const {user, setUser} = useContext(UserContext)
      const [name, setName] = useState("");
      const[select, setSelect] = useState("");
      const[mainData, setMainData] = useState([]);
     
    const handleChange = (e) =>{
        setName(e.target.value)
    };

    const handleSelect = (e) =>{
        setSelect(e.target.value)
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
       
        
           setMainData([...mainData,{name:name,select:select}])
           

    
    };

    console.log(mainData)


    return (
        <div>
        <h2>About</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
       <form onSubmit={handleSubmit}>
           <input value={name} onChange={handleChange} type="text" name="name" placeholder="Name" />
           <select value={select} onChange={handleSelect}>
               <option value="a">A</option>
               <option value="b">B</option>
           </select>
           <input type="submit" value="Submit"/>
       </form>
         </div>
    )
}
