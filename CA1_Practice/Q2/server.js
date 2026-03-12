/*B. Route : /student-from(Student Enrollment )
objective : accept student Name roll no, and student Email
storage : save data in studentdata.txt

logic: Read studentdata.txt first 
Termination : if the studenatEmaiil or rollno already exists in the database, terminate the operation and send : "Student record already exists, data not saved."
success: if unique , append the entry and update the file. "Student form submitted successfully."*/

import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(filename);

app.use(express.urlencoded({extended : true}));

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"form.html"));
});

app.post("/submit",(req, res) => {
    let {name , email, password} = req.body;
    fs.readFile('student.txt',"utf-8",(err,data)=>{

        let arr = [];
        if(!err && data){
            arr = JSON.parse(data);
        }
        let emailExits = arr.find(user => user.email === email);
        if(emailExits){
            return res.send("Students email already registerd");
        }
        arr.push({name, email,password});
        fs.writeFile("student.txt",JSON.stringify(arr),(err)=>{
            if(err)
            {
                return res.send("Error saving user");
            }
            else
            {
                res.send("Student account created successfully");
            }
        })
    });


    

});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

