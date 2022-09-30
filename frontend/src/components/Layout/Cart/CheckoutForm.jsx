import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React from 'react';

const CARD_OPTIONS = {
  style: {
    base: {
      iconColor: 'red',
    },
    invalid: {},
  },
};

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  async function paymentHandler(e) {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post('/api/payment', {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log('Payment successful!', response.data.success);
          alert('Payment successful!');
        }
      } catch (error) {
        alert('Payment failed!', error);
      }
    } else {
      console.log('Error 🚨 : ', error.message);
    }
  }

  return (
    <div>
      <h2 className="section-title">Check out</h2>

      <form onSubmit={paymentHandler}>
        <fieldset>
          <div>
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>

        <button>Pay</button>
      </form>
    </div>
  );
}
