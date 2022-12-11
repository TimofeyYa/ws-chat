import React from "react";
function MessageList({messageList}){

    return (
        <div>
            <ul>
                {messageList.map((item,index) => 
                        <li key={index}><strong>{item.name}: </strong> {item.message}</li>
                )}
            </ul>
        </div>
    )
}

export default MessageList;