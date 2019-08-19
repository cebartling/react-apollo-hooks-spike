import {gql} from 'apollo-boost';

const usersSubscription = gql`
    subscription onUsersChange {
      users {
        created_at
        first_name
        id
        last_name
        updated_at
      }
    }
`;

export default usersSubscription;
