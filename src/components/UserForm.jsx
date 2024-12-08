import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { INSERT_USER, UPDATE_USER } from "../graphQL";

function UserForm({ refetch, isEditing, user, setEditing }) {
  const [form, setForm] = useState(user || { id: "", name: "", email: "" });
  const [createUser] = useMutation(INSERT_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateUser({
        variables: { id: parseInt(form.id), name: form.name, email: form.email },
      });
      setEditing(false);
    } else {
      await createUser({ variables: { name: form.name, email: form.email } });
    }
    refetch();
    setForm({ id: "", name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      {/* <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      /> */}
      <button type="submit">{isEditing ? "Update User" : "Create User"}</button>
    </form>
  );
}

export default UserForm;
