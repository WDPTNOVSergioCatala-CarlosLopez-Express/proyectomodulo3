const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
require ('../config/db.config.js')
const User = require("../models/user.model.js");
const Product = require('../models/product.model.js')

const products = [
  {
    "name": "Intel Core i9-11900K",
    "description": "Powerful 11th generation Intel Core processor for high-performance computing",
    "price": 599.99,
    "reference": "INTC-i9-11900K",
    "images": [
      "https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/intel/procesadores/procesador-intel-core-i9-11900k-35ghz/galeria/procesador-intel-core-i9-11900k-35ghz-galeria1.jpg",
      
    ],
    "category": "Processors",
    "subcategory": "Desktop",
    "stock": 10,
    
  },
  {
    "name": "Intel Core i7-11700K",
    "description": "High-performance 11th generation Intel Core processor for gaming and content creation",
    "price": 449.99,
    "reference": "INTC-i7-11700K",
    "images": [
      "https://m.media-amazon.com/images/I/51ajiHEOsKL._AC_SY450_.jpg",
      
    ],
    
    "category": "Processors",
    "subcategory": "Desktop",
    "stock": 15,
    
  },
  {
    "name": "Intel Core i5-11600K",
    "description": "Mid-range 11th generation Intel Core processor for gaming and everyday computing",
    "price": 299.99,
    "reference": "INTC-i5-11600K",
    "images": [
      "https://img.pccomponentes.com/articles/36/362356/1204-intel-core-i5-11600k-39-ghz.jpg",
      
    ],
    "category": "Processors",
    "subcategory": "Desktop",
    "stock": 20,
    
  },
  {
    "name": "Intel Core i9-12900K",
    "description": "Flagship 12th generation Intel Core processor for extreme performance computing",
    "price": 699.99,
    "reference": "INTC-i9-12900K",
    "images": [
      "http://img.pccomponentes.com/articles/57/574288/1444-intel-core-i9-12900k-52-ghz.jpg",
      
    ],
    "category": "Processors",
    "subcategory": "Desktop",
    "stock": 8,
    
  },
  {
    "name": "NVIDIA GeForce RTX 3080",
    "description": "High-performance graphics card for gaming and content creation",
    "price": 999.99,
    "reference": "NVD-RTX-3080",
    "images": [
      "https://m.media-amazon.com/images/I/81B2tCDJWgS._AC_SL1500_.jpg",
      
    ],
    "category": "Graphics Cards",
    "subcategory": "Desktop",
    "stock": 5,
    
  },
  {
    "name": "AMD Radeon RX 6900 XT",
    "description": "Powerful graphics card for high-end gaming and professional workloads",
    "price": 1299.99,
    "reference": "AMD-RX-6900XT",
    "images": [
      "https://m.media-amazon.com/images/I/81U5H5c0jyL._AC_SL1500_.jpg",
      "image5.jpg",
      "image6.jpg"
    ],
    "category": "Graphics Cards",
    "subcategory": "Desktop",
    "stock": 3,
    
  },
  {
    "name": "NVIDIA GeForce RTX 3070",
    "description": "High-performance graphics card for gaming and creative work",
    "price": 699.99,
    "reference": "NVD-RTX-3070",
    "images": [
      "http://img.pccomponentes.com/articles/52/528568/1116-gigabyte-geforce-rtx-3070-gaming-oc-lhr-v2-8gb-gddr6.jpg",
      
    ],
    "category": "Graphics Cards",
    "subcategory": "Desktop",
    "stock": 8,
    
  },
  {
    "name": "AMD Radeon RX 6800 XT",
    "description": "High-performance graphics card for gaming and professional applications",
    "price": 899.99,
    "reference": "AMD-RX-6800XT",
    "images": [
      "https://img.pccomponentes.com/articles/33/336339/1314-powercolor-amd-radeon-rx-6800xt-red-devil-16gb-gddr6.jpg",
      
    ],
    "category": "Graphics Cards",
    "subcategory": "Desktop",
    "stock": 6,
    
  },
  {
    "name": "Western Digital Blue 1TB HDD",
    "description": "Reliable and affordable 1TB hard disk drive for storage purposes",
    "price": 59.99,
    "reference": "WD-BLUE-1TB",
    "images": [
      "http://img.pccomponentes.com/articles/5/52021/22.jpg",
      
    ],
    "category": "Hard Drives",
    "subcategory": "Desktop",
    "stock": 15,
    
  },
  {
    "name": "Seagate Barracuda 2TB HDD",
    "description": "High-capacity 2TB hard disk drive for storage-intensive tasks",
    "price": 79.99,
    "reference": "ST-BARRACUDA-2TB",
    "images": [
      "http://img.pccomponentes.com/articles/18/182592/37656306-31219234200.jpg",
      
    ],
    "category": "Hard Drives",
    "subcategory": "Desktop",
    "stock": 10,
    
  },
  {
    "name": "Samsung 970 EVO Plus 500GB SSD",
    "description": "High-performance 500GB solid-state drive for fast data access",
    "price": 119.99,
    "reference": "SAMSUNG-970EVO-500GB",
    "images": [
      "https://img.pccomponentes.com/articles/18/185881/au-970-evoplus-nvme-m2-ssd-mz-v7s500bw-140337454.jpg",
      
    ],
    "category": "Solid State Drives",
    "subcategory": "Internal",
    "stock": 20,
    
  },
  {
    "name": "Crucial MX500 1TB SSD",
    "description": "Reliable and high-capacity 1TB solid-state drive for improved performance",
    "price": 139.99,
    "reference": "CRUCIAL-MX500-1TB",
    "images": [
      "https://m.media-amazon.com/images/I/81ZXHTD0I2L._AC_SS450_.jpg",
      
    ],
    "category": "Solid State Drives",
    "subcategory": "Internal",
    "stock": 12,
    
  },
  {
    "name": "ASUS ROG Strix Z590-E Gaming",
    "description": "High-end gaming motherboard with Intel Z590 chipset",
    "price": 349.99,
    "reference": "ASUS-Z590E-GAMING",
    "images": [
      "https://m.media-amazon.com/images/I/81Si9SuDMOL._AC_SY450_.jpg",
      
    ],
    "category": "Motherboards",
    "subcategory": "Intel",
    "stock": 8,
    
  },
  {
    "name": "MSI MPG X570 Gaming Plus",
    "description": "Feature-rich gaming motherboard with AMD X570 chipset",
    "price": 199.99,
    "reference": "MSI-X570-GAMING-PLUS",
    "images": [
      "https://img.pccomponentes.com/articles/21/219114/1.jpg",
      
    ],
    "category": "Motherboards",
    "subcategory": "AMD",
    "stock": 10,
    
  },
  {
    "name": "Gigabyte B550 Aorus Elite",
    "description": "Mid-range motherboard with AMD B550 chipset for gaming and productivity",
    "price": 149.99,
    "reference": "GIGABYTE-B550-AORUS-ELITE",
    "images": [
      "https://media.ldlc.com/r1600/ld/products/00/05/74/40/LD0005744050_1.jpg",
      
    ],
    "category": "Motherboards",
    "subcategory": "AMD",
    "stock": 15,
    
  },
  {
    "name": "ASUS Prime H410M-A",
    "description": "Budget-friendly motherboard with Intel H410 chipset for entry-level systems",
    "price": 79.99,
    "reference": "ASUS-H410M-A",
    "images": [
      "https://m.media-amazon.com/images/I/71V0ca496mL._AC_SY450_.jpg",
      
    ],
    "category": "Motherboards",
    "subcategory": "Intel",
    "stock": 20,
    
  },
  {
    "name": "Corsair Vengeance RGB Pro 16GB (2 x 8GB) DDR4 3200MHz",
    "description": "High-performance DDR4 RAM with vibrant RGB lighting",
    "price": 129.99,
    "reference": "CORSAIR-RGBPRO-16GB-3200",
    "images": [
      "https://img.pccomponentes.com/articles/16/164467/3.jpg",
      
    ],
    "category": "Memory",
    "subcategory": "Desktop",
    "stock": 10,
    
  },
  {
    "name": "G.Skill Ripjaws V Series 32GB (2 x 16GB) DDR4 3600MHz",
    "description": "High-capacity DDR4 RAM for gaming and multitasking",
    "price": 199.99,
    "reference": "GSKILL-RIPJAWSV-32GB-3600",
    "images": [
      "https://img.pccomponentes.com/articles/30/304447/3375-gskill-ripjaws-v-ddr4-3200-pc4-25600-32gb-2x16gb-cl16-mejor-precio.jpg",
      
    ],
    "category": "Memory",
    "subcategory": "Desktop",
    "stock": 8,
    
  },
  {
    "name": "Kingston HyperX Fury 8GB DDR4 2666MHz",
    "description": "Affordable DDR4 RAM for entry-level systems",
    "price": 59.99,
    "reference": "KINGSTON-HYPERXFURY-8GB-2666",
    "images": [
      "http://img.pccomponentes.com/articles/43/432611/1302-kingston-fury-beast-ddr4-2666-mhz-8gb-cl16.jpg",
      
    ],
    "category": "Memory",
    "subcategory": "Desktop",
    "stock": 15,
    
  }
  
  
  
  
  
  
  
];

async function seedProducts() {
  try {
    
    // Borra todos los usuarios existentes
    /*//await User.deleteMany({});*/

    // Crea los nuevos usuarios
    await Product.create(products);

    console.log("Users seeded successfully");
  } catch (error) {
    console.error(error);
  }
}

seedProducts();
/*const { faker } = require('@faker-js/faker');

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
}*/