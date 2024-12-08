import React from "react";
import { DELETE_USER } from "../graphQL";
import { useMutation } from "@apollo/client";

function UserList({ users, refetch, handleEdit }) {
  const [deleteUser] = useMutation(DELETE_USER);

  console.log(users);
  
  const handleDelete = async (id) => {
    await deleteUser({ variables: { id } });
    refetch();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}{" "}
          <button onClick={() => handleEdit(user)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
