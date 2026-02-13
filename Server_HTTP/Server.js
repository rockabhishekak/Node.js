import { createServer } from 'http'
import fs from 'fs'
let port = 3000;
let server = createServer((req, res) => {//always sequeance is same as request , responce and variable name can be change {req,res} or{res,req} or {ram, abhi}
    // res.write("Hello This is server");
    // console.log(req.url);


    let log = `${new Date().toLocaleString()} , url:${req.url}`

    fs.writeFile('getserver.txt', log + '\n', { flag: 'a' }, (err) => {
        if (err) console.log(err);
        else console.log('log added')
    })


    if (req.url == '/') {
        // res.writeHead(200,{'content-type':'text/plain'})
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("<h1>You are in Home pages</h1>");

    }
    else if (req.url == '/about') {
        res.write("You are in About page.")
    }
    else if (req.url == '/contact') {
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
// host ke bad => http://localhost:3000/about likhana 
