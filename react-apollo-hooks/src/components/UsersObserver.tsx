import React from 'react';
import {useSubscription} from "@apollo/react-hooks";
import usersSubscription from "../graphql/subscriptions/UsersSubscription";
import InfoAlert from "./InfoAlert";

const UsersObserver: React.FC = () => {
    const {data, loading} = useSubscription(usersSubscription, {});

    if (!loading && data) {
        // @ts-ignore
        return <InfoAlert/>;
    } else {
        return null;
    }
};

export default UsersObserver;
