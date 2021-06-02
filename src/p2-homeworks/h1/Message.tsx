import React from 'react'
import classes from './Message.module.css'
import {MessageType} from "./HW1";


type PropsType={
    messageData:MessageType
}
function Message(props:PropsType) {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}><img src={props.messageData.avatar} alt=""/></div>
            <div className={classes.wrapper}>
                <div className={classes.name}>{props.messageData.name}</div>
                <div className={classes.message}>{props.messageData.message}</div>
                <div className={classes.time}>{props.messageData.time}</div>
            </div>
        </div>
    )
}

export default Message
