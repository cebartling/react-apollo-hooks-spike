import React from 'react';
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks';
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import client from "./HasuraApolloClient";


const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <UserForm></UserForm>
                <hr/>
                <UsersList></UsersList>
            </div>
        </ApolloProvider>
    );
};

export default App;
