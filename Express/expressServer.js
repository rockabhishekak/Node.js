import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename)



let server = express();
server.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

server.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})
server.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})

// server.get('/', (req, res) => {
//     let index = fs.readFileSync('index.html', 'utf-8');
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(index);
//     res.end();
// })


// server.get('/about', (req, res) => {
//     // res.send("About");
//     let about = fs.readFileSync('about.html', 'utf-8');
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(about);
//     res.end();


// })


// server.get('/contact', (req, res) => {

//     let contact = fs.readFileSync('contact.html', 'utf-8');
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(contact);
//     res.end();
// })
server.listen(3000, () => {
    console.log('server is ready to work')
})