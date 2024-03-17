import { useState } from "react"

export const useCounter = (intialValue = 10) => {

    const [counter, setCounter] = useState(intialValue)

    const increment = (newValue = 1)=>{
        setCounter(counter+newValue)
    }
    const decrement = (newValue =1)=>{
        if(counter<1)return;
        setCounter(counter-newValue)
    }
    const reset = ()=>{
        setCounter(intialValue)
    }
  return {
    counter:counter,
    increment,
    decrement,
    reset
  }
}
