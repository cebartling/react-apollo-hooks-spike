import {gql} from 'apollo-boost';

const usersQuery = gql`
    {
      users {
        id
        first_name
        last_name
        created_at
        updated_at
      }
    }
  `;

export default usersQuery;