const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"iphone 14pro",
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 140000,
        desc: "The iPhone 14 Pro introduces a new Dynamic Island area instead of a notch, an upgraded 48-megapixel primary camera, and an always-on display. "
    },
    {
        name:"macbook m2",
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 250000,
        desc: "The Apple MacBook Air 13.6-Inch laptop is powered by the new M2 chip. It is loaded with 8GB RAM and 256GB SSD. The MacBook Air features a brilliant Retina display, a FaceTime HD camera, and studio‑quality mics."
    },
    {
        name:"iwatch",
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 70000,
        desc: "Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email."
    },
    {
        name:"ipad",
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 88000,
        desc: "Discover AI4Chat's Book Description Generator that aids authors in creating compelling, engaging, and unique book descriptions using advanced artificial intelligence technology. "
    },
    {
        name:"airpods",
        img:'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price: 27000,
        desc: "AirPods are wireless Bluetooth earbuds designed by Apple. They were first announced on September 7, 2016, alongside the iPhone 7. Within two years, they became Apple's most popular accessory. AirPods are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max."
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;