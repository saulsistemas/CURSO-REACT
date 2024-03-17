import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef= useRef();

    const onClick = ()=>{
        //document.querySelector('input').select();
        inputRef.current.select();
        console.log(inputRef);
    }

    return (

        <>
            <h1>Focus Screem</h1>
            <hr />
            <input
                type="text"
                className='form-control'
                placeholder='Ingrese Nombre'
                ref={inputRef}
            />
            <button
                className='btn btn-primary mt-2'
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}
