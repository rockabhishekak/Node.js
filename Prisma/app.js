require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const app = express();


const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.post('/add-task', async (req, res) => {
  try {
    const task = req.body.task_name;

    await prisma.task.create({
      data: {
        task_name: task,
        status: 'pending',
      },
    });

    res.send("Task Added Successfully");
  } catch (error) {
    console.log("Error:", error);
    res.send("Error occurred");
  }
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});