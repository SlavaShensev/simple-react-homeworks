import React from 'react';
import Message from './Message';

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessageType = {
    avatar: 'https://cdn141.picsart.com/275574803034201.jpg',
    name: "Artem",
    message: "npm start нажал?",
    time: "20:00",
}

function HW1() {
    return (
        <div>
            {/*<hr>*/}
            {/*homeworks 1*/}
            {/*should work (должно работать)*/}
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW1;
