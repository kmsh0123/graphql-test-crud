import { gql } from "@apollo/client";

// Queries
export const GET_USERS = gql`
  query GetDataTable {
  users_data_table {
    id
    name
  }
}
`;

// Mutations
export const INSERT_USER = gql`
  mutation InsertDataTable($name: String!) {
  insert_users_data_table(objects: {name: $name}) {
    affected_rows
    returning {
      id
      name
    }
  }
}
    
`;

export const UPDATE_USER = gql`
 mutation UpdateDataTable($id: Int!, $name: String!) {
  update_users_data_table(where: {id: {_eq: $id}}, _set: {name: $name}) {
    returning {
      id
      name
    }
  }
}
`;

export const DELETE_USER = gql`
 mutation DeleteUser($id: Int!) {
  delete_users_data_table(where: {id: {_eq: $id}}) {
    affected_rows
    returning {
      id
    }
  }
}
`;
