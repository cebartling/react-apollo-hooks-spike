import {gql} from 'apollo-boost';

const createNewUserMutation = gql`
    mutation insert_users($objects: [users_insert_input!]!) {
      insert_users (
        objects: $objects
      ) {
        returning {
          id
          first_name
          last_name
          created_at
          updated_at
        }
      }
    }
  `;

export default createNewUserMutation;
