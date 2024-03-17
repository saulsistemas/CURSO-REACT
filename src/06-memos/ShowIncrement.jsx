import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    console.log(':(');
  return (
    <button
        className='btn btn-success m-2'
        onClick={()=>{
            increment();
        }}
    >
        +1
    </button>
  )
})
