import React from 'react';
import {MessageType} from "./HW1";
import a from './Message.module.css';

type ListTypeProps = MessageType

function Message(props: ListTypeProps) {
    return (
        <div className={a.message}>
            <div>
                <img className={a.avatar} src={props.avatar}/>
            </div>
            <div className={a.content}>
                <div className={a.name}>
                    {props.name}
                </div>
                <div className={a.messageTime}>
                    <div className={a.messageItem}>
                        {props.message}
                    </div>
                    <div className={a.time}>
                        {props.time}
                    </div>
                </div>
            </div>
            <div className={a.arrow}></div>
        </div>
    );
}

export default Message;
