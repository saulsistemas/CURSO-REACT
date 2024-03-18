import React, { useState } from 'react'
import { UserContext } from './UserContext'

//const user = {
//    id:123,
//    name:"Carlos",
//    email:"calos@alpaa.com.pe"
//}
export const UserProvider = ({children}) => {

   const [user,setUser] = useState()
  return (
    // {<UserContext.Provider value={{hola: 'mundo', user:user}}>}
    <UserContext.Provider value={{ user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
