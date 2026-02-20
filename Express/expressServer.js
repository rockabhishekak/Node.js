import express from 'express';
let server  = express();
server.get('/',(req,res)=>{
    console.log(req.url)
    res.send("Hello World");
})
server.get('/about',(req,res)=>{
    res.send("About");
    
})
server.get('/contact',(req,res)=>{
    
    res.send("Contact Us");
})
server.listen(3000,()=>{});