import  express from 'express';
let server = express();
import path from 'path';
// import { dirname } from 'path';
import { fileURLToPath } from 'url';

let fileName = fileURLToPath(import.meta.url);
let dirName = path.dirname(fileName);

server.get('/', (req, res) => {
    res.send("welcome to express server")
})



server.listen(3000, () => {
    console.log("server is running on port 3000");
})