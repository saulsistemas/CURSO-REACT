import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter, increment,decrement,reset} = useCounter()
    return (
        <>
            <div>Counter whith Hook {counter}</div>

            <hr />
        {/* Varias maneras de llamar a la funcion del useCounter*/ }
            <button 
                className='btn btn-primary'
                onClick={()=>increment()}
            >+1</button>
            
            <button 
                className='btn btn-primary'
                onClick={reset}
            >Reset</button>

            <button 
                className='btn btn-primary'
                onClick={
                    function(){
                        decrement(2)
                    }
                }
            >-1</button>
        </>

    )
}
