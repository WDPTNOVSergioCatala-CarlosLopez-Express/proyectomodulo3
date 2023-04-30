const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require ('../config/db.config.js')
const User = require("../models/user.model.js");
const Product = require('../models/product.model.js')

/*const users = [
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

seedUsers();*/
const { faker } = require('@faker-js/faker');

const categories = ["Componentes", "Consolas", "Periféricos", "Software", "Periféricos", 'Discos Duros'];

// Crea 100 productos relacionados con tecnología y guárdalos en la base de datos
for (let i = 0; i < 10; i++) {
  const product = new Product({
    name: `tech ${faker.commerce.productName()}`,
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    reference: faker.datatype.uuid(),
    images: [faker.image.imageUrl()],
    category: faker.random.words(1),
    subcategory: faker.commerce.productAdjective(),
    stock: faker.random.numeric(1),
  });
  product.save();
}