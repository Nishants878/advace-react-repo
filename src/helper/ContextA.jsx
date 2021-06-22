import React,{useContext} from 'react';
import { login } from './login';
import { UserContext } from './UserContext';



export default function ContextA() {

   const {user, setUser} = useContext(UserContext)

    return (
        <div>
       <h2>Home</h2>
       <pre>{JSON.stringify(user, null, 2)}</pre>

       {user ?(
           <button onClick={() => {
               //call logout
               setUser(null)
           }}>Logout</button>
       ):( <button onClick={ async () => {
        const user = await login()
        setUser(user)
        
        } }>Login</button>)}
 
        </div>
    )
}
