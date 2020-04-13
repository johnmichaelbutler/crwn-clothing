import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // Stripe requires the price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_5uyEQjGOKix6ZbELqNtH7vu6003VbAEP1I';
  // The token would be passed to the backend to take the charge and run it
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');

  }
  return (
    // Stripe Checkout has a lot of parameters that are required
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;