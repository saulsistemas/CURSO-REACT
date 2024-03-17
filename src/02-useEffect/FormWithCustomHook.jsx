import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm'


export const FormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm ,username, email, password } = useForm({
        username: 'carlitos',
        email: 'sandro@sandro.com',
        password: '123456'
    }

    )
    //const { username, email, password } = formState;


    //simple funcion, sino tiene ninguna dependecia [] se llamara nuevamente
    useEffect(() => {
        //console.log('se llamo el use efect');
    }, [])

    //cada vez que cambia algo de mi estado
    useEffect(() => {
        //console.log('se llamo el use porque cambio mi formualrio');
    }, [formState])
    //cada vez que cambia algo de mi estado
    useEffect(() => {
        //console.log('se llamo el use porque cambio el correo');
    }, [email])

    return (
        <>
            <h1>Formulario con CustomHook </h1>
            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className='form-control mt-2'
                placeholder='sandro@sandro.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className='form-control mt-2'
                placeholder='contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                className='btn btn-primary mt-2'
                onClick={onResetForm}
            > Borrar </button>

        </>
    )
}
