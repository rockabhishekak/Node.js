import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.urlencoded({extended : true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.post("/submit")