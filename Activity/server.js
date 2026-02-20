import { createServer } from 'http';
import fs from 'fs';

let port = 4000;
let server = createServer((req, res) => {
    let user = `url : ${req.url}, date: ${new Date().toLocaleString()}`;
    fs.writeFile('log.txt', user + '\n', { flag: 'a' }, (err) => {
        if (err) console.log(err);
        else console.log("log added");
    })


    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("<h1>You are in Home pages</h1>");

    }
    else if (req.url === '/about') {
        res.write("You are in About page.")
    }
    else if (req.url === '/contact') {
        res.write("Welcome to contact page.")
    }
    else {
        res.write("404 error")
    }

    res.end();//This is mendentory
});


server.listen(port, () => {
    console.log(`Server listing on ${port}`);
})