import express from 'express';
let server = express();
import path from 'path';
// import { dirname } from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs';



let fileName = fileURLToPath(import.meta.url);
let dirName = path.dirname(fileName);

server.get('/', (req, res) => {
    // res.send("welcome to express server");
    res.sendFile(path.join(dirName, 'index.html'));
})
server.get('/about', (req, res) => {
    res.sendFile(path.join(dirName, 'about.html'));
})
server.get('/contact', (req, res) => {
    res.sendFile(path.join(dirName, 'contact.html'));
})

server.get('/submit', (req, res) => {

    // let {uname, email, password}= req.query;
    // res.send(`Username: ${uname} Email: ${email} Password: ${password}`); // for displaying the data in the browser
    fs.readFile('students.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error reading file");
        }
        else {
            let student = JSON.parse(data);
            student.push(req.query);
            fs.writeFile('students.txt', JSON.stringify(student), (err) => {
                if (err) {
                    console.log("Error writing file");
                }
                else {
                    res.send("Data submitted successfully");
                }
            })
        }


    })
})



server.listen(3000, () => {
    console.log("server is running on port 3000");
})
