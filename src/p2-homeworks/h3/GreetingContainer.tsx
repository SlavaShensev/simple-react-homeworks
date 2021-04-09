import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setError(null)
    };
    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`);
            setName('')
            setError(null)
        } else {
            setError('Title is required')
        }
    };

    const onKeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }

    const totalUsers = users.length;

    let value
    if (error) {
        value = true
    } else {
        value = false
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
            value={value}
        />
    );
}

export default GreetingContainer;
