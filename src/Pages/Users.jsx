import React, { useContext } from "react";
import { formContext } from "../UserContext";

export const Users = () => {
  const { createUser } = useContext(formContext);
  return (
    <div>
      <h1>Users</h1>
      <div>
        <pre>{JSON.stringify(createUser)}</pre>
      </div>
    </div>
  );
};
