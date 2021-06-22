import React,{useState,useRef, } from 'react'
import Count from '../helper/Count'
  


export default function MemoComponent() {
    const [text, setText]= useState('');
    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
          <Count/>
        </div>
    )
}
