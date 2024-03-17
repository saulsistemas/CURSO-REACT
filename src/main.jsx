import React from 'react'
import ReactDOM from 'react-dom/client'
//import { HooksApp } from './HooksApp'
//import { Counter } from './01-useState/Counter'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
