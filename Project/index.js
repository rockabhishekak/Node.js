import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
let ourdir = path.dirname(fileURLToPath(import.meta.url));
import fs from 'fs';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/myapp').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
let newuserschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

let usermodel = mongoose.model('User', newuserschema);
let contactmodel = mongoose.model('Contactus', newuserschema);
const server = express();
server.use(express.urlencoded({extended:false}))

server.get('/', (req, res) => {
    res.sendFile(path.join(ourdir, 'index.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.join(ourdir, 'about.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.join(ourdir, 'contact.html'));
});

server.get('/sign-up', (req, res) => {
    res.sendFile(path.join(ourdir, 'sign-up.html'));
});

server.get('/login', (req, res) => {
    res.sendFile(path.join(ourdir, 'login.html'));
});



server.post('/submit', (req, res) => {
   let newuser = new contactmodel(req.body);
   newuser.save();
   res.send("Thank you for contacting us!");
})











server.post('/submit-sign-up', (req, res) => {
    console.log(req.body);
    const user = new usermodel(req.body);
    user.save();
    res.send("Thank you for signing up!");
});

server.post('/submit-login', (req, res) => {
    
    
});






server.listen(3000, () => {
    console.log('Server is running on port 3000');
});