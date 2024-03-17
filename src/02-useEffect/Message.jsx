import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cords, setCoords]= useState()
    useEffect(() => {

        const onMouseMove = ({x,y})=>{
            //const ss = {x,y};
            setCoords({x,y})
            //console.log(cords);
        }
        window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove)

      }
    }, [])
    
  return (
    <>
        <h3>El usuario ya existe</h3>
        <pre> { JSON.stringify(cords) } </pre>
    </>
  )
}
