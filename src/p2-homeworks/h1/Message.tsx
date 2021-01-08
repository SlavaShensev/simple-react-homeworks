import React from 'react';
import {MessageType} from "./HW1";

type ListTypeProps = MessageType

function Message(props: ListTypeProps) {
    return (
        <div>
            <div>
                <img src={props.avatar}/>
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.message}
            </div>
            <div>
                {props.time}
            </div>
        </div>
    );
}

export default Message;
