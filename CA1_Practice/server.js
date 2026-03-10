import express from 'express';
import http from 'http';
import { server } from 'socket.io';
import {dirname} from 'path';
import realine from 'readline';
import {fileURLToPath} from "url";

const app = express();
const ourserver = http.createServer(app);
const io = new Server(ourserver);
let _dirname = dirname(fileURLToPath(import.meta.url));



const rl = realine.createInterface({
    input: process.stdin,
    output : process.stdout
})

app.get('/',(req, res)=>{
    res.sendFile(_dirname+'index.html');
})