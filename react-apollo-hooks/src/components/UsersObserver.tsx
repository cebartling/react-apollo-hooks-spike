import React from 'react';
import {useSubscription} from "@apollo/react-hooks";
import usersSubscription from "../graphql/subscriptions/UsersSubscription";

const UsersObserver: React.FC = () => {
    const {data, loading} = useSubscription(usersSubscription, {});

    if (!loading && data) {
        console.info("Received notification through GraphQL subscription.", data);
    }
    return null;
};

export default UsersObserver;
