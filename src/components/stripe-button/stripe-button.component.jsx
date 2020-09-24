import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_51HT12NItoz9Iz5O1AyvMQWqP3IoVKkdweJkgvVocYOp3ldWgOy5B1bLBWDC76PHomzd0zaM9Ewo7ZIBDMbBhh4Oj00mQvaHEC8';
  const onToken = (token) => {
    console.log(token, 'token');
    alert('Checkout successful');
  }

  return (
    <StripeCheckout 
      label="Checkout Now"
      name="Khanh Le Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      pannelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton;