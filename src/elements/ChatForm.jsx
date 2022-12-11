import React from "react"

function ChatForm({sendMessage}){

    const [name, setName] = React.useState('')
    const [message, setMessage] = React.useState('')

    const submitForm = (e) =>{
        e.preventDefault();
        sendMessage(name, message);
        setMessage('')
    }

    return (
        <div>
            <form action="">
                <input type="text" onChange={(e)=> setName(e.target.value)} value={name} placeholder="name" name="name"/>
                <input type="text" onChange={(e)=> setMessage(e.target.value)} value={message} placeholder="message" name="message"/>
                <button onClick={submitForm}>send</button>
            </form>
        </div>
    )
}

export default ChatForm