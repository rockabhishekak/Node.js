/*
2. Problem statement : implement two specific post routes with the following logic
 A. Route / user-form(User Registration)
objective - Accept userid , password and email from the form..
storage : save the data in user.txt;
logic: Read user.txt first
termination : if the incoming email already exists in the user list terminate and send " user email already registered."
success: if unique , append the new user and send " user account created successfully"


*/
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));

// show form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

// user registration
app.post("/submit", (req, res) => {

    let { userID, password, email } = req.body;

    fs.readFile("users.txt", "utf-8", (err, data) => {

        let users = [];

        if (!err && data) {
            users = JSON.parse(data);
        }

        // check email exists
        let emailExists = users.find(user => user.email === email);

        if (emailExists) {
            return res.send("User email already registered");
        }

        // add new user
        users.push({ userID, password, email });

        fs.writeFile("users.txt", JSON.stringify(users, null, 2), (err) => {

            if (err) {
                return res.send("Error saving user");
            }

            res.send("User account created successfully");

        });

    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});