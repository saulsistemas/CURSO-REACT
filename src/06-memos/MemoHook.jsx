import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

//no se vuelva a reprocesar
const heavyStuff = ( iterationNumber = 100) =>{
    for (let i=0; i<iterationNumber;i++){
        console.log('ahi vamos');
    }

    // ALT GR + }  = ``  
    return `${ iterationNumber} iteraciones`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const[show,setShow]=useState(true)

    const memorizedValue= useMemo(()=>
        heavyStuff(counter)
    ,[counter])

    return (
        <>
            <h1>Counter : 
                <small> {counter} </small>
            </h1>
            <hr />

            <h4>{ 
                memorizedValue
                //heavyStuff(counter)
             }</h4>

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
