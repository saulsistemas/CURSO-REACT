import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'carlitos',
        email: 'sandro@sandro.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

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
            <h1>Formulario simple</h1>
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

            {
                (username ==='carlitos') && <Message />
            }
            
        </>
    )
}
