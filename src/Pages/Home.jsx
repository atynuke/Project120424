import React, { useContext, useState } from "react";
import { formContext } from "../UserContext";

export const Home = () => {
  const {createUser}= useContext (formContext)
  // const [userLength, setUserLength] =useState([...createUser])
  return (
    <div>
      <h2> User length</h2>
    </div>
  );
};
