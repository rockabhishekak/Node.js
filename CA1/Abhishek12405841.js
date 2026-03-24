import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

let app = express();
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Abhishek12405841.html"));
})

app.post("/submit", (req, res) => {
    let { empId, name, workEmail, department } = req.body;
    fs.readFile("emplooyedata.txt", "utf-8", (err, data) => {
        let arr = [];
        if (!err && data) {
            arr = JSON.parse(data);
        }
        let emailexits = arr.find(val => val.workEmail === workEmail);
        if (emailexits) {
            return res.send("Email already register");
        }
        arr.push({ empId, name, workEmail, department });
        fs.writeFile("emplooyedata.txt", JSON.stringify(arr), (err) => {
            if (err) {
                res.send("File error");
            }
            else {
                res.send("Register succusfully");
            }

        });

    });
});

app.listen(3000, () => {
    console.log("Server is running");
});