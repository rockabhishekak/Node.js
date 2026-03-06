import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import readline from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// import { cookie } from 'cookie-parser';
// import cookieParser from 'cookie-parser';

const app = express();
const ourserver = http.createServer(app);
const io = new Server(ourserver);

let _dirname = dirname(fileURLToPath(import.meta.url));


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('client-msg', (msg) => {
        console.log('Message from client: ', msg);//Terminal main value dikhegi
        io.emit('server-msg', "Client says: " + msg);//sabko dikhane ke liye
    });
});
rl.on('line', (input) => {
    io.emit('server-msg', input);//sirf terminal se message bhejne ke liye
});

ourserver.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});
