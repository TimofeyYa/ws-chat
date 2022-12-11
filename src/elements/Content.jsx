import React from "react";
import ChatForm from "./ChatForm.jsx";
import MessageList from "./MessageList.jsx";

const ws = new WebSocket('ws://localhost:8800')


function Content(){
    const [mesList, setMesList] = React.useState([]);

    React.useEffect(()=>{
        ws.addEventListener('message', ({data})=>{
            setMesList((prevMess) => [...prevMess, JSON.parse(data)])
        })
    }, [])


    function sendMessage(name, message){
      ws.send(JSON.stringify({
        name, message
      }))
    }
  
    return (
        <div>
            <MessageList messageList={mesList}/>
            <ChatForm sendMessage={sendMessage}/>
        </div>
    );
}

export default Content;