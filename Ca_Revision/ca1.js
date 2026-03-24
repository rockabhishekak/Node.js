import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'));
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    let {name, email} = req.body;
    fs.readFile("contact.txt","utf-8",(err,data)=>{
        let users = [];
        if(!err && data){
            users = JSON.parse(data);
        };
        users.push({name,email});
        fs.writeFile("contact.txt",JSON.stringify(users,null,2),(err)=>{
            if(err){
                return res.send("Error saving contact");
            }
            res.send("Contact saved successfully");
        });

    });

});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
