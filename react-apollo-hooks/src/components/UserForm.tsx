import React, {RefObject} from 'react';
import {useMutation} from "@apollo/react-hooks";
import createNewUserMutation from "../graphql/mutations/CreateNewUserMutation";
import usersQuery from "../graphql/queries/UsersQuery";

const UserForm: React.FC = () => {

    const [insertMutation] = useMutation(createNewUserMutation, {
        update: (cache, {data: {insert_users: {returning}}}) => {
            // @ts-ignore
            const {users} = cache.readQuery({query: usersQuery});
            cache.writeQuery({
                query: usersQuery,
                data: {
                    users: users.concat(returning)
                }
            });
        }
    });

    const firstNameRef: RefObject<HTMLInputElement> = React.createRef();
    const lastNameRef: RefObject<HTMLInputElement> = React.createRef();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<any> => {
        event.preventDefault();
        const lastName: string = lastNameRef.current ? lastNameRef.current.value : '';
        const firstName: string = firstNameRef.current ? firstNameRef.current.value : '';
        await insertMutation({
            variables: {
                objects: [
                    {last_name: lastName, first_name: firstName}
                ]
            }
        });
    };

    return (
        <div>
            <h1>User Form</h1>
            <div>
                <form onSubmit={async (event) => handleSubmit(event)}>
                    <div>
                        <label> First name
                            <input type="text" name="firstName" ref={firstNameRef}/>
                        </label>
                    </div>
                    <div>
                        <label> Last name
                            <input type="text" name="lastName" ref={lastNameRef}/>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
