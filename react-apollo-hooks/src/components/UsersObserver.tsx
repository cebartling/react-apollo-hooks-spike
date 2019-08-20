import React, {useEffect} from 'react';
import {useSubscription} from "@apollo/react-hooks";
import usersSubscription from "../graphql/subscriptions/UsersSubscription";
import {useToasts} from 'react-toast-notifications';

const UsersObserver: React.FC = () => {
    const {data, loading} = useSubscription(usersSubscription, {});
    const {addToast} = useToasts();

    useEffect(() => {
        if (!loading && data) {
            const message = "Received notification through GraphQL subscription.";
            console.info(message, data);
            addToast(message, {
                appearance: 'success',
                placement: 'bottom-left',
                autoDismissTimeout: 4500,
                autoDismiss: true
            });
        }
    }, [loading, data, addToast]);

    return null;
};

export default UsersObserver;
