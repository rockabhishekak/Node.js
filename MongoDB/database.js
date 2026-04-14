import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/myapp').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
let newuserschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
let usermodel = mongoose.model('User', newuserschema);

  const user = new usermodel({
    name: "Abhishek Kumar",
    email: "abhishek7631@gmail.com",
    password: "password123"
  });
user.save();
console.log("User saved");

