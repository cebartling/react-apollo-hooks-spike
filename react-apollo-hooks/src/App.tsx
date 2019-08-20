import React from 'react';
import './App.css';
import {ApolloProvider} from '@apollo/react-hooks';
import {ToastProvider} from 'react-toast-notifications';
import UsersList from "./components/UsersList";
import UserForm from "./components/UserForm";
import client from "./HasuraApolloClient";


const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <ToastProvider>
                <div className="App">
                    <UserForm></UserForm>
                    <hr/>
                    <UsersList></UsersList>
                </div>
            </ToastProvider>
        </ApolloProvider>
    );
};

export default App;
