import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import UsersList from "./components/UsersList";

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});


const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <UsersList></UsersList>
            </div>
        </ApolloProvider>
    );
};

export default App;
