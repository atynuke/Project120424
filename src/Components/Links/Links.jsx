import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Links.css"


export const Links = ({label, to, icon}) => {
  return (
    <NavLink id='link' to={to}>
        <span>{icon}</span>
         <span>{label}</span>
    </NavLink>
    
  )
}
