const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_API_KEY);
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Request post
app.post('/api/payment', async (req, res) => {
  let { amount, id } = req.body;

  console.log(req.body);

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Payment test',
      payment_method: id,
      confirm: true,
    });

    console.log('Payment', payment);

    res.json({
      message: 'Payment test successfully created',
      success: true,
    });
  } catch (error) {
    console.log('Error creating payment');
    res.json({
      message: 'Error',
      success: false,
    });
  }
});

app.get('/', function (_, res) {
  app.use(express.static(path.resolve(__dirname, '../frontend', 'build')));
  res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
});

// Create a Server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('listening on port ' + port));
