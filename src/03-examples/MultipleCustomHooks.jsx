import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

    const {counter,increment,decrement} = useCounter(1)
    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/'+counter);

    return (
        <>

            <h1>Informacion del pokemon</h1>
            <hr />
            {
                isLoading 
                ? <LoadingMessage/>
                : <PokemonCard 
                    id= {counter} 
                    name={data.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                    /> 
            }
            <h3>{ data?.name }</h3>

<button 
    className='btn btn-primary'
    onClick={ ()=> counter>1?decrement():null}
    >
    Anterior
</button>

<button 
    className='btn btn-primary m-2'
    onClick={()=>increment()}
    >
    Anterior
</button>

            <pre>{JSON.stringify(data,null,2)}</pre>

        </>
    )
}
