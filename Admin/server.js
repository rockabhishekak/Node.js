import express from "express";
import path from "path";
// Using express is for http reqest
import {fileURLToPath} from "url"
let our_dir=path.dirname(fileURLToPath(import.meta.url));
const app = express();
//  "/" route
app.get("/",(req,res)=>{
    res.sendFile(path.join(our_dir,"index.html"));
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(our_dir,"contact.html"));
})


app.listen(3000,()=>{
    console.log("server is running");
})