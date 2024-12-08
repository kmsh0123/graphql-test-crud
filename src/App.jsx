import React, { useState } from "react";
import {useQuery} from "@apollo/client";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { GET_USERS } from "./graphQL";

function App() {
  const { data, loading, error, refetch } = useQuery(GET_USERS);
  const [isEditing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);  

  console.log(data);
  

  const handleEdit = (user) => {
    setCurrentUser(user);
    setEditing(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <div style={{ padding: "20px" }}>
        <h2>CRUD App with React & Hasura</h2>
        <UserForm
          refetch={refetch}
          isEditing={isEditing}
          user={currentUser}
          setEditing={setEditing}
        />
        <h3>Users List</h3>
        <UserList users={data?.users_data_table} refetch={refetch} handleEdit={handleEdit} />
      </div>
  );
}

export default App;
