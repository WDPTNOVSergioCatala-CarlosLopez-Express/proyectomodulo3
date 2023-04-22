const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require ('../config/db.config.js')
const User = require("../models/user.model");


const users = [
  {
    name: "John",
    surname: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    password: "password123",
    address: "123 Main St",
    profilePic: "https://example.com/profile.jpg",
    isAdmin: false,
    isConfirmed: true,
  },
  {
    name: "Jane",
    surname: "Doe",
    username: "janedoe",
    email: "janedoe@example.com",
    password: "password456",
    address: "456 Oak St",
    profilePic: "https://example.com/profile2.jpg",
    isAdmin: true,
    isConfirmed: true,
  },
];

async function seedUsers() {
  try {
    
    // Borra todos los usuarios existentes
    await User.deleteMany({});

    // Crea los nuevos usuarios
    await User.create(users);

    console.log("Users seeded successfully");
  } catch (error) {
    console.error(error);
  }
}

seedUsers();