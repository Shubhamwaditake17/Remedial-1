require('dotenv').config(); // Loads .env file variables
const express = require('express');
const mongoose = require('mongoose');
// ... (rest of your requires)

// --- ADD THIS LINE ---
console.log('1. Server script started.');

const app = express();
// ... (rest of your app setup)

// --- ADD THIS LINE (right before connecting) ---
console.log('2. Connecting to MongoDB with URI:', process.env.MONGO_URI);

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI);
// ... (rest of your file)