import React, { useContext, useState } from 'react'
import { formContext } from '../UserContext'

export const Admin = () => {


  const {createUser,updateUser} = useContext(formContext)
  // const [createUser, setCreateUser] =useState({
  //     username: "",
  //     email: "",
  //     imgUrl: ""
  // })


  const {email, username, imgUrl} = createUser
  const handleChange = (e)=>{
    const {value, name, files} = e.target
    updateUser((prev)=>({
      ...prev,
      [name]: name === "imgUrl" ? URL.createObjectURL(files[0]):value
    }))
  }
   const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(createUser);
   }


  return (
    <div>
     <form onSubmit={handleSubmit}>
      {imgUrl && <img src= {imgUrl} alt='images'/>}
      <input type="email" placeholder='Email' name='email' value={email} onChange={handleChange}  />
      <input type="text" placeholder='Username' name='username' value={username} onChange={handleChange} />
      <input type="file" name="imgUrl" onChange={handleChange}/>     
      <button type="submit">Create user</button>

     </form>


    </div>
  )
}
