import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter();
    const[show,setShow]=useState(true)
    return (
        <>
            <h1>Counter : 
                <Small value={counter}/>
            </h1>

            <button
                className='btn btn-success m-2'
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className='btn btn-outline-success m-2'
                onClick={ ()=>setShow(!show) }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        
        </>
    )
}
