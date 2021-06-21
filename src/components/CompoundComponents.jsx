import React,{useState, Children, cloneElement} from 'react';


const Checkbox = ({children }) =>{
    const [checked, setChecked] = useState(true)
  const  allChildren =  Children.map(children,child =>{
      
     const clone = cloneElement(child, {
         checked, setChecked
     })
     return clone

    })
    return allChildren
};

const CheckboxInput = ({checked, setChecked }) =>{
  
 

    return <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
};

const Label = ({ setChecked ,children }) =>{
    return <label onClick={() => setChecked(state => !state)} >{children}</label>
}

export default function CompoundComponents() {
    return (
        <Checkbox>
              <CheckboxInput/>
              <Label>Check box label</Label>
        </Checkbox>
    )
}
