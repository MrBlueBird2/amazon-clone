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
app.get('/', (request, response) => response.status(200).send('hello world'))

app.get('/qazi', (request, response) => response.status(200).send('WHATS UP QAZI'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-52f9c/us-central1/api