import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
    onKeyPressHandler: (e: React.KeyboardEvent) => void
    value: boolean
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, value}
) => {

    const inputClass = error ? s.error : '';

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onKeyPressHandler}
            />
            <span>{error}</span>
            <button disabled={value}
                    onClick={addUser}>add
            </button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
