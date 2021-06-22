import React,{useState,useContext, createContext, useMemo} from 'react';
import ContextA from '../helper/ContextA';
import ContextB from '../helper/ContextB';
import{ BrowserRouter, Route, Link } from 'react-router-dom'
import { UserContext } from '../helper/UserContext';

export default function UseContextExample() {
   const [user, setUser] = useState(null);
   
   //this means it will only renders when value or setvalue canges
   const value = useMemo(() => ({user, setUser}), [user, setUser])
    
    return (
        <div>
         <nav>
             <ul>
                 <li>
                     <Link to="/">
                         Home
                     </Link>
                 </li>
                 <li>
                     <Link to="/about/">
                         About
                     </Link>
                 </li>
             </ul>
         </nav>
           <UserContext.Provider value={value}>

        
        <Route path="/" exact component={ContextA} />
        <Route path="/about/" exact component={ContextB} />
        </UserContext.Provider>
        </div>
    )
}
