const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KJvjGSD23NhTWP0u3p1deic0O4QIS6ox19sJsr92fOZqTHcIiHqiBKQnDZmtat5b0OzmM4Xth0XSn4CpfJRvwy000Q063g8vS');

// API

// App config
const app = express()

// Middlewarts
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => res.status(200).send('hello world'))

// Listen Command
exports.api = functions.https.onRequest(app)