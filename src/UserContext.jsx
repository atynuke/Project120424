import React, { createContext, useState } from 'react'

export const formContext= createContext()

export const UserContext = (children) => {

    const [createUser, setCreateUser] =useState({
        username: "",
        email: "",
        imgUrl: ""
    })

    const updateUser = (data) =>{
      setCreateUser(data)
    }
  return (

<formContext.Provider>
    {children}
</formContext.Provider>
)
}
