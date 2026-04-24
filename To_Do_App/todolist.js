// import express from 'express';
// import bodyParser from "body-parser";
// // import { Client } from 'pg';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// // connet to the database
// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'todo_db',
//     password: 'Abhi@123',
//     port: 5432,
// });
// client.connect();


// app.get('/', (req, res) => {
//     res.sendFile(import.meta.dirname + '/index.html');
// });
// app.post('/add-task', (req, res) => {
//     console.log("Request received:", req.body);
//     const task = req.body.task_name;
//     console.log("Task to add:", task);
//     client.query('INSERT INTO tasks (task_name, status) VALUES ($1, $2)', [task, 'pending'], (err, result) => {
//         if (err) {
//             console.error('Error adding task:', err);
//             res.send('Error adding task');
//         } else {
//             console.log('Task added successfully');
//             res.send('Task added successfully');
//         }
//     });
// });
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// sql commands
// create table tasks(id serial, primary key, task_name varchar(255), status varchar(20) default 'pending');








import express from 'express';
import bodyParser from "body-parser";
import pkg from '@prisma/client';
import path from 'path';
import { fileURLToPath } from 'url';
const { PrismaClient } = pkg;

const app = express();
const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/add-task', async (req, res) => {
    try {
        const task = req.body.task_name;

        await prisma.task.create({
            data: {
                task_name: task,
                status: "pending"
            }
        });

        res.send("Task added successfully");
    } catch (error) {
        console.error(error);
        res.send("Error adding task");
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});