import { WebSocketServer } from 'ws';
import {v4 as uuid} from 'uuid';

class App{
    #wss
    #port
    #clients = {};
    #messages = [];

    constructor(port = 8800){
        this.#port = port
    }

    #setEvents(){
        this.#wss.on('connection', (ws)=>{
            const id = uuid();
            this.#clients[id] = ws
            console.log('Зашёл кто то')
        
            this.#messages.forEach(message =>{
                ws.send(JSON.stringify(message))
            })

            ws.on('message', (mess)=>{
                const {name, message} = JSON.parse(mess)
                this.#messages.push({name, message})
                for (let clientId in this.#clients){
                    this.#clients[clientId].send(JSON.stringify({name, message}))
                }
            })

            ws.on('close', ()=>{
                console.log("Пока")
            })
        })
    }

    init(){
        this.#wss = new WebSocketServer({port: this.#port});
        this.#setEvents()
        console.log(`Сервер запущен на ws://localhost:${this.#port}`);
    }
}

export default App