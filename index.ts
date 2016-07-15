import {CreaturesService} from './App/Services/CreaturesService';
import * as ws from 'ws';

const service = new CreaturesService();

const serv = ws.createServer({port:8081, host:'127.0.0.1'}, (connection)=>{
    connection.onmessage = (msg)=>{
        for (let i = 0; i < msg.data; i++){
            let message = `${i}/${Math.floor(msg.data)}: ${service.creatures[i % service.creatures.length].Attack()}`;
            setTimeout(() => { if (connection.readyState == connection.OPEN) connection.send(message) }, i * 1000);
      }
    };
});
