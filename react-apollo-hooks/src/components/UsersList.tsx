import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import usersQuery from "../graphql/queries/UsersQuery";

const UsersList: React.FC = () => {
    const { loading, error, data } = useQuery(usersQuery);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>A GraphQL error occurred!</div>;

    const renderData = () => {
        return data.users.map(({ id, first_name, last_name }: { id: string, first_name: string, last_name: string}) => (
            <div key={id}>
                {last_name}, {first_name}
            </div>
        ));
    };


    return (
        <div>
            <h1>Users list</h1>
            {renderData()}
        </div>
    );
};

export default UsersList;
